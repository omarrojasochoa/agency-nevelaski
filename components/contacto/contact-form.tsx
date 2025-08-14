"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-nevelaski-red focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-nevelaski-red focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-nevelaski-red focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-nevelaski-red focus:outline-none transition-colors resize-none"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full font-medium transition-colors"
      >
        ENVIAR MENSAJE
      </Button>
    </form>
  )
}
