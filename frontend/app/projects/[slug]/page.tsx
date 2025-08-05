import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  features: string[]
  challenges: string
  learnings: string
  images: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projects: Record<string, Project> = {
    "budget-tracker": {
      id: "budget-tracker",
      title: "Personal Budget Tracker",
      description:
        "A web application that helps users track their expenses and income, with data visualization and budget planning features.",
      longDescription:
        "The Personal Budget Tracker is a comprehensive financial management tool designed to help users gain control over their finances. It provides intuitive interfaces for recording transactions, categorizing expenses, and visualizing spending patterns. Users can set budget goals, receive notifications when approaching limits, and generate detailed reports to analyze their financial habits over time.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "JWT Authentication"],
      features: [
        "Transaction recording with category and tag support",
        "Monthly, weekly, and yearly budget planning",
        "Interactive charts and graphs for expense analysis",
        "Recurring transaction automation",
        "Financial goal setting and tracking",
        "CSV/PDF export for financial reports",
        "Multi-currency support",
      ],
      challenges:
        "One of the main challenges was designing a database schema that could efficiently handle various types of financial data while maintaining relationships between transactions, categories, and user accounts. Additionally, implementing real-time data visualization that could handle large datasets without performance issues required careful optimization.",
      learnings:
        "This project deepened my understanding of state management in complex applications and taught me valuable lessons about data modeling for financial applications. I also gained experience with implementing secure authentication flows and handling sensitive user data responsibly.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "https://github.com/alexchen/budget-tracker",
      liveUrl: "https://budget-tracker-demo.vercel.app",
    },
    "study-group-finder": {
      id: "study-group-finder",
      title: "Study Group Finder",
      description:
        "Platform for university students to find and create study groups for their courses, featuring real-time chat and resource sharing.",
      longDescription:
        "Study Group Finder is a platform designed to connect university students who want to study together. The application allows students to create or join study groups based on courses, topics, or specific study goals. It features real-time messaging, file sharing, and collaborative note-taking to enhance the group study experience. Students can schedule study sessions, set agendas, and track their progress together.",
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Firestore", "Firebase Authentication"],
      features: [
        "Course-based study group creation and discovery",
        "Real-time group chat and direct messaging",
        "File and resource sharing",
        "Study session scheduling with calendar integration",
        "Collaborative note-taking",
        "University email verification",
        "Group progress tracking",
      ],
      challenges:
        "The biggest challenge was implementing a real-time messaging system that could handle multiple concurrent users while maintaining performance. Another challenge was designing an intuitive user interface that would make it easy for students to find relevant study groups without overwhelming them with options.",
      learnings:
        "This project taught me a lot about real-time database design and the importance of optimizing queries for frequently accessed data. I also gained valuable experience with TypeScript for building type-safe applications and learned how to implement complex authentication flows with role-based permissions.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "https://github.com/alexchen/study-group-finder",
      liveUrl: "",
    },
    "algorithm-visualizer": {
      id: "algorithm-visualizer",
      title: "Algorithm Visualizer",
      description:
        "Interactive tool that visualizes various sorting and pathfinding algorithms, helping students understand how they work step by step.",
      longDescription:
        "Algorithm Visualizer is an educational tool designed to help computer science students understand complex algorithms through interactive visualizations. The application provides step-by-step animations of various sorting algorithms (like bubble sort, merge sort, quick sort) and pathfinding algorithms (like Dijkstra's, A*, BFS, DFS). Users can adjust the speed of animations, input custom data sets, and compare the performance of different algorithms in real-time.",
      techStack: ["JavaScript", "HTML Canvas", "CSS", "Web Animations API", "Webpack"],
      features: [
        "Interactive visualizations of sorting algorithms",
        "Pathfinding algorithm demonstrations on customizable grids",
        "Step-by-step execution with explanations",
        "Algorithm comparison tool",
        "Custom input data support",
        "Adjustable animation speed",
        "Performance metrics (time complexity, space complexity)",
      ],
      challenges:
        "The main challenge was creating smooth animations that accurately represented each step of the algorithms while maintaining educational value. Balancing visual appeal with technical accuracy required careful planning of the animation sequences and state management.",
      learnings:
        "This project significantly improved my understanding of algorithm implementation and the HTML Canvas API. I learned techniques for optimizing animations and managing complex state transitions in a visual application. It also reinforced my knowledge of various algorithms and their performance characteristics.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "https://github.com/alexchen/algorithm-visualizer",
      liveUrl: "https://algorithm-viz-demo.vercel.app",
    },
    "weather-dashboard": {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current conditions and forecasts based on user location or search queries.",
      longDescription:
        "Weather Dashboard is a comprehensive weather application that provides users with current weather conditions and forecasts for any location worldwide. The app features a clean, intuitive interface that displays temperature, humidity, wind speed, UV index, and precipitation probability. Users can save favorite locations, view hourly and 7-day forecasts, and receive weather alerts for severe conditions.",
      techStack: ["React", "OpenWeather API", "Styled Components", "Axios", "Geolocation API", "Progressive Web App"],
      features: [
        "Current weather conditions display",
        "Hourly and 7-day forecasts",
        "Location search with autocomplete",
        "Geolocation for automatic local weather",
        "Saved favorite locations",
        "Weather maps for precipitation, temperature, and wind",
        "Severe weather alerts",
        "Offline functionality with PWA capabilities",
      ],
      challenges:
        "One of the main challenges was optimizing API calls to minimize usage while still providing up-to-date information. Another challenge was implementing accurate geolocation with appropriate fallbacks for users who deny location permissions.",
      learnings:
        "This project taught me how to effectively work with third-party APIs and handle various response formats. I also gained experience with geolocation services and implementing progressive web app features for offline functionality. The project improved my skills in creating responsive designs that work well across all device sizes.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "https://github.com/alexchen/weather-dashboard",
      liveUrl: "https://weather-dash-demo.vercel.app",
    },
  }

  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          <div className="flex items-center gap-4 mb-12">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">{project.longDescription}</p>

              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Challenges</h2>
              <p className="text-gray-600 mb-6">{project.challenges}</p>

              <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
              <p className="text-gray-600">{project.learnings}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg border shadow">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
