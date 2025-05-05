import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Loyal Customer",
    quote:
      "The craftsmanship of their jewelry is exceptional. I've been a customer for years and have never been disappointed.",
    avatar: "/placeholder.svg?height=100&width=100&query=professional woman portrait",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Buyer",
    quote:
      "I purchased an engagement ring and the attention to detail was remarkable. The customer service was equally impressive.",
    avatar: "/placeholder.svg?height=100&width=100&query=professional man portrait",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Collector",
    quote:
      "As someone who collects fine jewelry, I can attest to the quality and uniqueness of their designs. Truly one-of-a-kind pieces.",
    avatar: "/placeholder.svg?height=100&width=100&query=elegant woman portrait",
  },
]

export function Testimonials() {
  return (
    <section className="w-full max-w-7xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}
