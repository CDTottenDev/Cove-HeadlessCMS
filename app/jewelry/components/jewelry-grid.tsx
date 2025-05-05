"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag } from "lucide-react"

// Sample jewelry data
const jewelryItems = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    category: "rings",
    price: 1299,
    image: "/placeholder.svg?key=iwz75",
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    category: "earrings",
    price: 499,
    image: "/placeholder.svg?key=o7p26",
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    category: "necklaces",
    price: 899,
    image: "/placeholder.svg?key=eqj97",
  },
  {
    id: 4,
    name: "Sapphire Tennis Bracelet",
    category: "bracelets",
    price: 1599,
    image: "/placeholder.svg?key=w5bth",
  },
  {
    id: 5,
    name: "Rose Gold Hoop Earrings",
    category: "earrings",
    price: 349,
    image: "/placeholder.svg?height=500&width=500&query=rose gold hoop earrings on white background",
  },
  {
    id: 6,
    name: "Emerald Pendant",
    category: "necklaces",
    price: 1199,
    image: "/placeholder.svg?height=500&width=500&query=emerald pendant necklace on white background",
  },
  {
    id: 7,
    name: "Vintage Diamond Ring",
    category: "rings",
    price: 2499,
    image: "/placeholder.svg?height=500&width=500&query=vintage diamond ring on white background",
  },
  {
    id: 8,
    name: "Silver Charm Bracelet",
    category: "bracelets",
    price: 299,
    image: "/placeholder.svg?height=500&width=500&query=silver charm bracelet on white background",
  },
]

export function JewelryGrid() {
  const [category, setCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("featured")

  // Filter items by category
  const filteredItems = category === "all" ? jewelryItems : jewelryItems.filter((item) => item.category === category)

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0 // Default: featured
  })

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant={category === "all" ? "default" : "outline"}
            onClick={() => setCategory("all")}
            className="whitespace-nowrap"
          >
            All Jewelry
          </Button>
          <Button
            variant={category === "rings" ? "default" : "outline"}
            onClick={() => setCategory("rings")}
            className="whitespace-nowrap"
          >
            Rings
          </Button>
          <Button
            variant={category === "necklaces" ? "default" : "outline"}
            onClick={() => setCategory("necklaces")}
            className="whitespace-nowrap"
          >
            Necklaces
          </Button>
          <Button
            variant={category === "earrings" ? "default" : "outline"}
            onClick={() => setCategory("earrings")}
            className="whitespace-nowrap"
          >
            Earrings
          </Button>
          <Button
            variant={category === "bracelets" ? "default" : "outline"}
            onClick={() => setCategory("bracelets")}
            className="whitespace-nowrap"
          >
            Bracelets
          </Button>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedItems.map((item) => (
          <div key={item.id} className="group relative flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
            </div>
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500 capitalize mb-2">{item.category}</p>
            <div className="mt-auto flex items-center justify-between">
              <p className="font-semibold">${item.price}</p>
              <Button size="sm" className="rounded-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
