import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NosotrosHeader } from "@/components/nosotros/nosotros-header"
import { NosotrosImage } from "@/components/nosotros/nosotros-image"
import { StaffGrid } from "@/components/nosotros/staff-grid"
import { FindOurWork } from "@/components/nosotros/find-our-work"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <NosotrosHeader />
        <NosotrosImage />
        <StaffGrid />
        <FindOurWork />
      </main>
      <Footer />
    </div>
  )
}
