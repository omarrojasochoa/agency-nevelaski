"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomeHeader() {
  return (
    <section className="pt-24 pb-16 bg-nevelaski-white">
      <div className="container-nevelaski">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6">
              <span className="text-nevelaski-red">NEVEL</span>
              <span className="text-nevelaski-black">ASKI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Estudio creativo multidisciplinario especializado en soluciones visuales para el sector médico. Fusionamos
              arte, ciencia y tecnología para comunicar la medicina de forma clara, precisa y visual.
            </p>
            <Button
              size="lg"
              className="bg-nevelaski-red hover:bg-nevelaski-red-dark text-white rounded-full px-8"
              asChild
            >
              <Link href="/contacto">Comenzar proyecto</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Visualización médica abstracta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
