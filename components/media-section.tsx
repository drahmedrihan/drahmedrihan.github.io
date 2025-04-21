"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tv, Radio, Newspaper, Award } from "lucide-react"

export default function MediaSection() {
  const appearances = [
    {
      type: "TV",
      icon: <Tv className="h-6 w-6 text-sky-500" />,
      title: "Health & Wellness Show",
      channel: "Cairo TV",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      type: "Radio",
      icon: <Radio className="h-6 w-6 text-sky-500" />,
      title: "Parenting Today",
      channel: "Egypt FM",
      date: "February 2, 2024",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      type: "Article",
      icon: <Newspaper className="h-6 w-6 text-sky-500" />,
      title: "Advances in Pediatric Neurology",
      channel: "Medical Journal of Egypt",
      date: "January 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      type: "Conference",
      icon: <Award className="h-6 w-6 text-sky-500" />,
      title: "International Pediatric Conference",
      channel: "Cairo International Convention Center",
      date: "December 5, 2023",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-medium text-sky-600 mb-2">IN THE MEDIA</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Media Appearances</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Dr. Ahmed Rihan is a respected voice in pediatric healthcare, frequently appearing in media to share his
            expertise and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appearances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden card-hover"
            >
              <div className="relative h-40">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                  {item.icon}
                  {item.type}
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{item.channel}</p>
                <p className="text-sky-500 text-xs mb-3">{item.date}</p>
                <Link href={item.link}>
                  <Button
                    variant="outline"
                    className="text-sky-500 border-sky-200 hover:bg-sky-50 rounded-full text-sm w-full"
                  >
                    Watch/Read
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
