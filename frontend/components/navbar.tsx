"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Isaiah Rohrer</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-sm font-medium hover:text-gray-900/70 transition-colors">
            About
          </Link>
          <Link href="/#projects" className="text-sm font-medium hover:text-gray-900/70 transition-colors">
            Projects
          </Link>
          <Link href="/#freelance" className="text-sm font-medium hover:text-gray-900/70 transition-colors">
            Freelance
          </Link>
          <Link href="/#hobbies" className="text-sm font-medium hover:text-gray-900/70 transition-colors">
            Hobbies
          </Link>
          <Link href="/#resume" className="text-sm font-medium hover:text-gray-900/70 transition-colors">
            Resume
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-gray-900/70 transition-colors">
            Contact
          </Link>
        </nav>
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 p-4 border-t">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-gray-900/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-gray-900/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#freelance"
              className="text-sm font-medium hover:text-gray-900/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Freelance
            </Link>
            <Link
              href="/#hobbies"
              className="text-sm font-medium hover:text-gray-900/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hobbies
            </Link>
            <Link
              href="/#resume"
              className="text-sm font-medium hover:text-gray-900/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-gray-900/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
