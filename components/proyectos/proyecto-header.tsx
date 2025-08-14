export function ProyectoHeader() {
  return (
    <section className="py-20">
      <div className="container-nevelaski">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">NOMBRE DEL PROYECTO</h1>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Cliente:</span>
                <span>Nombre del Cliente</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Año:</span>
                <span>2024</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Categoría:</span>
                <span>Ilustración 3D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
