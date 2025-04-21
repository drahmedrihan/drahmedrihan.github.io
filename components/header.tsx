"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, ChevronDown, Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-12 w-12 overflow-hidden"
          >
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
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-lg font-bold text-gray-900">Dr. Ahmed Rihan</span>
            <span className="text-xs text-gray-500">{t("pediatric_neurology")}</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-sky-500 transition-colors">
              {t("home")}
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-sky-500 transition-colors">
                {t("about")}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-xl bg-white p-2 shadow-lg group-hover:block transition-all">
                <Link
                  href="/about"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 transition-colors"
                >
                  Dr. Ahmed Rihan
                </Link>
                <Link
                  href="/team"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 transition-colors"
                >
                  {t("medical_team")}
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-sky-500 transition-colors">
                {t("patient_guide")}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-xl bg-white p-2 shadow-lg group-hover:block transition-all">
                <Link
                  href="/appointments"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 transition-colors"
                >
                  {t("appointments")}
                </Link>
                <Link
                  href="/faq"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-sky-500 transition-colors">
                {t("departments")}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-xl bg-white p-2 shadow-lg group-hover:block transition-all">
                <Link
                  href="/departments/pediatric-neurology"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 transition-colors"
                >
                  {t("pediatric_neurology")}
                </Link>
                <Link
                  href="/departments/newborn"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 transition-colors"
                >
                  {t("newborn_care")}
                </Link>
              </div>
            </div>
          </motion.nav>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-sky-500 transition-colors"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "AR" : "EN"}
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <Phone className="h-5 w-5 text-sky-500" />
            <span className="text-sm font-medium">01228617943</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/book-appointment">
              <Button className="rounded-full bg-sky-500 px-6 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors">
                {t("book_appointment")}
              </Button>
            </Link>
          </motion.div>
        </div>

        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("medical_team")}
            </Link>
            <Link
              href="/appointments"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("appointments")}
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/departments"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("departments")}
            </Link>
            <Link
              href="/book-appointment"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("book_appointment")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-900 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-sky-500"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "AR" : "EN"}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
