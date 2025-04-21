"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Brain, Baby, Activity, Stethoscope, HeartPulse, BookOpen } from "lucide-react"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Brain className="h-8 w-8 text-sky-500" />,
      title: "Pediatric Neurology",
      description:
        "Specialized care for neurological disorders in children, including epilepsy, headaches, and developmental delays.",
      link: "/departments/pediatric-neurology",
    },
    {
      icon: <Baby className="h-8 w-8 text-sky-500" />,
      title: "Newborn Care",
      description:
        "Comprehensive care for newborns, including health assessments, growth monitoring, and parent education.",
      link: "/departments/newborn",
    },
    {
      icon: <Activity className="h-8 w-8 text-sky-500" />,
      title: "Child Development",
      description:
        "Monitoring and supporting the physical, cognitive, and social development of children from infancy through adolescence.",
      link: "/departments/child-development",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-sky-500" />,
      title: "General Pediatrics",
      description: "Routine check-ups, vaccinations, and treatment for common childhood illnesses and conditions.",
      link: "/departments",
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-sky-500" />,
      title: "Specialized Consultations",
      description: "Expert consultations for complex pediatric cases requiring specialized knowledge and experience.",
      link: "/contact",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      title: "Parent Education",
      description:
        "Resources and guidance for parents on child health, development, and managing pediatric conditions.",
      link: "/faq",
    },
  ]

  return (
    <section className="py-20 bg-gradient-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-medium text-sky-600 mb-2">EXPERTISE</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Dr. Ahmed Rihan provides comprehensive pediatric care with a focus on neurological disorders and child
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all card-hover"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.link}>
                <Button variant="outline" className="text-sky-500 border-sky-200 hover:bg-sky-50 rounded-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
