import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const departments = [
  {
    id: "pediatric-neurology",
    title: "Pediatric Neurology",
    description:
      "Diagnosis and treatment of neurological disorders in children, including epilepsy, headaches, developmental delays, and more.",
    icon: "🧠",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "newborn",
    title: "Newborn Care",
    description:
      "Comprehensive care for newborns, including health assessments, growth monitoring, and parent education.",
    icon: "👶",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "child-development",
    title: "Child Development",
    description:
      "Monitoring and supporting the physical, cognitive, and social development of children from infancy through adolescence.",
    icon: "🧩",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Medical Departments</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Specialized care for children of all ages</p>

        <div className="space-y-12">
          {departments.map((dept) => (
            <div key={dept.id} className="flex flex-col md:flex-row gap-8 border-b pb-12">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={dept.image || "/placeholder.svg"}
                    alt={dept.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{dept.icon}</span>
                  <h2 className="text-2xl font-bold">{dept.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{dept.description}</p>
                <Link href={`/departments/${dept.id}`}>
                  <Button className="bg-red-500 hover:bg-red-600">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
