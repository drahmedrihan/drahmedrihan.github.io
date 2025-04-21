"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, options)

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el)
        })
      }
    }
  }, [])

  return <>{children}</>
}
