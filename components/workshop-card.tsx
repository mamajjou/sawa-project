import Image from "next/image"

interface WorkshopCardProps {
  number: string
  title: string
  description: string
  image: string
  color: string
}

export function WorkshopCard({ number, title, description, image, color }: WorkshopCardProps) {
  const colorMap: Record<string, string> = {
    purple: "bg-purple-600",
    teal: "bg-teal-600",
    amber: "bg-amber-600",
    rose: "bg-rose-600",
    indigo: "bg-indigo-600",
    cyan: "bg-cyan-600",
    fuchsia: "bg-fuchsia-600",
  }

  const bgColor = colorMap[color] || "bg-purple-600"

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div
          className={`absolute top-4 left-4 ${bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold`}
        >
          {number}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

