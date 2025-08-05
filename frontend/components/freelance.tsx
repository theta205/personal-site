import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface FreelanceProject {
  id: string
  title: string
  client: string
  description: string
  image: string
  skills: string[]
  link?: string
}

export default function Freelance() {
  const freelanceProjects: FreelanceProject[] = [
    {
      id: "local-cafe-website",
      title: "Local Café Website",
      client: "Morning Brew Café",
      description:
        "Designed and developed a responsive website for a local café, featuring online ordering, menu display, and event calendar.",
      image: "/placeholder.svg?height=400&width=600",
      skills: ["Web Design", "Next.js", "Stripe Integration", "SEO"],
      link: "https://morningbrewcafe.com",
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      client: "Personal Trainer Jane Smith",
      description:
        "Built a custom fitness tracking application for a personal trainer to manage client workouts, progress, and nutrition plans.",
      image: "/placeholder.svg?height=400&width=600",
      skills: ["React Native", "Firebase", "UX Design", "Health API Integration"],
    },
    {
      id: "e-commerce-store",
      title: "E-commerce Store",
      client: "Handmade Crafts Shop",
      description:
        "Developed a full-featured e-commerce platform for a handmade crafts business, including inventory management and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      skills: ["Shopify", "Custom Theme Development", "Payment Gateway Integration", "Product Photography"],
      link: "https://craftshop-example.com",
    },
  ]

  return (
    <section id="freelance" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Freelance Work</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Client projects I've completed as a freelance developer.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {freelanceProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Client: {project.client}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/freelance/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Site
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/freelance"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            View All Freelance Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
