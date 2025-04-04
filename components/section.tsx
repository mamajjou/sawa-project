import type React from "react"
import Image from "next/image"

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  image: string
  alt: string
  imagePosition: "left" | "right"
}

export function Section({ id, title, children, image, alt, imagePosition }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
        >
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{title}</h2>
            <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

