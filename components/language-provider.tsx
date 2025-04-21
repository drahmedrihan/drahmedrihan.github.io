"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Simple translations
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    patient_guide: "Patient Guide",
    departments: "Medical Departments",
    contact: "Contact",
    book_appointment: "Book an Appointment",
    read_more: "Read More",
    pediatric_neurology: "Pediatric Neurology",
    newborn_care: "Newborn Care",
    child_development: "Child Development",
    subscribe: "Subscribe",
    subscribe_now: "Subscribe Now",
    email_address: "Email Address",
    your_name: "Your Name",
    phone_number: "Phone Number",
    message: "Message",
    send_message: "Send Message",
    working_hours: "Working Hours",
    clinic_location: "Clinic Location",
    follow_us: "Follow Us",
    get_in_touch: "Get in Touch",
    subject: "Subject",
    faq: "Frequently Asked Questions",
    medical_team: "Medical Team",
    appointments: "Appointments",
    preferred_date: "Preferred Date",
    submit: "Submit",
    pick_a_date: "Pick a date",
    how_it_works: "HOW DOES IT WORK?",
    tell_us_medical_need: "Tell us your medical need",
    recognise: "Recognise",
    medical_needs: "Medical Needs",
    evaluate: "Evaluate",
    best_physicians: "The best physicians",
    connects: "Connects",
    best_healthcare: "Best healthcare",
    our_departments: "Our Departments",
    latest_news: "LATEST NEWS",
    blog_posts: "Blog Posts",
    all_rights_reserved: "All rights reserved",
    links: "Links",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    patient_guide: "دليل المريض",
    departments: "الأقسام الطبية",
    contact: "اتصل بنا",
    book_appointment: "حجز موعد",
    read_more: "اقرأ المزيد",
    pediatric_neurology: "طب أعصاب الأطفال",
    newborn_care: "رعاية حديثي الولادة",
    child_development: "تطور الطفل",
    subscribe: "اشترك",
    subscribe_now: "اشترك الآن",
    email_address: "البريد الإلكتروني",
    your_name: "الاسم",
    phone_number: "رقم الهاتف",
    message: "الرسالة",
    send_message: "إرسال الرسالة",
    working_hours: "ساعات العمل",
    clinic_location: "موقع العيادة",
    follow_us: "تابعنا",
    get_in_touch: "تواصل معنا",
    subject: "الموضوع",
    faq: "الأسئلة الشائعة",
    medical_team: "الفريق الطبي",
    appointments: "المواعيد",
    preferred_date: "التاريخ المفضل",
    submit: "إرسال",
    pick_a_date: "اختر تاريخًا",
    how_it_works: "كيف يعمل؟",
    tell_us_medical_need: "أخبرنا عن احتياجاتك الطبية",
    recognise: "التعرف",
    medical_needs: "الاحتياجات الطبية",
    evaluate: "التقييم",
    best_physicians: "أفضل الأطباء",
    connects: "التواصل",
    best_healthcare: "أفضل رعاية صحية",
    our_departments: "أقسامنا",
    latest_news: "أحدث الأخبار",
    blog_posts: "المدونة",
    all_rights_reserved: "جميع الحقوق محفوظة",
    links: "روابط",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Function to translate text
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
