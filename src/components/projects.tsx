import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const projects = [
  { name: "Project 1", description: "A brief description of Project 1", image: "/placeholder.svg?height=300&width=400" },
  { name: "Project 2", description: "A brief description of Project 2", image: "/placeholder.svg?height=300&width=400" },
  { name: "Project 3", description: "A brief description of Project 3", image: "/placeholder.svg?height=300&width=400" },
]

export function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="outline">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

