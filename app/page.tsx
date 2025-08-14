import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomeHeader } from "@/components/home/home-header"
import { BrandSlider } from "@/components/home/brand-slider"
import { OnlinePresence } from "@/components/home/online-presence"
import { FeaturedWorks } from "@/components/home/featured-works"
import { Services } from "@/components/home/services"
import { Recommendations } from "@/components/home/recommendations"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeHeader />
        <BrandSlider />
        <OnlinePresence />
        <FeaturedWorks />
        <Services />
        <Recommendations />
      </main>
      <Footer />
    </div>
  )
}
