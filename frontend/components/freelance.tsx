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
  date: string
}

export default function Freelance() {
  const freelanceProjects: FreelanceProject[] = [
    {
      id: "freelance1",
      title: "Automated Sales Order ERP Integration",
      client: "Rohrer Seeds",
      description:
        "Automates sales order processing using Azure AI Document Intelligence to extract data from physical orders, route them for client approval, and seamlessly upload validated orders into the ERP system.",
      image: "/placeholder.svg?height=400&width=600",
      skills: ["Azure AI Document Intelligence", "Nesuite REST API", "Next.js", "AWS(Lambda, S3, Dynamo)", "OAuth2.0"],
      link: "https://morningbrewcafe.com",
      date: "June 2025 - August 2025",
    }
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
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.date}</p>
                  </div>

                </div>
                <p className="mt-2 text-gray-600 mb-4">{project.description}</p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
