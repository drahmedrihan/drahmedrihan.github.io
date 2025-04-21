"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Dr. Ahmed Rihan provide?",
    answer:
      "Dr. Ahmed Rihan provides comprehensive pediatric neurology services, including diagnosis and treatment of neurological disorders in children, epilepsy management, developmental assessments, headache treatment, and newborn care. He specializes in pediatric neurology with a focus on providing compassionate and evidence-based care.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our office at 01228617943, using our online appointment booking system on this website, or visiting one of our clinic locations during working hours. We recommend booking appointments in advance, especially for new patients.",
  },
  {
    question: "What should I bring to my child's first appointment?",
    answer:
      "For your child's first appointment, please bring your child's medical records, including previous test results, imaging studies, and medication lists. Also bring your child's immunization records, insurance information (if applicable), and a list of questions or concerns you'd like to discuss with Dr. Rihan.",
  },
  {
    question: "What are the clinic locations and working hours?",
    answer:
      "Dr. Rihan practices at two locations: Masr El Gedida Clinic and The 5th Settlement Clinic. The Masr El Gedida Clinic is open Monday, Tuesday, Wednesday, Saturday, and Sunday from 6-9 PM. The 5th Settlement Clinic is open Monday, Tuesday, and Sunday from 4-6 PM. Both clinics are closed on Thursday and Friday.",
  },
  {
    question: "Does Dr. Rihan treat newborns?",
    answer:
      "Yes, Dr. Rihan is a Consultant of Pediatrics and Neonatology. He provides care for newborns, including health assessments, growth monitoring, and treatment of various newborn conditions. He has extensive experience in neonatal care and is qualified to address a wide range of newborn health concerns.",
  },
  {
    question: "What age range of patients does Dr. Rihan see?",
    answer:
      "Dr. Rihan provides care for children of all ages, from newborns to adolescents. His expertise covers the full spectrum of pediatric care with a specialization in pediatric neurology, making him qualified to address health concerns at every stage of childhood development.",
  },
  {
    question: "How should I prepare my child for their appointment?",
    answer:
      "Explain to your child in age-appropriate terms that they will be visiting a doctor who helps children feel better. For younger children, you might bring a favorite toy or book to help them feel comfortable. Make sure your child is well-rested before the appointment, and consider scheduling at a time when they are typically alert and cooperative.",
  },
  {
    question: "What types of neurological conditions does Dr. Rihan treat?",
    answer:
      "Dr. Rihan treats a wide range of pediatric neurological conditions, including epilepsy and seizure disorders, headaches and migraines, developmental delays, autism spectrum disorders, cerebral palsy, neuromuscular disorders, movement disorders, and neurogenetic conditions. He provides comprehensive evaluation, diagnosis, and management for these and other neurological issues affecting children.",
  },
  {
    question: "Is telemedicine available for consultations?",
    answer:
      "Yes, telemedicine consultations are available for certain types of appointments, including follow-up visits and some initial consultations. Please contact our office to determine if your specific situation is appropriate for a telemedicine appointment and to learn how to set up the virtual visit.",
  },
  {
    question: "What insurance plans are accepted?",
    answer:
      "We accept various insurance plans. Please contact our office directly with your specific insurance information to verify coverage before your appointment. Our staff can help you understand your benefits and any potential out-of-pocket costs.",
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8 text-center">
          Find answers to common questions about Dr. Ahmed Rihan's practice and pediatric neurology services
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Accordion type="single" collapsible className="mb-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500">No results found. Please try a different search term.</p>
          )}
        </Accordion>

        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            If you couldn't find the answer to your question, please feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-red-500 hover:bg-red-600 w-full sm:w-auto">Contact Us</Button>
            </Link>
            <Link href="/book-appointment">
              <Button variant="outline" className="w-full sm:w-auto">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
