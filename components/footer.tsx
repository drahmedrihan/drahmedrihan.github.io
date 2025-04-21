"use client"

import type React from "react"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:Ahmedabdelhamidrihan@gmail.com?subject=Newsletter Subscription&body=Please subscribe me to your newsletter. My email is: ${email}`
    setEmail("")
  }

  return (
    <footer className="bg-gradient-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-10 w-10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-sky-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 12.5a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                    <path d="M6 12.5h12" />
                    <path d="M12 18.5l6-6-6-6" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">Dr. Ahmed Rihan</span>
                <span className="text-xs text-gray-500">{t("pediatric_neurology")}</span>
              </div>
            </Link>

            <p className="text-gray-600 mb-6">Cairo, Egypt</p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Phone className="h-5 w-5 text-sky-500" />
              </div>
              <span className="text-gray-700">01228617943</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Mail className="h-5 w-5 text-sky-500" />
              </div>
              <span className="text-gray-700">Ahmedabdelhamidrihan@gmail.com</span>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-6">{t("links")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/patient-guide" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("patient_guide")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("medical_team")}
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("departments")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-6">{t("departments")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/departments/pediatric-neurology"
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t("pediatric_neurology")}
                </Link>
              </li>
              <li>
                <Link href="/departments/newborn" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t("newborn_care")}
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/child-development"
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t("child_development")}
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/genetic-disorders"
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  Genetic Disorders Diagnostics
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-6">{t("subscribe")}</h4>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter to get the latest updates and news.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder={t("email_address")}
                className="border-gray-300 rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl">
                  {t("subscribe_now")}
                </Button>
              </motion.div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Dr. Ahmed Rihan. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
