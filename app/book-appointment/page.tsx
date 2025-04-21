"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function BookAppointmentPage() {
  const { t } = useLanguage()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    clinic: "masr-el-gedida",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent("Appointment Request")
    const clinic = formData.clinic === "masr-el-gedida" ? "Masr El Gedida Clinic" : "5th Settlement Clinic"
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nClinic: ${clinic}\n\nReason for Visit:\n${formData.reason}`,
    )

    window.location.href = `mailto:Ahmedabdelhamidrihan@gmail.com?subject=${subject}&body=${body}`

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      clinic: "masr-el-gedida",
      reason: "",
    })
    setDate(undefined)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Book an Appointment</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Schedule a visit with Dr. Ahmed Rihan at one of our clinic locations
        </p>

        <div className="mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iDQUzee5iaS50FaSB38ppIVNDAXBX3.png"
            alt="Dr. Ahmed Rihan Kids Clinic"
            width={1200}
            height={300}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Appointment Request Form</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("your_name")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("phone_number")}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("email_address")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("preferred_date")}
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>{t("pick_a_date")}</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(newDate) => {
                              setDate(newDate)
                              setFormData((prev) => ({
                                ...prev,
                                date: newDate ? format(newDate, "yyyy-MM-dd") : "",
                              }))
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="clinic" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Clinic
                    </label>
                    <Tabs
                      defaultValue="masr-el-gedida"
                      className="w-full"
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, clinic: value }))}
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="masr-el-gedida">Masr El Gedida</TabsTrigger>
                        <TabsTrigger value="fifth-settlement">5th Settlement</TabsTrigger>
                      </TabsList>
                      <TabsContent value="masr-el-gedida" className="mt-2">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h3 className="font-medium mb-2">Working Hours:</h3>
                          <p className="text-sm text-gray-600">
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
                      </TabsContent>
                      <TabsContent value="fifth-settlement" className="mt-2">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h3 className="font-medium mb-2">Working Hours:</h3>
                          <p className="text-sm text-gray-600">
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
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                      Reason for Visit
                    </label>
                    <Textarea
                      id="reason"
                      name="reason"
                      rows={4}
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder="Please briefly describe the reason for your visit"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                    {t("submit")}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Clinic Locations</h2>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-red-500" />
                      <h3 className="font-medium">Masr El Gedida Clinic</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      34 El-Hegaz Street, Borg El-Tegareyeen, near El-Mahkama Square, 4th floor
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <a
                        href="https://maps.app.goo.gl/jXscwJnZk2Hg7g1S9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500"
                      >
                        View on Google Maps
                      </a>
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">01281085195</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">
                        Monday, Tuesday, Wednesday, Saturday, Sunday: 6-9 PM
                        <br />
                        Thursday, Friday: Closed
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-red-500" />
                      <h3 className="font-medium">5th Settlement Clinic</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      HCC Building behind Air Force Specialized Hospital, 2nd floor, clinic #213
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <a
                        href="https://maps.app.goo.gl/jnrYV1E6KAfEXTfj9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500"
                      >
                        View on Google Maps
                      </a>
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">01224458092</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <p className="text-sm text-gray-600">
                        Monday, Tuesday, Sunday: 4-6 PM
                        <br />
                        Wednesday, Thursday, Friday, Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
