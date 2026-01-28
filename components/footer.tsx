"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user is near the bottom (within 200px of footer)
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const threshold = 200 // pixels from bottom

      if (documentHeight - scrollPosition < threshold) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-[#1a3a52] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/building-background.jpg"
          alt="Building Background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#033351]/90" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image src="/images/PEN-white-logo.svg" alt="PEN Group Logo" width={200} height={80} className="mb-4" />
            </div>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              PEN Group is a trading brand of Planet Education Group Ltd, registered in England & Wales No.: 16377447
            </p>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-[#fec909] text-xl font-bold mb-6">Policies</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-white hover:text-[#fec909] transition-colors text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-white hover:text-[#fec909] transition-colors text-base">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white hover:text-[#fec909] transition-colors text-base">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#fec909] text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/helpful-links" className="text-white hover:text-[#fec909] transition-colors text-base">
                  Helpful Links
                </Link>
              </li>
              <li>
                <Link
                  href="/companies-signature"
                  className="text-white hover:text-[#fec909] transition-colors text-base"
                >
                  Companies Signature
                </Link>
              </li>
              <li>
                <Link href="/it-support" className="text-white hover:text-[#fec909] transition-colors text-base">
                  IT Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-[#fec909] text-xl font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#fec909]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:hello@pengroup.com"
                  className="text-white hover:text-[#fec909] transition-colors text-base"
                >
                  hello@pengroup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#fec909]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-white text-base max-w-xs">
                  Ground Floor Unit H1, Moorfoot House, Meridian Gate, 221 Marsh Wall, London, England, E14 9FJ
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mt-6 h-48">
        {/* Skyline at the bottom - full width */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
          <Image
            src="/footer-skyline.svg"
            alt="London Skyline"
            fill
            className="object-cover object-bottom"
            priority={false}
          />
        </div>

        {/* Copyright text overlaying the skyline */}
        <div className="absolute bottom-0 left-0 w-full z-20 py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="text-white text-sm">Copyright © 2025 PEN Group. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full p-7 bg-black hover:bg-black/90 text-white shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </Button>
        </div>
      )}
    </footer>
  )
}
