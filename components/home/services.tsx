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
      title: "Animación",
      tool: "3D",
      description: "Identidad visual completa",
      icon: "🎨",
      gridPosition: "md:col-start-2 md:row-start-1", // Position 2,1
      imageURL: "/servicios/card-2-16.svg",      
    },
    {
      title: "WEB",
      description: "Sitios web profesionales",
      icon: "💻",
      gridPosition: "md:col-start-4 md:row-start-1", // Position 4,1
      imageURL: "/servicios/card-4-16.svg",
    },
    {
      title: "3D",
      description: "Visualizaciones médicas",
      icon: "🔬",
      gridPosition: "md:col-start-1 md:row-start-2", // Position 1,2
      imageURL: "/servicios/card-5-16.svg",
    },
    {
      title: "ANIMACIÓN",
      description: "Contenido audiovisual",
      icon: "🎬",
      gridPosition: "md:col-start-4 md:row-start-2", // Position 4,2
      imageURL: "/servicios/card-8-16.svg",
    },
    {
      title: "ILUSTRACIÓN",
      description: "Arte médico especializado",
      icon: "✏️",
      gridPosition: "md:col-start-2 md:row-start-3", // Position 2,3
      imageURL: "/servicios/card-10-16.svg",
    },
    {
      title: "PACKAGING",
      description: "Diseño de empaques",
      icon: "📦",
      gridPosition: "md:col-start-3 md:row-start-3", // Position 3,3
      imageURL: "/servicios/card-11-16.svg",
    },
    {
      title: "FOTOGRAFÍA",
      description: "Fotografía médica profesional",
      icon: "📸",
      gridPosition: "md:col-start-1 md:row-start-4", // Position 1,4
      imageURL: "/servicios/card-13-16.svg",
    },
    {
      title: "CONSULTORÍA",
      description: "Asesoría especializada",
      icon: "💡",
      gridPosition: "md:col-start-2 md:row-start-4", // Position 2,4
      imageURL: "/servicios/card-14-16.svg",
    },
    {
      title: "EDITORIAL",
      description: "Publicaciones médicas",
      icon: "📚",
      gridPosition: "md:col-start-4 md:row-start-4", // Position 4,4
      imageURL: "/servicios/card-16-16.svg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-nevelaski-white">
      <div className="container-nevelaski">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-inter font-extrabold mb-4">
              NUESTROS
              <br />
              <span className="text-nevelaski-red">SERVICIOS</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-gray-600 mb-4">
              Te ayudamos las mejores
              <br />
              soluciones en cada proyecto
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-4 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className={`group ${service.gridPosition}`}>
              <div className=" bg-nevelaski-red p-3 md:p-4 rounded-lg text-white transition-colors h-full">
                <img src={service.imageURL} alt={service.title} width="100%" height="100%" className="rounded-lg"/>
                <p className="text-xs md:text-base flex justify-between mt-2">
                  <span>{service.title}</span> 
                  <span>{service.tool}</span>
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
