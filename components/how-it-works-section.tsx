"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-sm font-medium text-red-500">{t("how_it_works")}</h2>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">{t("tell_us_medical_need")}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-red-500 mb-4">01</div>
            <h4 className="text-xl font-semibold text-red-500 mb-2">{t("recognise")}</h4>
            <p className="text-gray-600 mb-6">{t("medical_needs")}</p>
            <Link href="/patient-guide">
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                {t("read_more")}
              </Button>
            </Link>
          </div>

          <div className="bg-red-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-white mb-4">02</div>
            <h4 className="text-xl font-semibold text-white mb-2">{t("evaluate")}</h4>
            <p className="text-white mb-6">{t("best_physicians")}</p>
            <Button className="bg-white text-red-500 hover:bg-gray-100">{t("read_more")}</Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-red-500 mb-4">03</div>
            <h4 className="text-xl font-semibold text-red-500 mb-2">{t("connects")}</h4>
            <p className="text-gray-600 mb-6">{t("best_healthcare")}</p>
            <Link href="/patient-guide">
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                {t("read_more")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
