"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function ContactPage() {
  const { t } = useLanguage()
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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t("contact")}</h1>

        <div className="mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iDQUzee5iaS50FaSB38ppIVNDAXBX3.png"
            alt="Dr. Ahmed Rihan Kids Clinic"
            width={1200}
            height={300}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t("get_in_touch")}</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{t("clinic_location")}</h3>
                  <Tabs defaultValue="masr-el-gedida" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="masr-el-gedida">Masr El Gedida</TabsTrigger>
                      <TabsTrigger value="fifth-settlement">5th Settlement</TabsTrigger>
                    </TabsList>
                    <TabsContent value="masr-el-gedida" className="mt-2">
                      <p className="text-gray-600">
                        <a
                          href="https://maps.app.goo.gl/jXscwJnZk2Hg7g1S9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500"
                        >
                          34 El-Hegaz Street, Borg El-Tegareyeen, near El-Mahkama Square, 4th floor
                        </a>
                      </p>
                      <p className="text-gray-600 mt-2">For appointments: 01281085195</p>
                    </TabsContent>
                    <TabsContent value="fifth-settlement" className="mt-2">
                      <p className="text-gray-600">
                        <a
                          href="https://maps.app.goo.gl/jnrYV1E6KAfEXTfj9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500"
                        >
                          HCC Building behind Air Force Specialized Hospital, 2nd floor, clinic #213
                        </a>
                      </p>
                      <p className="text-gray-600 mt-2">For appointments: 01224458092</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{t("phone_number")}</h3>
                  <p className="text-gray-600">01228617943</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{t("email_address")}</h3>
                  <p className="text-gray-600">
                    <a href="mailto:Ahmedabdelhamidrihan@gmail.com" className="hover:text-red-500">
                      Ahmedabdelhamidrihan@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:Ahmedabdelhamidrihan@med.asu.edu.eg" className="hover:text-red-500">
                      Ahmedabdelhamidrihan@med.asu.edu.eg
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{t("working_hours")}</h3>
                  <Tabs defaultValue="masr-el-gedida" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="masr-el-gedida">Masr El Gedida</TabsTrigger>
                      <TabsTrigger value="fifth-settlement">5th Settlement</TabsTrigger>
                    </TabsList>
                    <TabsContent value="masr-el-gedida" className="mt-2">
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
                    </TabsContent>
                    <TabsContent value="fifth-settlement" className="mt-2">
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
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4">{t("follow_us")}</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/p/Dr-Ahmed-Rihan-Kids-Clinic-100089216708627/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-100"
                >
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-abd-el-hamid-rihan-48385b57/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-100"
                >
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">{t("send_message")}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("your_name")}
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("email_address")}
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("phone_number")}
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("subject")}
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                {t("send_message")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <Tabs defaultValue="masr-el-gedida" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="masr-el-gedida">Masr El Gedida Clinic</TabsTrigger>
              <TabsTrigger value="fifth-settlement">5th Settlement Clinic</TabsTrigger>
            </TabsList>
            <TabsContent value="masr-el-gedida">
              <div className="rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5752357347847!2d31.328345!3d30.060583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM4LjEiTiAzMcKwMTknNDIuMCJF!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </TabsContent>
            <TabsContent value="fifth-settlement">
              <div className="rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5752357347847!2d31.328345!3d30.060583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM4LjEiTiAzMcKwMTknNDIuMCJF!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
