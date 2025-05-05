"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from 'react'
import { BookingButton } from './bookingbutton'
import { MobileMenu } from './mobile-menu'
import Link from 'next/link'
function header() {
  const { user } = useUser();

  return (
    <header className="relative top-0 z-50 w-full bg-teal-50/60 px-4 py-4 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-teal-900 hover:opacity-50 cursor-pointer mx-auto sm:mx-0">
          The Cove
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          <a href="/" className="block px-4 py-2 text-sm border-y-2 border-teal-900 text-slate-600 hover:text-teal-700 hover:bg-teal-100 rounded-full">
            Home
          </a>
          <a href="/#about" className="block px-4 py-2 text-sm border-y-2 border-teal-900 text-slate-600 hover:text-teal-700 hover:bg-teal-100 rounded-full">
            About
          </a>
          <a href="/services" className="block px-4 py-2 text-sm border-y-2 border-teal-900 text-slate-600 hover:text-teal-700 hover:bg-teal-100 rounded-full">
            Services
          </a>
          {/* <a href="/testimonials" className="block px-4 py-2 text-sm text-slate-600 hover:text-teal-700 hover:bg-gray-100">
            Testimonials
          </a> */}
          <a href="/#contact" className="block px-4 py-2 text-sm border-y-2 border-teal-900 text-slate-600 hover:text-teal-700 hover:bg-teal-100 rounded-full">
            Contact
          </a>
          <a href="/#jewelry" className="block px-4 py-2 text-sm border-y-2 border-teal-900 text-slate-600 hover:text-teal-700 hover:bg-teal-100 rounded-full">
            Jewelry
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <BookingButton>Book Now</BookingButton>
          </div>
          <MobileMenu />
        </div>
        <ClerkLoaded>
          {user ? (
            <div className="flex itmes-center space-x-2">
              <UserButton />

            <div className="hidden sm:block text-xs">
              <p className="text-gray-400">Welcome Back</p>
              <p className="font-bold">{user.fullName}!</p>
            </div>
          </div>
        ) : (
          <SignInButton mode="modal" />
        )}
        </ClerkLoaded>
      </div>
    </header>
  )
}

export default header