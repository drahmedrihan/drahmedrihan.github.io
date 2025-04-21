import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import BooksSection from "@/components/books-section"
import MediaSection from "@/components/media-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BooksSection />
      <MediaSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
