"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact Form Submission")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:Ahmedabdelhamidrihan@gmail.com?subject=${subject}&body=${body}`

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-medium text-sky-600 mb-2">GET IN TOUCH</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Dr. Rihan</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or want to schedule an appointment? Reach out to us using the form below or visit one of our
            clinic locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 reveal delay-100"
          >
            <h4 className="text-2xl font-semibold mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="rounded-xl"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-xl"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 rounded-xl py-6 text-white font-medium"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="reveal delay-200"
          >
            <div className="mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iDQUzee5iaS50FaSB38ppIVNDAXBX3.png"
                alt="Dr. Ahmed Rihan Kids Clinic"
                width={1200}
                height={300}
                className="w-full h-auto rounded-3xl shadow-md"
              />
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h4 className="text-2xl font-semibold mb-6">Clinic Locations</h4>

              <Tabs defaultValue="masr-el-gedida" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 rounded-xl">
                  <TabsTrigger value="masr-el-gedida" className="rounded-xl">
                    Masr El Gedida
                  </TabsTrigger>
                  <TabsTrigger value="fifth-settlement" className="rounded-xl">
                    5th Settlement
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="masr-el-gedida">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-1">Address</h5>
                        <p className="text-gray-600">
                          34 El-Hegaz Street, Borg El-Tegareyeen, near El-Mahkama Square, 4th floor
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-1">Phone</h5>
                        <p className="text-gray-600">01281085195</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-1">Working Hours</h5>
                        <p className="text-gray-600">
                          Monday: 6-9 PM
                          <br />
                          Tuesday: 6-9 PM
                          <br />
                          Wednesday: 6-9 PM
                          <br />
                          Thursday: Closed
                          <br />
                          Friday: Closed
                          <br />
                          Saturday: 6-9 PM
                          <br />
                          Sunday: 6-9 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="fifth-settlement">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-1">Address</h5>
                        <p className="text-gray-600">
                          HCC Building behind Air Force Specialized Hospital, 2nd floor, clinic #213
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-1">Phone</h5>
                        <p className="text-gray-600">01224458092</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <h5 className="font-medium text-lg mb-1">Working Hours</h5>
                        <p className="text-gray-600">
                          Monday: 4-6 PM
                          <br />
                          Tuesday: 4-6 PM
                          <br />
                          Wednesday: Closed
                          <br />
                          Thursday: Closed
                          <br />
                          Friday: Closed
                          <br />
                          Saturday: Closed
                          <br />
                          Sunday: 4-6 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
