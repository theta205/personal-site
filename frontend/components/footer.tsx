import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/alexchen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-900 hover:bg-gray-200"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/alexchen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-900 hover:bg-gray-200"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:alex.chen@example.com"
            className="rounded-full bg-gray-100 p-2 text-gray-900 hover:bg-gray-200"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
