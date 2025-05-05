"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setSubmitted(true)
  }

  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Subscribe to receive updates on new collections, exclusive offers, and jewelry care tips.
        </p>

        {submitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-md">
            Thank you for subscribing! We'll keep you updated on our latest collections and offers.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  )
}
