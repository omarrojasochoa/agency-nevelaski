export function FindOurWork() {
  const publications = [
    {
      title: "ILUSTRACIONES DIGITALES",
      subtitle: "Revista Plastic and Reconstructive Surgery",
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      title: "NOMBRE",
      subtitle: "NOMBRE",
      image: "/placeholder.svg?height=300&width=200",
    },
    {
      title: "NOMBRE",
      subtitle: "NOMBRE",
      image: "/placeholder.svg?height=300&width=200",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-nevelaski">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-nevelaski-red p-8 rounded-lg mb-4 aspect-[3/4] flex items-center justify-center">
                <img
                  src={pub.image || "/placeholder.svg"}
                  alt={pub.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">{pub.title}</p>
                <h3 className="font-semibold text-sm">{pub.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
