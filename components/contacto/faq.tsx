"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "¿Con cuánto tiempo debo hacer una solicitud?",
    answer:
      "Si está en busca de una ilustración o video para una conferencia, publicación o algo similar, recomendamos se comunique con nosotros con un plazo de 3 semanas de anticipación para una ilustración y 2 meses para una animación. Esto le dará tiempo suficiente a nuestro equipo para entregar un producto final de la mejor calidad.",
  },
  {
    question: "¿Cuánto tiempo demora crear una ilustración?",
    answer:
      "El tiempo de creación de una ilustración varía según la complejidad del proyecto. Generalmente, una ilustración simple puede tomar entre 3-5 días hábiles, mientras que proyectos más complejos pueden requerir hasta 2 semanas.",
  },
  {
    question: "¿Cuánto tiempo demora crear una animación?",
    answer:
      "Las animaciones requieren más tiempo debido a su complejidad. Una animación básica puede tomar entre 2-4 semanas, mientras que proyectos más elaborados pueden necesitar hasta 2 meses de desarrollo.",
  },
  {
    question: "¿Qué debo tener para comunicarme con ustedes?",
    answer:
      "Para iniciar un proyecto, necesitamos que nos proporcione una descripción detallada de lo que necesita, referencias visuales si las tiene, fechas límite, y cualquier especificación técnica relevante para su proyecto.",
  },
  {
    question: "¿Cuáles son sus precios?",
    answer:
      "Nuestros precios varían según el tipo de proyecto, complejidad y tiempo de entrega. Ofrecemos cotizaciones personalizadas para cada cliente. Contáctenos para recibir una propuesta detallada sin compromiso.",
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-nevelaski-white">
      <div className="container-nevelaski">
        <h2 className="text-4xl font-display font-bold mb-12">FAQ</h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-black pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-black transition-transform flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="pb-6 pr-10">
                  <p className="text-nevelaski-gray leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
