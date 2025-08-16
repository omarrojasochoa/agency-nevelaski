"use client"

export function BrandSlider() {
  const brands = [
    "/clinicas/Dra-Claudia-Mercedes.svg",
    "/clinicas/DRA-KATERYN-PEREZ.svg",
    "/clinicas/Dra-Patricia-eltran.svg",
    "/clinicas/Dr-Clinica-Guilarte.svg",
    "/clinicas/Dr-juan-ignacio-schiro.svg",
    "/clinicas/Dr-Marco-Romeo.svg",
    "/clinicas/dr-pablo-rosel.svg",
    "/clinicas/Dr-SALVATORE-TAGLIALATELA.svg",
    "/clinicas/RINOFACIAL.svg",
    "/clinicas/RINOMAGIA.svg",
    "/clinicas/dermosalud-logo-2.svg",  
    "/clinicas/Dr-Cristian-Cordero.svg",
    "/clinicas/Dr-Deniss-Calderon A.svg",
    "/clinicas/Dr-Gabriel-Paez.svg",
    "/clinicas/Dr-Jaime-Cedeno.svg",
    "/clinicas/Dr-Jenny-Armijos.svg",
    "/clinicas/Dr-Jose-Boso.svg",
    "/clinicas/Dr-Marco-Galati.svg",
    "/clinicas/Dr-Noe-Herrera-Dominguez.svg",
    "/clinicas/Dr-Tony.svg",
  ]

  return (
    <section className="py-12 bg-white overflow-hidden relative brandslider-container">
      {/* Fondo izquierdo */}
      {/* <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white via-white/90 to-transparent">
        <img 
          src="../bg-left.svg" 
          alt="" 
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div> */}

      {/* Fondo derecho */}
      {/* <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white via-white/90 to-transparent">
        <img 
          src="../bg-right.svg" 
          alt="" 
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
 */}
      <div className="space-y-8 relative">
        {/* First Row - Moving Right */}
        <div className="flex animate-scroll-right">
          {[...brands, ...brands].map((imgSrc, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img 
                src={imgSrc} 
                alt={`Cliente ${index % brands.length + 1}`}
                className="h-12 object-contain"
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left */}
        <div className="flex animate-scroll-left">
          {[...brands, ...brands].map((imgSrc, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img 
                src={imgSrc} 
                alt={`Cliente ${index % brands.length + 1}`}
                className="h-12 object-contain"
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}