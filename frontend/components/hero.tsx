import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-white">
                Hi, I&apos;m Isaiah Rohrer
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Junior Computer Science student at Florida State University, graduating in December 2026. Passionate
                about building intuitive web applications and solving complex problems.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/#projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 dark:bg-gray-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 dark:bg-gray-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/headshot.jpg"
                alt="Isaiah Rohrer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
