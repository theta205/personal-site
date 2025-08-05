import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Freelance from "@/components/freelance"
import Hobbies from "@/components/hobbies"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> {/* center better */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Freelance />
        <Hobbies />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
