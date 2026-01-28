"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const topNavLinks = [
  { href: "/about", label: "About" },
  { href: "/networks", label: "Our Networks" },
  { href: "/insights", label: "Insights & Impact" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const aboutMegaMenuItems = [
  { href: "/about#purpose", label: "Our Purpose" },
  { href: "/about#mission", label: "Our Mission" },
  { href: "/about#drives", label: "What Drives Us" },
  { href: "/leadership", label: "Leadership Team" },
  { href: "/insights", label: "News & Impact" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/careers", label: "Join Us" },
]

const MenuIcon = ({ className }: { className?: string }) => (
  <svg width="48" height="24" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="matrix(1, 0, 0, 1, 12, 83)">
      <ellipse
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -196.1583 440.4188)"
        cx="433.55"
        cy="456.99"
        rx="428.46"
        ry="428.46"
        fill="#0A76B9"
      />
      <ellipse
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -46.1352 802.6067)"
        cx="945.76"
        cy="456.99"
        rx="428.46"
        ry="428.45"
        fill="#FEC909"
      />
      <ellipse
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 105.1994 1167.9608)"
        cx="1462.45"
        cy="456.99"
        rx="428.45"
        ry="428.45"
        fill="#25A048"
      />
    </g>
  </svg>
)

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isHoveringTop, setIsHoveringTop] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const isHomePage = pathname === "/"
  const isAboutPage =
    pathname.startsWith("/about") ||
    pathname === "/careers" ||
    pathname === "/insights" ||
    pathname === "/networks" ||
    pathname === "/leadership" ||
    pathname === "/partnerships"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsHoveringTop(e.clientY < 100)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const shouldShowHeader = scrollY < 50 || isHoveringTop

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: shouldShowHeader ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/30" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative h-12 w-48">
                {(isHomePage || isAboutPage) && !isScrolled ? (
                  <Image src="/images/PEN-master-logo.svg" alt="PEN GROUP" fill className="object-contain" priority />
                ) : isScrolled ? (
                  <Image src="/images/PEN-master-logo.svg" alt="PEN GROUP" fill className="object-contain" priority />
                ) : (
                  <Image src="/images/PEN-white-logo.svg" alt="PEN GROUP" fill className="object-contain" priority />
                )}
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {/* About with megamenu */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className="relative px-5 py-2 group flex items-center gap-2">
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      pathname.startsWith("/about")
                        ? (isHomePage || isAboutPage) && !isScrolled
                          ? "text-[#0a76b9]"
                          : isScrolled
                            ? "text-[#0a76b9]"
                            : "text-white"
                        : (isHomePage || isAboutPage) && !isScrolled
                          ? "text-gray-800 hover:text-[#0a76b9]"
                          : isScrolled
                            ? "text-gray-800 hover:text-[#0a76b9]"
                            : "text-white/90 hover:text-white"
                    }`}
                  >
                    About
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-all duration-300 ${isAboutOpen ? "rotate-180" : ""} ${
                      (isHomePage || isAboutPage) && !isScrolled
                        ? "text-gray-800"
                        : isScrolled
                          ? "text-gray-800"
                          : "text-white/90"
                    }`}
                  />
                  {pathname.startsWith("/about") && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        (isHomePage || isAboutPage) && !isScrolled
                          ? "bg-[#0a76b9]"
                          : isScrolled
                            ? "bg-[#0a76b9]"
                            : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="fixed left-0 right-0 w-full top-24 z-40"
                    >
                      <div className="relative shadow-2xl p-12">
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: "url('/images/building-background.jpg')",
                          }}
                        />
                        <div className="absolute inset-0 bg-[#0a76b9] opacity-90" />
                        <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-3 gap-12">
                          <div className="col-span-1 space-y-6 text-white">
                            <p className="text-base leading-relaxed">
                              Dedicated to expanding access to high-quality learning. Through a portfolio of
                              institutions, digital platforms, and educational services, we collaborate with partners
                              worldwide to create meaningful, sustainable educational impact.
                            </p>
                            <p className="text-base leading-relaxed">
                              Our group brings together academics, industry leaders, policymakers, and innovators with
                              one shared mission - to empower individuals and communities through education.
                            </p>
                          </div>

                          <div className="col-span-1 flex flex-col space-y-1">
                            {aboutMegaMenuItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="text-white hover:text-[#fec909] transition-colors duration-300 text-lg font-semibold py-1.5"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>

                          <div className="col-span-1 flex items-center justify-center relative">
                            <div className="absolute top-8 left-8 w-64 h-64 bg-[#25a048] rounded-full opacity-70 -z-10" />
                            <motion.div
                              className="absolute w-16 h-16 rounded-full bg-[#fec909] opacity-70 z-20"
                              animate={{
                                x: [-80, 80],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              }}
                              style={{ left: "50%", top: "-8px", marginLeft: "-32px" }}
                            />
                            <motion.div
                              className="absolute w-14 h-14 rounded-full bg-[#25a048] opacity-70 z-20"
                              animate={{
                                y: [-60, 60],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              }}
                              style={{ right: "-7px", top: "50%", marginTop: "-28px" }}
                            />
                            <motion.div
                              className="absolute w-18 h-18 rounded-full bg-[#0a76b9] opacity-70 z-20"
                              animate={{
                                x: [60, -60],
                              }}
                              transition={{
                                duration: 4.5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                ease: "easeInOut",
                              }}
                              style={{
                                left: "50%",
                                bottom: "-9px",
                                marginLeft: "-36px",
                                width: "72px",
                                height: "72px",
                              }}
                            />
                            <div className="relative w-full h-80 rounded-3xl overflow-hidden border-[12px] border-[#fec909] shadow-2xl z-10">
                              <img
                                src="/images/mega-menu-image.jpg"
                                alt="Professional team collaboration"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {topNavLinks.slice(1).map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link key={link.href} href={link.href} className="relative px-5 py-2 group flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? (isHomePage || isAboutPage) && !isScrolled
                            ? "text-[#0a76b9]"
                            : isScrolled
                              ? "text-[#0a76b9]"
                              : "text-white"
                          : (isHomePage || isAboutPage) && !isScrolled
                            ? "text-gray-800 hover:text-[#0a76b9]"
                            : isScrolled
                              ? "text-gray-800 hover:text-[#0a76b9]"
                              : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          (isHomePage || isAboutPage) && !isScrolled
                            ? "bg-[#0a76b9]"
                            : isScrolled
                              ? "bg-[#0a76b9]"
                              : "bg-white"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`h-7 w-7 ${
                    (isHomePage || isAboutPage) && !isScrolled
                      ? "text-gray-900"
                      : isScrolled
                        ? "text-gray-900"
                        : "text-white"
                  }`}
                />
              ) : (
                <MenuIcon className="h-10 w-auto" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-white overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-32 px-8 pb-8">
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="flex items-center justify-between w-full px-5 py-4"
                >
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      pathname.startsWith("/about") ? "text-[#0a76b9]" : "text-gray-800"
                    }`}
                  >
                    About
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isMobileAboutOpen ? "rotate-180" : ""
                    } text-gray-800`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-5 pb-4 space-y-2">
                        {aboutMegaMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-2 text-base text-gray-600 hover:text-[#0a76b9] transition-colors duration-300"
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsMobileAboutOpen(false)
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {topNavLinks.slice(1).map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-5 py-4 group border-b border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#0a76b9]" : "text-gray-800 hover:text-[#0a76b9]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
