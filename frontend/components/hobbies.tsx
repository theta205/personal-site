import Image from "next/image"

interface Hobby {
  title: string
  description: string
  icon: string
}

export default function Hobbies() {
  const hobbies: Hobby[] = [
    {
      title: "Photography",
      description:
        "I enjoy landscape and street photography. On weekends, you'll often find me exploring new locations with my camera.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Rock Climbing",
      description:
        "I started bouldering two years ago and have been hooked ever since. I try to visit the climbing gym at least twice a week.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Reading",
      description:
        "I'm an avid reader of science fiction and non-fiction books about technology, psychology, and personal development.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Cooking",
      description:
        "I love experimenting with recipes from different cuisines. My specialties are Italian pasta dishes and Thai curries.",
      icon: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="hobbies" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hobbies & Interests</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding, here's what you might find me doing.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-20 w-20 mb-4">
                <Image src={hobby.icon || "/placeholder.svg"} alt={hobby.title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
