"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsAboutOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false)
    }, 150)
  }

  const isHomePage = pathname === "/"
  const isContactPage = pathname === "/contact"
  const isTransparent = isContactPage && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Scrolled state
      setIsScrolled(currentScrollY > 50)

      // Visibility logic: show when scrolling up or at top, hide when scrolling down
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true) // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-stretch justify-between h-20 lg:h-24">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-10 w-40 lg:h-12 lg:w-48">
                <Image 
                  src={isTransparent ? "/images/PEN-white-logo.svg" : "/images/PEN-master-logo.svg"} 
                  alt="PEN GROUP" 
                  fill 
                  className="object-contain" 
                  priority 
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 h-full">
              <div
                className="relative flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`relative px-4 h-full flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
                    isTransparent ? "text-white hover:text-white/80" : "text-gray-800 hover:text-[#0a76b9]"
                  }`}
                >
                  <span className={pathname.startsWith("/about") ? (isTransparent ? "text-white" : "text-[#0a76b9]") : ""}>
                    About
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : ""} ${isTransparent ? "text-white" : "text-gray-800"}`} />
                  
                  {pathname.startsWith("/about") && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 ${isTransparent ? "bg-white" : "bg-[#0a76b9]"}`}
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
                      className="fixed left-0 right-0 w-full top-20 lg:top-24 z-40"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative shadow-2xl overflow-hidden min-h-[400px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
                          style={{
                            backgroundImage: "url('/images/building-background.jpg')",
                          }}
                        />
                        <div className="absolute inset-0 bg-[#0a76b9]/90 backdrop-blur-sm" />
                        
                        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 grid grid-cols-12 gap-12">
                          <div className="col-span-4 space-y-6 text-white/90">
                            <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                            <p className="text-base leading-relaxed">
                              Dedicated to expanding access to high-quality learning. Through a portfolio of
                              institutions, digital platforms, and educational services, we collaborate with partners
                              worldwide to create meaningful, sustainable educational impact.
                            </p>
                            <div className="pt-4">
                              <Link 
                                href="/about" 
                                onClick={() => setIsAboutOpen(false)}
                                className="inline-flex items-center gap-2 text-[#fec909] font-bold hover:gap-3 transition-all"
                              >
                                Discover More <span>→</span>
                              </Link>
                            </div>
                          </div>

                          <div className="col-span-3 flex flex-col space-y-1 border-l border-white/10 pl-12">
                            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Explore</h3>
                            {aboutMegaMenuItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsAboutOpen(false)}
                                className="text-white hover:text-[#fec909] transition-colors duration-300 text-lg font-semibold py-2 flex items-center justify-between group"
                              >
                                {item.label}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                              </Link>
                            ))}
                          </div>

                          <div className="col-span-5 flex items-center justify-center relative">
                            {/* Decorative Animated Elements */}
                            <motion.div
                              className="absolute w-64 h-64 rounded-full bg-[#25a048]/20 blur-3xl"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                              }}
                              transition={{ duration: 8, repeat: Infinity }}
                            />
                            
                            <motion.div
                              className="absolute w-16 h-16 rounded-full bg-[#fec909] opacity-60 z-20"
                              animate={{ x: [-40, 40], y: [-20, 20] }}
                              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                              style={{ left: "20%", top: "10%" }}
                            />
                            <motion.div
                              className="absolute w-12 h-12 rounded-full bg-[#25a048] opacity-60 z-20"
                              animate={{ x: [30, -30], y: [30, -30] }}
                              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                              style={{ right: "15%", top: "20%" }}
                            />
                            <motion.div
                              className="absolute w-20 h-20 rounded-full bg-[#0a76b9] border border-white/20 opacity-60 z-20"
                              animate={{ x: [-20, 20], y: [40, -40] }}
                              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                              style={{ left: "40%", bottom: "10%" }}
                            />

                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl z-10">
                              <img
                                src="/images/mega-menu-image.jpg"
                                alt="Professional team collaboration"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`relative px-4 py-2 flex items-center h-10 text-sm font-semibold transition-colors duration-300 ${
                      isTransparent
                        ? (isActive ? "text-white" : "text-white/90 hover:text-white")
                        : (isActive ? "text-[#0a76b9]" : "text-gray-800 hover:text-[#0a76b9]")
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-4 right-4 h-0.5 ${isTransparent ? "bg-white" : "bg-[#0a76b9]"}`}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 -mr-2"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5 w-6 items-end">
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                  className={`h-0.5 rounded-full ${isScrolled || isMobileMenuOpen ? "bg-gray-900" : (isTransparent ? "bg-white" : "bg-gray-900")}`}
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, width: "70%" }}
                  className={`h-0.5 rounded-full ${isScrolled || isMobileMenuOpen ? "bg-gray-900" : (isTransparent ? "bg-white" : "bg-gray-900")}`}
                />
                <motion.span 
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                  className={`h-0.5 rounded-full ${isScrolled || isMobileMenuOpen ? "bg-gray-900" : (isTransparent ? "bg-white" : "bg-gray-900")}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div 
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="absolute inset-0 bg-white"
            >
              <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
                <div className="space-y-1">
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className={`text-2xl font-bold ${pathname.startsWith("/about") ? "text-[#0a76b9]" : "text-gray-900"}`}>
                      About
                    </span>
                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""} text-gray-400`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-gray-100"
                      >
                        <div className="py-2 space-y-4">
                          {aboutMegaMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-lg font-medium text-gray-600 hover:text-[#0a76b9]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {topNavLinks.slice(1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-4 text-2xl font-bold ${pathname === link.href ? "text-[#0a76b9]" : "text-gray-900"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-12">
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Get in touch</p>
                    <p className="text-gray-600 text-sm">Have questions? We're here to help you expand your impact.</p>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-block mt-4 text-[#0a76b9] font-bold">
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
