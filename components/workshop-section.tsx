import Image from "next/image"

interface WorkshopSectionProps {
  id: string
  number: string
  title: string
  description: string
  image: string
  color: string
  imagePosition: "left" | "right"
  nextColor?: string
}

export function WorkshopSection({
  id,
  number,
  title,
  description,
  image,
  color,
  imagePosition,
  nextColor,
}: WorkshopSectionProps) {
  const colorMap: Record<string, string> = {
    purple: "bg-purple-100/70",
    teal: "bg-teal-100/70",
    amber: "bg-amber-100/70",
    rose: "bg-rose-100/70",
    indigo: "bg-indigo-100/70",
    cyan: "bg-cyan-100/70",
    fuchsia: "bg-fuchsia-100/70",
  }

  const nextColorMap: Record<string, string> = {
    purple: "from-purple-100/70",
    teal: "from-teal-100/70",
    amber: "from-amber-100/70",
    rose: "from-rose-100/70",
    indigo: "from-indigo-100/70",
    cyan: "from-cyan-100/70",
    fuchsia: "from-fuchsia-100/70",
  }

  const toColorMap: Record<string, string> = {
    purple: "to-purple-100/70",
    teal: "to-teal-100/70",
    amber: "to-amber-100/70",
    rose: "to-rose-100/70",
    indigo: "to-indigo-100/70",
    cyan: "to-cyan-100/70",
    fuchsia: "to-fuchsia-100/70",
  }

  const bgColor = colorMap[color] || "bg-purple-100/70"
  const textColor = `text-${color}-800`

  // For the bottom gradient that transitions to the next section
  const fromColor = nextColorMap[color] || "from-purple-100/70"
  const toColor = nextColor ? toColorMap[nextColor] : "to-white/0"

  return (
    <section id={id} className={`py-20 ${bgColor} scroll-mt-16 relative`}>
      {/* No top gradient - the previous section's bottom gradient will handle this */}

      {/* Bottom gradient that transitions to the next section's color */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b ${fromColor} ${toColor} backdrop-blur-sm`}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
        >
          <div className="w-full lg:w-1/2">
            <div className="mb-6 flex items-center">
              <div
                className={`bg-${color}-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4`}
              >
                {number}
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{description}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative w-full h-auto" style={{ paddingBottom: "75%" }}>
                <Image
                  src={image || "/placeholder.svg?height=400&width=600"}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

