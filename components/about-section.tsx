"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-sm font-medium text-sky-500 mb-2">{t("about")}</h2>
          <h3 className="text-3xl font-bold text-gray-900">Dr. Ahmed Rihan</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 reveal delay-100">
            <p className="text-gray-700 mb-6">
              Dr. Ahmed Abdelhameed Rihan is a distinguished figure in the field of pediatric neurology in Egypt. With a
              profound commitment to advancing healthcare, his journey in the medical field has been marked by
              dedication and expertise.
            </p>

            <p className="text-gray-700 mb-6">
              Currently serving as the Director of Pediatric Neurology Unit at the Faculty of Medicine, Ain Shams
              University, Dr. Rihan is also a Consultant of Pediatrics and Pediatric Neurology at several prestigious
              hospitals including As-Salam International Hospital, Ain Shams University hospitals, Queens Royal
              Hospital, and more.
            </p>

            <p className="text-gray-700 mb-6">
              Dr. Rihan is actively involved in academic pursuits as a Lecturer of Pediatrics and Medical Sciences at
              the Pediatric Nursing Department, Faculty of Nursing, Ain Shams University, sharing his extensive
              knowledge with the next generation of medical professionals.
            </p>

            <p className="text-gray-700">
              His contributions to the field include several publications in respected medical journals, focusing on
              pediatric neurology and muscular disorders. Dr. Rihan's commitment to quality healthcare is further
              demonstrated by his membership in the Quality Assurance Committee at the Department of Pediatrics, Faculty
              of Medicine, Ain Shams University.
            </p>
          </div>

          <div className="md:w-1/2 reveal delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HH3cbtRKTVwLTazFomkq9NdBZPg9sA.png"
                  alt="Dr. Ahmed Rihan speaking at a conference"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gotQFmTm6WSUuInWaDpEr2QyDVHVsO.png"
                  alt="Dr. Ahmed Rihan at a medical presentation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md mt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iDQUzee5iaS50FaSB38ppIVNDAXBX3.png"
                  alt="Dr. Ahmed Rihan Kids Clinic"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-sky-50 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm"
              >
                <span className="text-2xl font-bold text-sky-500">10+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-sky-50 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm"
              >
                <span className="text-2xl font-bold text-sky-500">1000+</span>
                <span className="text-sm text-gray-600">Patients</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-sky-50 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm"
              >
                <span className="text-2xl font-bold text-sky-500">20+</span>
                <span className="text-sm text-gray-600">Publications</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-sky-50 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm"
              >
                <span className="text-2xl font-bold text-sky-500">5+</span>
                <span className="text-sm text-gray-600">Awards</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
