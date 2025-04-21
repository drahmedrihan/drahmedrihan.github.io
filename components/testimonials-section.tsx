"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Parent",
      quote:
        "Dr. Rihan is an exceptional pediatric neurologist. His expertise and compassionate approach made all the difference for our child. He took the time to explain everything clearly and made us feel supported throughout the entire process.",
      rating: 5,
    },
    {
      name: "Mohamed Karim",
      role: "Parent",
      quote:
        "We are incredibly grateful to Dr. Rihan for his excellent care. He diagnosed our son's condition when other doctors couldn't, and his treatment plan has been life-changing. His knowledge and dedication are truly remarkable.",
      rating: 5,
    },
    {
      name: "Laila Ibrahim",
      role: "Parent",
      quote:
        "Dr. Ahmed Rihan is not only highly skilled but also incredibly kind and patient. He has a special way with children that puts them at ease. Our daughter actually looks forward to her appointments with him!",
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-medium text-sky-600 mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">What Parents Say</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from parents about their experiences with Dr. Ahmed Rihan and the care their children received.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center"
            >
              <div className="mb-6 flex justify-center">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-8 italic">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="text-lg font-semibold text-gray-900">{testimonials[current].name}</p>
                <p className="text-sky-500">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white rounded-full p-3 shadow-md hover:bg-sky-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-sky-500" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white rounded-full p-3 shadow-md hover:bg-sky-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-sky-500" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${current === index ? "bg-sky-500" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
