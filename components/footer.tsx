import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-nevelaski-black text-white">
      {/* WhatsApp Section */}
      <div className="bg-nevelaski-red py-8">
        <div className="container-nevelaski">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">📱 WHATSAPP</div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">El primer paso para elevar tu presencia online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reunion Section */}
      <div className="py-12">
        <div className="container-nevelaski">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-display font-bold">REUNIÓN</h2>
            <p className="text-gray-400">Reunión de 15 minutos gratuita para resolver dudas</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-800 py-12">
        <div className="container-nevelaski">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center mb-8">
                <div className="w-8 h-8 bg-nevelaski-red flex items-center justify-center">
                  <div className="w-4 h-4 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-400">NAVEGACIÓN</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-sm hover:text-nevelaski-red transition-colors">
                  Inicio
                </Link>
                <Link href="/trabajos" className="block text-sm hover:text-nevelaski-red transition-colors">
                  Trabajos
                </Link>
                <Link href="/nosotros" className="block text-sm hover:text-nevelaski-red transition-colors">
                  Nosotros
                </Link>
                <Link href="/contacto" className="block text-sm hover:text-nevelaski-red transition-colors">
                  Contacto
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-400">REDES</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:text-nevelaski-red transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-sm hover:text-nevelaski-red transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-xs text-gray-500">Copyright © 2025 Nevelaski. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="py-8">
        <div className="container-nevelaski">
          <h1 className="text-6xl md:text-8xl font-display font-black text-white/10">NEVELASKI</h1>
        </div>
      </div>
    </footer>
  )
}
