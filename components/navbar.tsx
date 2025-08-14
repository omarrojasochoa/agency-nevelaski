"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const getNavbarBackground = () => {
    if (isHomePage) {
      return isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" : "bg-transparent"
    }
    return "bg-white/95 backdrop-blur-sm border-b border-gray-100"
  }

  const getNavbarPosition = () => {
    return isHomePage ? "absolute" : "fixed"
  }

  return (
    <>
      <nav
        className={`${getNavbarPosition()} top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBackground()}`}
      >
        <div className="container-nevelaski">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-nevelaski-red flex items-center justify-center">
                <div className="w-4 h-4 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button className="bg-nevelaski-black text-white hover:bg-nevelaski-black/90 rounded-full px-6" asChild>
                <Link href="/contacto">CONVERSEMOS</Link>
              </Button>

              <button
                onClick={toggleMenu}
                className="w-10 h-10 bg-nevelaski-black hover:bg-nevelaski-black/90 transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-4 h-4 bg-white"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-nevelaski-red">
          <div className="flex flex-col h-full container-nevelaski">
            {/* Header */}
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center" onClick={toggleMenu}>
                <div className="w-8 h-8 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 bg-nevelaski-red" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
                </div>
              </Link>
              <button onClick={toggleMenu} className="p-2 text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center ">
              <div className="space-y-8">
                <Link
                  href="/"
                  className="text-white text-4xl font-display font-bold hover:opacity-80 transition-opacity block"
                  onClick={toggleMenu}
                >
                  HOME
                </Link>
                <Link
                  href="/trabajos"
                  className="text-white text-4xl font-display font-bold hover:opacity-80 transition-opacity block"
                  onClick={toggleMenu}
                >
                  TRABAJOS
                </Link>
                <Link
                  href="/proyectos"
                  className="text-white text-4xl font-display font-bold hover:opacity-80 transition-opacity block"
                  onClick={toggleMenu}
                >
                  PROYECTOS
                </Link>
                <Link
                  href="/nosotros"
                  className="text-white text-4xl font-display font-bold hover:opacity-80 transition-opacity block"
                  onClick={toggleMenu}
                >
                  NOSOTROS
                </Link>
                <Link
                  href="/contacto"
                  className="text-white text-4xl font-display font-bold hover:opacity-80 transition-opacity block"
                  onClick={toggleMenu}
                >
                  CONTACTO
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
