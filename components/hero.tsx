"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ paddingBottom: "62.5%" }}>
            <Image
              src="/images/sawa-hero.png"
              alt="SAWA Projekt - Zwei Männer präsentieren eine Tafel mit SAWA und Werten wie Zufriedenheit, Inspiration, Hoffnung, Gemeinsam, Neugierde und Vielfalt"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="mt-8 text-center">
            <h1 className="sr-only">SAWA: Gemeinsam gegen Diskriminierung</h1>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="#wer-wir-sind"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-md hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#wer-wir-sind")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Mehr erfahren
              </a>
              <a
                href="#kontakt"
                className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#kontakt")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient transition to the first section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-white/0 to-purple-100/70 backdrop-blur-sm"></div>
    </section>
  )
}

