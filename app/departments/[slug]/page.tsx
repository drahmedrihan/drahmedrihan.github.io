import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const departments = {
  "pediatric-neurology": {
    title: "Pediatric Neurology",
    description:
      "Our Pediatric Neurology department specializes in the diagnosis and management of neurological disorders in children, from infancy through adolescence.",
    content: `
      <p>Pediatric neurology focuses on disorders of the nervous system that affect children. These can include epilepsy, headaches, developmental delays, neuromuscular disorders, and more.</p>
      
      <h3>Our Services</h3>
      <ul>
        <li>Diagnosis and treatment of epilepsy and seizure disorders</li>
        <li>Management of headaches and migraines</li>
        <li>Evaluation of developmental delays and disorders</li>
        <li>Assessment and treatment of neuromuscular disorders</li>
        <li>Management of movement disorders</li>
        <li>Neurogenetic consultations</li>
      </ul>
      
      <h3>Our Approach</h3>
      <p>We take a comprehensive approach to each child's care, considering not just the neurological symptoms but the whole child. Our team works closely with other specialists to ensure coordinated care.</p>
      
      <h3>When to Consult a Pediatric Neurologist</h3>
      <p>You might consider consulting a pediatric neurologist if your child experiences:</p>
      <ul>
        <li>Seizures or unusual spells</li>
        <li>Persistent or severe headaches</li>
        <li>Developmental delays</li>
        <li>Weakness or coordination problems</li>
        <li>Behavioral changes that might indicate a neurological issue</li>
      </ul>
    `,
    image: "/placeholder.svg?height=400&width=600",
  },
  newborn: {
    title: "Newborn Care",
    description:
      "Our Newborn Care department provides comprehensive care for newborns, ensuring they get the best start in life.",
    content: `
      <p>The first few weeks and months of a baby's life are crucial for their development. Our Newborn Care department focuses on providing comprehensive care during this important period.</p>
      
      <h3>Our Services</h3>
      <ul>
        <li>Newborn health assessments</li>
        <li>Growth and development monitoring</li>
        <li>Nutritional guidance, including breastfeeding support</li>
        <li>Immunizations</li>
        <li>Screening for common newborn conditions</li>
        <li>Parent education and support</li>
      </ul>
      
      <h3>Our Approach</h3>
      <p>We believe in family-centered care, recognizing that parents are the most important caregivers for their newborns. Our team works closely with families to provide education, support, and guidance.</p>
      
      <h3>When to Consult for Newborn Care</h3>
      <p>Regular check-ups are essential for newborns, typically at:</p>
      <ul>
        <li>3-5 days after birth</li>
        <li>2 weeks</li>
        <li>1 month</li>
        <li>2 months</li>
        <li>And continuing regularly throughout infancy</li>
      </ul>
      <p>Additionally, you should consult immediately if you notice any concerning symptoms in your newborn.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
  },
  "child-development": {
    title: "Child Development",
    description:
      "Our Child Development department focuses on monitoring and supporting the physical, cognitive, and social development of children.",
    content: `
      <p>Child development encompasses the physical, cognitive, emotional, and social growth that occurs from birth through adolescence. Our department specializes in monitoring and supporting this development.</p>
      
      <h3>Our Services</h3>
      <ul>
        <li>Developmental assessments</li>
        <li>Screening for developmental delays</li>
        <li>Early intervention programs</li>
        <li>Behavioral assessments and support</li>
        <li>Parent education on developmental milestones</li>
        <li>Coordination with educational services</li>
      </ul>
      
      <h3>Our Approach</h3>
      <p>We take a holistic approach to child development, considering all aspects of a child's life and environment. We work collaboratively with families, educators, and other healthcare providers to support optimal development.</p>
      
      <h3>When to Consult for Child Development</h3>
      <p>Consider consulting our Child Development department if:</p>
      <ul>
        <li>You have concerns about your child's development</li>
        <li>Your child is not meeting expected developmental milestones</li>
        <li>Your child has behavioral challenges that affect daily functioning</li>
        <li>Your child has been diagnosed with a condition that may affect development</li>
        <li>You want guidance on supporting your child's development</li>
      </ul>
    `,
    image: "/placeholder.svg?height=400&width=600",
  },
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = departments[params.slug as keyof typeof departments]

  if (!department) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{department.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{department.description}</p>

        <div className="mb-8">
          <Image
            src={department.image || "/placeholder.svg"}
            alt={department.title}
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-cover mb-6"
          />
        </div>

        <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: department.content }}></div>

        <div className="flex gap-4">
          <Link href="/contact">
            <Button className="bg-red-500 hover:bg-red-600">Book an Appointment</Button>
          </Link>
          <Link href="/departments">
            <Button variant="outline">View All Departments</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
