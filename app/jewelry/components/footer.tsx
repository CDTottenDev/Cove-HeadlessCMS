import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Elegant</h3>
            <p className="text-sm mb-4">
              Crafting timeless jewelry pieces since 1995. Each piece tells a unique story.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium text-white mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-medium text-white mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Elegant Jewelry. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
