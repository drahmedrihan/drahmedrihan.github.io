import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Dr. Ahmed Rihan</h1>

        <div className="mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HH3cbtRKTVwLTazFomkq9NdBZPg9sA.png"
            alt="Dr. Ahmed Rihan"
            width={800}
            height={500}
            className="rounded-lg w-full h-auto mb-6"
          />

          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          <p className="text-gray-700 mb-6">
            Dr. Ahmed Abdelhameed Rihan is a Consultant of Pediatrics and New Born (Child) and a Consultant and teacher
            of pediatric neurology at Ain Shams University. With years of experience in the field, Dr. Rihan has
            established himself as a leading expert in pediatric neurology in Egypt.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Current Positions</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Director of Pediatric Neurology Unit - Faculty of Medicine – Ain Shams University (2024 - Present)</li>
            <li>
              Consultant of Pediatrics and Pediatric Neurology - As-Salam International Hospital – New Cairo (2024 -
              Present)
            </li>
            <li>
              Lecturer of Pediatrics and Medical Sciences – Pediatric Nursing Department - Faculty of Nursing – Ain
              Shams University (2024 - Present)
            </li>
            <li>
              Lecturer of Pediatrics and Pediatric Neurology - Faculty of Medicine – Ain Shams University (2022 -
              Present)
            </li>
            <li>Consultant of Pediatrics and Pediatric Neurology - Ain Shams University hospitals (2022 - Present)</li>
            <li>Consultant of Pediatrics and Pediatric Neurology - Queens Royal Hospital (2022 - Present)</li>
            <li>Consultant of Pediatrics and Neonatology - Nassaem Hospital – 5th District (2020 - Present)</li>
            <li>Consultant of Pediatrics and Pediatric Neurology - Shifa Hospital – 5th District (2022 - Present)</li>
            <li>Consultant of Pediatrics and Pediatric Neurology - Katameya Clinic Hospital (2022 - Present)</li>
            <li>
              Member of Quality Assurance Committee - Department of Pediatrics - Faculty of Medicine – Ain Shams
              University (2020 - Present)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Publications</h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              Rihan AA, Hassanein SM, Elagouza IA, Sakr HM, Deif-Allah SA, Mohammed MZ. Muscle Ultrasonography in
              Relation to Motor Function in Children with Duchenne Muscular Dystrophy. QJM: An International Journal of
              Medicine. 2024 Jun 1;117(Supplement_1):hcae070-457.
            </li>
            <li>
              Hassanein SM, Elagouza I, Sakr H, Mohammed MZ, Rihan A, Deifalla S. Diaphragmatic and Rectus Femoris
              Muscles Ultrasonography in Relation to Motor and Respiratory Functions in Ambulatory Boys with Duchenne
              Muscular Dystrophy. Journal of Pediatric Neurology. 2023 Jun 12.
            </li>
            <li>
              Beslow, Lauren A., et al. "International prevalence and mechanisms of SARS-CoV-2 in childhood arterial
              ischemic stroke during the COVID-19 pandemic." Stroke 53.8 (2022): 2497-2503.
            </li>
            <li>
              Hossny, Elham Mohammad, Hanan Mohamed Abd El Lateef, and Ahmed Abd El-Hamid Abd El-Hamid Youssef. "Timothy
              grass pollen sensitization in asthmatic egyptian children." The Egyptian Journal of Hospital Medicine 73.2
              (2018): 6103-6108.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Other Publications</h2>
          <p className="text-gray-700 mb-2">Published in "Youm 7" in Arabic:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>25/9/2012 (Dream ..Never miss your dream)</li>
            <li>20/9/2012 (People Dictatorship)</li>
            <li>10/6/2011 (I'm sorry "I")</li>
          </ul>

          <p className="text-gray-700 mb-6">
            Ahmed Abd El-Hamid Rihan blogspot with own writings in Arabic and English:
            <a
              href="http://ahmedabdelhamidrihan.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 ml-1 hover:underline"
            >
              http://ahmedabdelhamidrihan.blogspot.com/
            </a>
          </p>

          <blockquote className="italic border-l-4 border-red-500 pl-4 py-2 text-gray-700 mb-6">
            "My writings are the seeds of my future's tree, they are the mirror of my personality, Both develop
            simultaneously. Just enjoy following them and see how i plant my tree and draw my future."
          </blockquote>

          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            Ahmed Abd El-hamid Rihan
            <br />
            Cairo, Egypt
            <br />
            Mobile: 01228617943
            <br />
            Email:{" "}
            <a href="mailto:Ahmedabdelhamidrihan@gmail.com" className="text-red-500 hover:underline">
              Ahmedabdelhamidrihan@gmail.com
            </a>
            <br />
            <a href="mailto:Ahmedabdelhamidrihan@med.asu.edu.eg" className="text-red-500 hover:underline">
              Ahmedabdelhamidrihan@med.asu.edu.eg
            </a>
          </p>

          <div className="mt-8">
            <Link href="/book-appointment">
              <Button className="bg-red-500 hover:bg-red-600">Book an Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
