import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProyectoHeader } from "@/components/proyectos/proyecto-header"
import { ProyectoGallery } from "@/components/proyectos/proyecto-gallery"
import { OtrosProyectos } from "@/components/proyectos/otros-proyectos"

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <ProyectoHeader />
        <ProyectoGallery />
        <OtrosProyectos />
      </main>
      <Footer />
    </div>
  )
}
