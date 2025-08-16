"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Recommendations() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Dr. Olivia Martín",
      role: "Cirujana Plástica",
      content:
        "Sus trabajos 3D han revolucionado todas nuestras técnicas quirúrgicas para comprensión y comunicación con nuestros pacientes. Creamos procesos físicos como inversiones 3D, maquetas y prototipos que nos permiten ser más precisos y eficientes en nuestros procedimientos.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dra. Valentina Rodríguez Castro",
      role: "Especialista",
      content:
        "Nevelaski es un artista, realiza ilustraciones y animaciones 3D de primera clase. Tiene un gran talento para crear contenido médico de alta calidad que nos ayuda a comunicar conceptos complejos de manera clara y efectiva.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Cirujano Cardiovascular",
      content:
        "Las animaciones médicas de Nevelaski han transformado la forma en que explicamos procedimientos complejos a nuestros pacientes. Su atención al detalle anatómico y capacidad para simplificar conceptos médicos es excepcional.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % testimonials.length
    goToSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
    goToSlide(newIndex)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    // Use a state or prop to track screen size instead of window.innerWidth
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const itemsToShow = isMobile ? 1 : 2
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % testimonials.length
      visible.push({ ...testimonials[index], originalIndex: index })
    }
    return visible
  }

  return (
    <section className="py-20 bg-nevelaski-white">
      <div className="container-nevelaski">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            LO QUE DICEN NUESTROS
            <br />
            <span className="text-nevelaski-red">CLIENTES</span>
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-nevelaski-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-nevelaski-black" />
          </button>

          <div className="mx-10 md:mx-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.originalIndex}-${currentSlide}`}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm transform transition-all duration-500 ease-in-out"
                  style={{
                    animation: `fadeInSlide 0.5s ease-in-out`,
                  }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-display font-bold text-base md:text-lg">{testimonial.name}</h3>
                      <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-nevelaski-red" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
