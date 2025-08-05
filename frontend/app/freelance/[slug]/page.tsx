import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface FreelanceProject {
  id: string
  title: string
  client: string
  description: string
  longDescription: string
  challenge: string
  solution: string
  results: string
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  skills: string[]
  services: string[]
  images: string[]
  link?: string
}

export default function FreelanceProjectPage({ params }: { params: { slug: string } }) {
  const freelanceProjects: Record<string, FreelanceProject> = {
    "local-cafe-website": {
      id: "local-cafe-website",
      title: "Local Café Website",
      client: "Morning Brew Café",
      description:
        "Designed and developed a responsive website for a local café, featuring online ordering, menu display, and event calendar.",
      longDescription:
        "Morning Brew Café needed a modern, responsive website to showcase their menu, allow customers to place online orders, and promote their events. The café wanted to increase their online presence and provide a seamless digital experience for their customers. The website needed to reflect the warm, inviting atmosphere of the physical location while providing practical functionality for both customers and staff.",
      challenge:
        "The café had an outdated website that wasn't mobile-friendly and lacked online ordering capabilities. They were losing potential customers who preferred to order online, and their event promotions weren't reaching their target audience effectively. The staff also spent significant time taking phone orders, which could be streamlined through an online system.",
      solution:
        "I designed and developed a modern, responsive website using Next.js and integrated Stripe for secure payment processing. The site features an intuitive menu display with filtering options for dietary preferences, an online ordering system with customization options, and an event calendar that automatically promotes upcoming events on the homepage. The admin panel allows staff to easily update menu items, manage orders, and add new events without technical knowledge.",
      results:
        "Within three months of launching the new website, the café saw a 45% increase in online orders and a 30% increase in event attendance. Customer feedback has been overwhelmingly positive, particularly regarding the ease of ordering and finding information. The staff reports saving approximately 15 hours per week that was previously spent taking phone orders.",
      testimonial: {
        quote:
          "Alex transformed our online presence completely. The website is beautiful, easy to use, and has significantly increased our online orders. Our customers love being able to order ahead, and we love how easy it is to update our menu and events. It's been a game-changer for our business.",
        author: "Sarah Johnson",
        position: "Owner, Morning Brew Café",
      },
      skills: ["Web Design", "Next.js", "Stripe Integration", "SEO", "UI/UX Design", "Responsive Development"],
      services: [
        "Website Design",
        "Frontend Development",
        "Backend Development",
        "Payment Integration",
        "Content Management System",
        "SEO Optimization",
        "Training & Support",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "https://morningbrewcafe.com",
    },
    "fitness-app": {
      id: "fitness-app",
      title: "Fitness Tracking App",
      client: "Personal Trainer Jane Smith",
      description:
        "Built a custom fitness tracking application for a personal trainer to manage client workouts, progress, and nutrition plans.",
      longDescription:
        "Jane Smith, a certified personal trainer with a growing client base, needed a custom application to streamline client management, workout planning, and progress tracking. The app needed to allow her to create personalized workout and nutrition plans, track client progress, and provide a platform for clients to log their activities and communicate with her between sessions.",
      challenge:
        "Jane was using a combination of spreadsheets, text messages, and paper forms to manage her clients, which was becoming increasingly time-consuming and disorganized as her business grew. She needed a centralized system that would allow her to efficiently manage client information, create customized plans, and track progress over time. Additionally, clients needed an easy way to access their plans and log their activities.",
      solution:
        "I developed a cross-platform mobile application using React Native and Firebase that serves both the trainer and clients. The app features separate interfaces for the trainer and clients with appropriate permissions. For Jane, the app provides client management tools, workout and nutrition plan builders with a library of exercises and meal options, progress tracking with visual charts, and communication tools. For clients, the app offers access to their personalized plans, workout logging with video demonstrations, nutrition tracking, progress visualization, and direct messaging with Jane.",
      results:
        "The app has allowed Jane to take on 40% more clients without increasing her administrative workload. Client retention has improved by 25% due to better engagement and accountability through the app. Clients report higher satisfaction with their training experience, particularly appreciating the easy access to their plans and the ability to track their progress visually.",
      testimonial: {
        quote:
          "This app has completely transformed how I run my business. I can create plans in a fraction of the time it used to take, and my clients love having everything they need right on their phones. The progress tracking features have been especially motivating for clients, and the communication tools help me provide better support between sessions. It's been worth every penny.",
        author: "Jane Smith",
        position: "Certified Personal Trainer",
      },
      skills: [
        "React Native",
        "Firebase",
        "UX Design",
        "Health API Integration",
        "Mobile Development",
        "Real-time Database",
      ],
      services: [
        "Mobile App Design",
        "Cross-platform Development",
        "Database Architecture",
        "User Authentication",
        "Cloud Functions",
        "Real-time Messaging",
        "Ongoing Support & Updates",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "",
    },
    "e-commerce-store": {
      id: "e-commerce-store",
      title: "E-commerce Store",
      client: "Handmade Crafts Shop",
      description:
        "Developed a full-featured e-commerce platform for a handmade crafts business, including inventory management and payment processing.",
      longDescription:
        "Handmade Crafts Shop is a small business specializing in artisanal home decor and gifts. The owner wanted to expand beyond local craft fairs and establish an online presence to reach a wider audience. They needed a comprehensive e-commerce solution that would showcase their unique products, handle inventory management, and process payments securely while maintaining the personal, handcrafted feel of their brand.",
      challenge:
        "The business owner had limited technical knowledge and a modest budget but needed a professional online store that could compete with larger retailers. They required a solution that would be easy to maintain, allow for high-quality product photography, manage varying inventory levels for one-of-a-kind items, and handle shipping calculations for items of different sizes and weights. Additionally, they wanted to maintain the personal connection with customers that had been key to their success at craft fairs.",
      solution:
        "I developed a custom Shopify theme that perfectly captured the brand's artisanal aesthetic while providing all the functionality of a modern e-commerce store. The solution included custom product templates to highlight the unique features of handmade items, an inventory management system with low-stock alerts, integrated shipping calculations based on product dimensions and weight, and secure payment processing with multiple options. I also implemented features to maintain the personal touch, such as product story sections, artist bio pages, and a custom order request system for personalized items.",
      results:
        "Within the first year of launching the online store, the business saw a 200% increase in overall sales, with 70% coming from regions they couldn't previously reach through craft fairs. The average order value increased by 35% compared to in-person sales due to effective cross-selling features. The owner now spends 60% less time on administrative tasks thanks to the automated inventory and order management systems, allowing more time for crafting new products.",
      testimonial: {
        quote:
          "Alex didn't just build me a website; he built me a whole new business channel that has completely transformed my small craft business. The online store perfectly captures the essence of my brand while giving me all the tools I need to manage orders, inventory, and customer relationships efficiently. I've been able to reach customers across the country and even internationally, something I never thought possible for my small handmade business.",
        author: "Emily Parker",
        position: "Owner, Handmade Crafts Shop",
      },
      skills: [
        "Shopify",
        "Custom Theme Development",
        "Payment Gateway Integration",
        "Product Photography",
        "E-commerce Strategy",
        "Liquid Templates",
      ],
      services: [
        "E-commerce Platform Development",
        "Custom Theme Design",
        "Product Catalog Setup",
        "Payment & Shipping Integration",
        "Inventory Management System",
        "Product Photography Consultation",
        "SEO & Marketing Setup",
        "Owner Training",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "https://craftshop-example.com",
    },
  }

  const project = freelanceProjects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link
            href="/freelance"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Freelance Work
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">{project.title}</h1>
          <p className="text-xl text-gray-500 mb-6">Client: {project.client}</p>

          <div className="relative h-[400px] w-full overflow-hidden rounded-lg mb-12">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid gap-12 md:grid-cols-3 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-8">{project.longDescription}</p>

              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600 mb-8">{project.challenge}</p>

              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-600 mb-8">{project.solution}</p>

              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-600 mb-8">{project.results}</p>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Services Provided</h3>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="mr-2 text-gray-900">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Visit Website</h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </Link>
                </div>
              )}
            </div>
          </div>

          {project.testimonial && (
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <blockquote className="text-xl italic text-gray-600 mb-4">"{project.testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">{project.testimonial.author}</p>
                  <p className="text-gray-500">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.images.slice(1).map((image, index) => (
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
