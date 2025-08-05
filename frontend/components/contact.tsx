"use client"

import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">Get in Touch</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to get in touch? Here's how you can reach me:
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="group flex flex-col items-center text-center p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors mb-4">
                <Mail className="h-7 w-7 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Me</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Get in touch directly via email</p>
              <a 
                href="mailto:isaiah.rohrer@gmail.com" 
                className="inline-flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('isaiah.rohrer@gmail.com');
                  alert('Email copied to clipboard!');
                }}
              >
                isaiah.rohrer@gmail.com
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="group flex flex-col items-center text-center p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors mb-4">
                <Linkedin className="h-7 w-7 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Connect on LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Let's connect professionally</p>
              <a
                href="https://www.linkedin.com/in/isaiah-rohrer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                View Profile
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
