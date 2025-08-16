"use client"

import { useEffect, useRef } from "react"

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "BRANDING",
      description: "Identidad visual completa",
      icon: "🎨",
      gridPosition: "md:col-start-1 md:row-start-1", // Position 1,1
    },
    {
      title: "WEB",
      description: "Sitios web profesionales",
      icon: "💻",
      gridPosition: "md:col-start-3 md:row-start-1", // Position 3,1
    },
    {
      title: "ANIMACIÓN",
      description: "Contenido audiovisual",
      icon: "🎬",
      gridPosition: "md:col-start-4 md:row-start-2", // Position 4,2
    },
    {
      title: "3D",
      description: "Visualizaciones médicas",
      icon: "🔬",
      gridPosition: "md:col-start-1 md:row-start-2", // Position 1,2
    },
    {
      title: "ILUSTRACIÓN",
      description: "Arte médico especializado",
      icon: "✏️",
      gridPosition: "md:col-start-2 md:row-start-3", // Position 2,3
    },
    {
      title: "PACKAGING",
      description: "Diseño de empaques",
      icon: "📦",
      gridPosition: "md:col-start-4 md:row-start-3", // Position 4,3
    },
    {
      title: "FOTOGRAFÍA",
      description: "Fotografía médica profesional",
      icon: "📸",
      gridPosition: "md:col-start-1 md:row-start-4", // Position 1,4
    },
    {
      title: "CONSULTORÍA",
      description: "Asesoría especializada",
      icon: "💡",
      gridPosition: "md:col-start-3 md:row-start-4", // Position 3,4
    },
    {
      title: "EDITORIAL",
      description: "Publicaciones médicas",
      icon: "📚",
      gridPosition: "md:col-start-4 md:row-start-4", // Position 4,4
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-nevelaski-white">
      <div className="container-nevelaski">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">SERVICIOS</h2>
          <p className="text-lg text-gray-600">
            Te ayudamos las mejores
            <br />
            soluciones en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-4 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className={`group ${service.gridPosition}`}>
              <div className="bg-nevelaski-red p-4 md:p-8 rounded-2xl text-white hover:bg-nevelaski-red-dark transition-colors h-full">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">{service.icon}</div>
                <h3 className="text-base md:text-xl font-display font-bold mb-1 md:mb-2">{service.title}</h3>
                <p className="text-red-100 text-xs md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
