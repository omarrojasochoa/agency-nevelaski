"use client"

import Link from "next/link"

export function FeaturedWorks() {
  const works = [
    {
      title: "Nombre",
      category: "BRANDING / ANIMACIÓN 3D",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Nombre",
      category: "WEB / UX / ANIMACIÓN 3D",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Nombre",
      category: "WEB / UX / ANIMACIÓN 3D",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-nevelaski">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              TRABAJOS
              <br />
              DESTACADOS
            </h2>
          </div>
          <div className="text-right">
            <p className="text-gray-600 mb-4">
              Conoce el impacto que logramos
              <br />
              para nuestros clientes
            </p>
            <Link href="/trabajos" className="text-nevelaski-red font-semibold hover:underline">
              VER MÁS TRABAJOS →
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-8 border-b border-gray-200 hover:border-nevelaski-red transition-colors">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{work.title}</h3>
                  <p className="text-sm text-gray-500">{work.category}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
