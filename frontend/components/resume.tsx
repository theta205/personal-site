import { FileDown } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Download my resume to learn more about my education, skills, and experience.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-500">University of Technology</p>
                <p className="text-gray-500">Expected Graduation: December 2026</p>
                <p className="text-gray-500">GPA: 3.8/4.0</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Programming Languages</h4>
                <ul className="list-disc list-inside text-gray-500 space-y-1">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <ul className="list-disc list-inside text-gray-500 space-y-1">
                  <li>React/Next.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
