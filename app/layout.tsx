import type React from "react"
import type { Metadata } from "next"
import { Nunito, Quicksand } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import ScrollReveal from "@/components/scroll-reveal"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Ahmed Rihan - Consultant of Pediatrics and Neurology",
  description: "Dr. Ahmed Abdelhameed Rihan - Consultant and teacher of pediatric neurology, Ain Shams University",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <ScrollReveal>
              <Header />
              <main>{children}</main>
              <Footer />
            </ScrollReveal>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
