import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Medical Team</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Meet our experienced healthcare professional dedicated to providing the best care for your children
        </p>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HH3cbtRKTVwLTazFomkq9NdBZPg9sA.png"
                alt="Dr. Ahmed Rihan"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <h2 className="text-xl font-bold mb-2">Dr. Ahmed Rihan</h2>
              <p className="text-red-500 font-medium mb-4">Consultant of Pediatrics and Pediatric Neurology</p>
              <p className="text-gray-700 mb-6">
                Director of Pediatric Neurology Unit at Ain Shams University with extensive experience in pediatric
                neurology. Dr. Rihan provides comprehensive care for children with neurological disorders and
                developmental concerns. With his expertise in both pediatrics and neurology, he offers specialized
                treatment for a wide range of conditions affecting children from infancy through adolescence.
              </p>
              <Link href="/about">
                <Button className="bg-red-500 hover:bg-red-600 text-white">View Full Profile</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Approach to Care</h2>
          <p className="text-gray-700 mb-6">
            Dr. Ahmed Rihan and his supporting staff are committed to providing compassionate, evidence-based care for
            children with neurological and developmental concerns. We believe in a patient-centered approach that
            considers each child's unique needs and circumstances.
          </p>
          <Link href="/book-appointment">
            <Button className="bg-red-500 hover:bg-red-600 text-white">Book an Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
