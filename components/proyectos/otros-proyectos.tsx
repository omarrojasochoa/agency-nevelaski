import Link from "next/link"

export function OtrosProyectos() {
  const proyectos = [
    {
      id: 1,
      title: "LOREM IPSUM",
      category: "DOLOR SIT AMET",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "LOREM IPSUM",
      category: "DOLOR SIT AMET",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-nevelaski">
        <h2 className="text-4xl font-display font-bold mb-12">OTROS PROYECTOS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map((proyecto) => (
            <Link key={proyecto.id} href={`/proyectos/${proyecto.id}`} className="group block">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={proyecto.image || "/placeholder.svg"}
                  alt={proyecto.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium group-hover:text-nevelaski-red transition-colors">{proyecto.title}</h3>
                <p className="text-sm text-nevelaski-gray">{proyecto.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
