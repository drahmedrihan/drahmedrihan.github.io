import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Pediatric Epilepsy: Causes, Symptoms, and Treatment",
      category: "Pediatric Neurology",
      date: "15-04-2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "understanding-pediatric-epilepsy",
    },
    {
      id: 2,
      title: "Developmental Milestones: What Parents Should Know",
      category: "Child Development",
      date: "28-03-2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "developmental-milestones",
    },
    {
      id: 3,
      title: "Advances in Pediatric Neurology: Current Research and Treatments",
      category: "Pediatric Neurology",
      date: "05-03-2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "advances-in-pediatric-neurology",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-sm font-medium text-red-500">LATEST NEWS</h2>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">Blog Posts</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-red-500 text-sm font-medium">{post.category}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
                <Link href={`/blog/${post.slug}`}>
                  <Button className="bg-white text-red-500 border border-red-500 hover:bg-red-50">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
