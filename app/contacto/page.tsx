import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contacto/contact-form"
import { FAQ } from "@/components/contacto/faq"
import { WhatsAppSection } from "@/components/contacto/whatsapp-section"
import { MeetingSection } from "@/components/contacto/meeting-section"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-nevelaski-white">
      <Navbar />
      <main>
        <div className="container-nevelaski py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">CONVERSEMOS</h1>
              <p className="text-nevelaski-gray mb-8">Te ayudaremos a mejorar tu presentación como profesional</p>
              <ContactForm />
            </div>
            <div className="bg-nevelaski-light-gray p-8 rounded-lg">
              <p className="text-center text-nevelaski-gray">Imagen de soporte</p>
            </div>
          </div>
        </div>
        <FAQ />
        <WhatsAppSection />
        <MeetingSection />
      </main>
      <Footer />
    </div>
  )
}
