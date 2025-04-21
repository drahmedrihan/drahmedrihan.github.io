"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BooksSection() {
  const books = [
    {
      title: "Understanding Pediatric Neurology",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "A comprehensive guide to neurological disorders in children, written for both medical professionals and parents.",
      year: "2022",
      link: "#",
    },
    {
      title: "Child Development: A Medical Perspective",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "An in-depth look at the physical, cognitive, and social development of children from birth to adolescence.",
      year: "2020",
      link: "#",
    },
    {
      title: "Caring for Your Newborn",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "Essential guidance for new parents on newborn care, health, and development in the first year of life.",
      year: "2019",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-medium text-sky-600 mb-2">PUBLICATIONS</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Dr. Ahmed Rihan has authored several books on pediatric neurology and child development, sharing his
            expertise with both medical professionals and parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sky-500 text-sm font-medium">{book.year}</span>
                <h4 className="text-xl font-semibold mb-3">{book.title}</h4>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <Link href={book.link}>
                  <Button className="bg-sky-500 hover:bg-sky-600 rounded-full">View Book</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
