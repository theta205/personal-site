import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "budget-tracker",
      title: "Personal Budget Tracker",
      description:
        "A web application that helps users track their expenses and income, with data visualization and budget planning features.",
      techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/alexchen/budget-tracker",
      liveUrl: "https://budget-tracker-demo.vercel.app",
    },
    {
      id: "study-group-finder",
      title: "Study Group Finder",
      description:
        "Platform for university students to find and create study groups for their courses, featuring real-time chat and resource sharing.",
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/alexchen/study-group-finder",
    },
    {
      id: "algorithm-visualizer",
      title: "Algorithm Visualizer",
      description:
        "Interactive tool that visualizes various sorting and pathfinding algorithms, helping students understand how they work step by step.",
      techStack: ["JavaScript", "HTML Canvas", "CSS", "Web Animations API"],
      githubUrl: "https://github.com/alexchen/algorithm-visualizer",
      liveUrl: "https://algorithm-viz-demo.vercel.app",
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current conditions and forecasts based on user location or search queries.",
      techStack: ["React", "OpenWeather API", "Styled Components", "Axios"],
      githubUrl: "https://github.com/alexchen/weather-dashboard",
      liveUrl: "https://weather-dash-demo.vercel.app",
    },
    {
      id: "task-manager",
      title: "Task Manager",
      description:
        "A productivity application for managing tasks, with features like due dates, priority levels, and categorization.",
      techStack: ["Vue.js", "Vuex", "Firebase", "Sass"],
      githubUrl: "https://github.com/alexchen/task-manager",
    },
    {
      id: "recipe-finder",
      title: "Recipe Finder",
      description:
        "An application that allows users to search for recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
      techStack: ["React", "Redux", "Spoonacular API", "Material UI"],
      githubUrl: "https://github.com/alexchen/recipe-finder",
      liveUrl: "https://recipe-finder-demo.vercel.app",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive collection of my personal and academic projects.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                  >
                    View Details
                    <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
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
      </main>
      <Footer />
    </div>
  )
}
