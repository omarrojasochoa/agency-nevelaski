export function StaffGrid() {
  const staffMembers = [
    {
      name: "Splinter",
      role: "Maestro/CEO",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Nelson Velásquez",
      role: "Artista 3D",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Michael Quiroga",
      role: "Algo",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Álvaro Porras",
      role: "Algo",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Omar Rojas",
      role: "Desarrollador",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Marco Cabrera",
      role: "Desarrollador",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-nevelaski">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 mx-auto rounded-full"
                />
              </div>
              <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
              <p className="text-xs text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
