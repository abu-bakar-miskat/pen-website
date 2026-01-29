"use client"

import { useEffect, useState } from "react"
import type { MotionValue } from "framer-motion"

interface AnimatedCounterProps {
  number: number
  suffix: string
  duration?: number
  triggerOpacity?: MotionValue<number>
}

export default function AnimatedCounter({ number, suffix, duration = 2000, triggerOpacity }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!triggerOpacity) return

    const unsubscribe = triggerOpacity.on("change", (latest) => {
      if (latest > 0.5 && !hasAnimated) {
        setHasAnimated(true)

        let startTime: number | null = null
        let animationFrame: number

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)

          // Ease out cubic function for smooth deceleration
          const easeOutCubic = 1 - Math.pow(1 - progress, 3)
          const currentCount = Math.floor(easeOutCubic * number)

          setCount(currentCount)

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate)
          } else {
            setCount(number) // Ensure we end on exact number
          }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame)
          }
        }
      }
    })

    return () => unsubscribe()
  }, [triggerOpacity, hasAnimated, number, duration])

  return (
    <div className="text-4xl md:text-5xl font-black text-gray-900">
      {count}
      {suffix}
    </div>
  )
}
