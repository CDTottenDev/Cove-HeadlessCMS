import type React from "react"
import type { Metadata } from "next"
import "../globals.css";
import Header from "@/components/header"
import { Footer } from "./components/footer"
import { ClerkProvider } from "@clerk/nextjs"
import { SubHeader } from "./components/sub-header"

export const metadata: Metadata = {
  title: "Elegant Jewelry | Timeless Pieces for Every Occasion",
  description:
    "Discover our exquisite collection of handcrafted jewelry, from stunning diamond rings to elegant gold necklaces.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ClerkProvider>
          <Header />
          <SubHeader />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  )
}
