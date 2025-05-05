import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedCollection() {
  return (
    <section className="w-full max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">Featured Collection</h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        Discover our most sought-after pieces, meticulously crafted with the finest materials
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
          <Image
            src="/placeholder.svg?height=800&width=600&query=elegant diamond necklace on model"
            alt="Diamond Necklace Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-serif font-bold mb-2">Diamond Brilliance</h3>
            <p className="mb-4">Our signature diamond collection</p>
            <Link href="#collection">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
          <Image
            src="/placeholder.svg?height=800&width=600&query=gold jewelry collection on display"
            alt="Gold Jewelry Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-serif font-bold mb-2">Golden Radiance</h3>
            <p className="mb-4">Timeless gold pieces for every occasion</p>
            <Link href="#collection">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
