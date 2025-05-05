import Image from "next/image"
import Link from "next/link"
import { JewelryGrid } from "./components/jewelry-grid"
import { FeaturedCollection } from "./components/featured-collection"
import { Categories } from "./components/categories"
import { Newsletter } from "./components/newsletter"
import { Testimonials } from "./components/testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?key=kz9y7"
          alt="Elegant jewelry collection"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Timeless Elegance</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-md">
            Discover our exquisite collection of handcrafted jewelry
          </p>
          <Link
            href="#collection"
            className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Categories */}
      <Categories />

      {/* Product Grid */}
      <section id="collection" className="w-full max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Collection</h2>
        <JewelryGrid />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </main>
  )
}
