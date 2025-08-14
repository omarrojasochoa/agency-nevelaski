"use client"

export function BrandSlider() {
  const brands = [
    "CLIENTE 1",
    "CLIENTE 2",
    "CLIENTE 3",
    "CLIENTE 4",
    "CLIENTE 5",
    "CLIENTE 6",
    "CLIENTE 7",
    "CLIENTE 8",
    "CLIENTE 9",
    "CLIENTE 10",
  ]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="space-y-8">
        {/* First Row - Moving Right */}
        <div className="flex animate-scroll-right">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <span className="text-2xl font-display font-bold text-gray-300 whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left */}
        <div className="flex animate-scroll-left">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <span className="text-2xl font-display font-bold text-gray-300 whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
