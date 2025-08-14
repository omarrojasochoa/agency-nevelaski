export function ProyectoGallery() {
  return (
    <section className="py-12">
      <div className="container-nevelaski">
        {/* Main Hero Image */}
        <div className="mb-16">
          <div className="aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Imagen principal del proyecto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Two Column Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Detalle del proyecto 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Detalle del proyecto 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Full Width Image */}
        <div className="mb-16">
          <div className="aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=1200"
              alt="Imagen panorámica del proyecto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed mb-6">
            "Es una obra excepcional donde cada detalle ha sido cuidadosamente diseñado para transmitir la esencia del
            proyecto. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim
            id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium."
          </p>
          <div className="text-sm text-nevelaski-gray">
            <span className="font-medium">— Nombre y Apellido</span>
          </div>
        </div>

        {/* Bottom Images Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Proceso del proyecto 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Proceso del proyecto 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
