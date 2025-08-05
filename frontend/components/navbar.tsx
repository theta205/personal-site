"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold dark:text-white">Isaiah Rohrer</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300">
            About
          </Link>
          <Link href="/#projects" className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300">
            Projects
          </Link>
          <Link href="/#freelance" className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300">
            Freelance
          </Link>
          <Link href="/#hobbies" className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300">
            Hobbies
          </Link>
          <Link href="/#resume" className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300">
            Resume
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300">
            Contact
          </Link>
        </nav>
        <button 
          className="block md:hidden text-gray-700 dark:text-gray-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden bg-white dark:bg-gray-900">
          <nav className="flex flex-col space-y-4 p-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#freelance"
              className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Freelance
            </Link>
            <Link
              href="/#hobbies"
              className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Hobbies
            </Link>
            <Link
              href="/#resume"
              className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-gray-900/70 dark:hover:text-gray-100/70 transition-colors dark:text-gray-300"
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
