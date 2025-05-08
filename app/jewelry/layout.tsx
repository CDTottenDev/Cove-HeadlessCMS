import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import { SubHeader } from "./components/sub-header"
import Header from "../../components/header"
import { ClerkProvider } from "@clerk/nextjs"

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
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          <Header />
          <SubHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
