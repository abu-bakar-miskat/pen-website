import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  bgColor?: "blue" | "navy" | "green" | "yellow" | "white" | "light"
  parchment?: boolean
  id?: string
}

export function SectionWrapper({ children, className, bgColor = "white", parchment = false, id }: SectionWrapperProps) {
  const bgColorClasses = {
    blue: "bg-[#0a76b9] text-white",
    navy: "bg-[#033351] text-white",
    green: "bg-[#25a048] text-white",
    yellow: "bg-[#fec909] text-gray-900",
    white: "bg-white text-gray-900",
    light: "bg-gray-50 text-gray-900",
  }

  return (
    <section
      id={id}
      className={cn(
        "scroll-section relative min-h-screen",
        bgColorClasses[bgColor],
        parchment && "parchment-overlay",
        className,
      )}
    >
      {!className?.includes("!py-0") && (
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 min-h-screen flex flex-col justify-center">
          {children}
        </div>
      )}
      {className?.includes("!py-0") && children}
    </section>
  )
}
