import Image from "next/image"

interface Hobby {
  title: string
  description: string
  icon: string
}

export default function Hobbies() {
  const hobbies: Hobby[] = [
    {
      title: "Riding Motorcycles",
      description:
        "I've ridden my motorcycle from Florida to Pennsylvania and back. My favorite roads I've been on are the Tail of the Dragon, Blue Ridge Parkway, and North Carolina Highway 28.",
      icon: "/moto.png",
    },
    {
      title: "Traveling",
      description:
        "I love to travel, hike, and experience things I haven't done before. I've been to 20 states, but only one other country outside the US. In the next 5 years I want to visit over 10 countries.",
      icon: "/travel.jpg",
    },
    {
      title: "Sports",
      description:
        "I'm an avid sports fan. I enjoy watching college basketball and football as well as the NFL, NBA and MLB. I also enjoy playing pickup basketball.",
      icon: "/fsu.webp",
    }
  ]

  return (
    <section id="hobbies" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">Hobbies & Interests</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I&apos;m not coding, here&apos;s what you might find me doing.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:shadow-gray-800/20 transition-shadow"
            >
              <div className="relative w-full h-48 mb-4">
                <Image 
                  src={hobby.icon || "/placeholder.svg"} 
                  alt={hobby.title}
                  fill 
                  className="object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{hobby.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
