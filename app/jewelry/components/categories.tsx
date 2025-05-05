import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Rings",
    image: "/placeholder.svg?height=400&width=400&query=diamond ring collection",
    link: "#collection",
  },
  {
    name: "Necklaces",
    image: "/placeholder.svg?height=400&width=400&query=elegant necklace collection",
    link: "#collection",
  },
  {
    name: "Earrings",
    image: "/placeholder.svg?height=400&width=400&query=luxury earrings collection",
    link: "#collection",
  },
  {
    name: "Bracelets",
    image: "/placeholder.svg?height=400&width=400&query=gold bracelet collection",
    link: "#collection",
  },
]

export function Categories() {
  return (
    <section className="w-full max-w-7xl px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.link}
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
