export function TrabajosGrid() {
  const workItems = [
    {
      id: 1,
      title: "LOREM IPSUM",
      subtitle: "DOLOR SIT AMET",
      category: "",
      size: "large",
    },
    {
      id: 2,
      title: "LOREM IPSUM",
      subtitle: "DOLOR SIT AMET",
      category: "",
      size: "medium",
    },
    {
      id: 3,
      title: "LOREM IPSUM",
      subtitle: "DOLOR SIT AMET",
      category: "",
      size: "medium",
    },
    {
      id: 4,
      title: "ANIMACIÓN",
      subtitle: "3D",
      category: "animation",
      size: "large",
    },
    {
      id: 5,
      title: "LOREM IPSUM",
      subtitle: "DOLOR SIT AMET",
      category: "",
      size: "medium",
    },
    {
      id: 6,
      title: "LOREM IPSUM",
      subtitle: "DOLOR SIT AMET",
      category: "",
      size: "large",
    },
    {
      id: 7,
      title: "LOREM IPSUM",
      subtitle: "DOLOR SIT AMET",
      category: "",
      size: "medium",
    },
  ]

  return (
    <section className="pb-20">
      <div className="container-nevelaski">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-black rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                item.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
              } ${item.id === 1 ? "lg:row-span-2" : ""}`}
            >
              <div className="aspect-square relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                    {item.category && (
                      <span className="inline-block mt-2 px-3 py-1 bg-nevelaski-red text-white text-xs rounded-full">
                        {item.category.toUpperCase()}
                      </span>
                    )}
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
