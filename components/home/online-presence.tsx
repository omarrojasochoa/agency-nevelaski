"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OnlinePresence() {
  return (
    <section className="py-20 bg-white">
      <div className="container-nevelaski">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-black rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Retrato médico futurista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              TU PRESENCIA ONLINE
              <br />
              <span className="text-nevelaski-red">ORIENTADA A RESULTADOS</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Representamos técnicas de venta con creatividad y profesionalismo en cada diseño.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-nevelaski-black text-nevelaski-black hover:bg-nevelaski-black hover:text-white rounded-full px-8 bg-transparent"
              asChild
            >
              <Link href="/trabajos">Ver trabajos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
