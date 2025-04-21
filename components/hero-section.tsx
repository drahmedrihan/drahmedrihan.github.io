"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-soft py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-sky-600 mb-4"
            >
              {t("pediatric_neurology")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Dr. Ahmed Abdelhameed Rihan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Consultant of Pediatrics and New Born (Child)
              <br />
              Consultant and teacher of pediatric neurology, Ain Shams University
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/about">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  {t("read_more")}
                </Button>
              </Link>
              <Link href="/book-appointment">
                <Button
                  variant="outline"
                  className="border-sky-500 text-sky-500 hover:bg-sky-50 px-8 py-3 rounded-full"
                >
                  {t("book_appointment")}
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden bg-white p-3 shadow-xl"
            >
              <div className="blob-shape overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HH3cbtRKTVwLTazFomkq9NdBZPg9sA.png"
                  alt="Dr. Ahmed Rihan"
                  width={500}
                  height={600}
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/4 -left-10 w-20 h-20 rounded-full bg-sky-100 animate-float"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-1/4 right-0 w-16 h-16 rounded-full bg-yellow-100 animate-float"
              style={{ animationDelay: "1s" }}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-10 right-10 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                  fill="#E1F5FE"
                />
                <path
                  d="M35 20C35 22.7614 32.7614 25 30 25C27.2386 25 25 22.7614 25 20C25 17.2386 27.2386 15 30 15C32.7614 15 35 17.2386 35 20Z"
                  fill="#29B6F6"
                />
                <path
                  d="M20 35C20 32.2386 22.2386 30 25 30H35C37.7614 30 40 32.2386 40 35V40C40 42.7614 37.7614 45 35 45H25C22.2386 45 20 42.7614 20 40V35Z"
                  fill="#29B6F6"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
