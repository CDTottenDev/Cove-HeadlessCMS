"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/bookingbutton"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="block rounded p-2 text-slate-600 hover:bg-teal-50 md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-white py-4 shadow-md md:hidden">
          <div className="container mx-auto flex max-w-5xl flex-row justify-center items-center space-x-6 px-4">
            <Link href="/" className="text-lg text-slate-600 hover:text-teal-700 text-center" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/#about" className="text-lg text-slate-600 hover:text-teal-700 text-center" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-lg text-slate-600 hover:text-teal-700 text-center" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            {/* <Link href="#" className="text-lg text-slate-600 hover:text-teal-700 text-center" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link> */}
            <Link href="/#contact" className="text-lg text-slate-600 hover:text-teal-700 text-center" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
