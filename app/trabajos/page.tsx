import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TrabajosHeader } from "@/components/trabajos/trabajos-header"
import { TrabajosGrid } from "@/components/trabajos/trabajos-grid"

export default function TrabajosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-nevelaski-white">
        <TrabajosHeader />
        <TrabajosGrid />
      </main>
      <Footer />
    </div>
  )
}
