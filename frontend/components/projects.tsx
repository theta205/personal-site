import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  date: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "studiz.ai",
      title: "Studiz.ai",
      description:
        "A web platform that enhances learning with AI-generated notes and a RAG-based chatbot for context-aware course assistance",
      techStack: ["JavaScript/TypeScript","Next.js", "RAG (Retrieval Augmented Generation)","AWS(Lambda)", "Clerk", "AWS(S3, DynamoDB)","AWS(API Gateway)"],
      //githubUrl: "",
      liveUrl: "https://studiz.ai",
      date: "May 2025 - Present",
    },
    {
      id: "myride",
      title: "MyRide.show",
      description:
        "A car profile page built in React for car enthusiasts to display their ride and its modifications. Similar to linktree but for cars.",
      techStack: ["React", "Cloudflare KV", "JavaScript", "Clerk", "Cloudflare Workers and Pages", "Cloudinary"],
      githubUrl: "https://github.com/theta205/myride",
      liveUrl: "https://myride.show",
      date: "September 2024 - November 2024",
    },
    {
      id: "lol-metric-elo",
      title: "Aggregate Metric ELO",
      description:
        "Built a custom ELO ranking algorithm for Ranking System for League of Legends Esports that parsed 2TB+ of JSON match data across 600+ teams, improving tournament prediction accuracy by 20%",
      techStack: ["JavaScript", "Python"],
      githubUrl: "https://github.com/theta205/LoL-Metric-Elo-Rankings",
      date: "October 2023",
    },
    {
      id: "storm-mode",
      title: "Storm Mode",
      description:
        "Won 2nd place at the FSU NextEra Hackathon by building a predictive analytics module for Florida Power & Light’s mobile app, providing real-time storm data to customers",
      techStack: [],
      date: "September 2023",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">Projects</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on during my free time.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md transition-all hover:shadow-lg dark:shadow-gray-800/20"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                 {project.githubUrl && <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-white"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    GitHub
                  </Link>}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
