"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Building2, Globe2, GraduationCap } from "lucide-react"
import AnimatedCounter from "./animated-counter"

export default function ScrollGlanceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5])
  const headingY = useTransform(scrollYProgress, [0, 0.3], ["0vh", "-20vh"])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])

  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [100, 0])

  const card1Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
  const card1Y = useTransform(scrollYProgress, [0.4, 0.5], [150, 0])

  const card2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
  const card2Y = useTransform(scrollYProgress, [0.5, 0.6], [150, 0])

  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])
  const card3Y = useTransform(scrollYProgress, [0.6, 0.7], [150, 0])

  const card4Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])
  const card4Y = useTransform(scrollYProgress, [0.7, 0.8], [150, 0])

  const stats = [
    {
      icon: Users,
      number: 25,
      suffix: "K+",
      label: "Learners Supported",
      opacity: card1Opacity,
      y: card1Y,
      borderClass: "border-[5px] border-[#f4a300]",
      iconColor: "#f4a300",
    },
    {
      icon: Building2,
      number: 17,
      suffix: "+",
      label: "Campuses Across UK & Ireland",
      opacity: card2Opacity,
      y: card2Y,
      borderClass: "border-[5px] border-[#25a048]",
      iconColor: "#25a048",
    },
    {
      icon: Globe2,
      number: 30,
      suffix: "+",
      label: "Organizations Under the Group",
      opacity: card3Opacity,
      y: card3Y,
      borderClass: "border-[5px] border-[#25a048]",
      iconColor: "#25a048",
    },
    {
      icon: GraduationCap,
      number: 150,
      suffix: "+",
      label: "Nationalities Represented",
      opacity: card4Opacity,
      y: card4Y,
      borderClass: "border-[5px] border-[#f4a300]",
      iconColor: "#f4a300",
    },
  ]

  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[450vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/building-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[#0a76b9]/90" />

        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-6 py-8 md:pb-0 overflow-y-auto md:overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              style={{
                scale: headingScale,
                y: headingY,
                opacity: headingOpacity,
              }}
              className="absolute inset-0 flex items-center justify-center text-center px-4"
            >
              <h2
                className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-white"
                style={{ lineHeight: 0.9 }}
              >
                PEN Group
                <br />
                at a Glance
              </h2>
            </motion.div>

            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={index} style={{ opacity: stat.opacity, y: stat.y }}>
                    <div
                      className={`relative p-6 md:p-8 h-[200px] md:h-[240px] flex flex-col items-center justify-center text-center space-y-3 md:space-y-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg ${stat.borderClass}`}
                    >
                      <div className="flex items-center justify-center" style={{ width: "64px", height: "64px" }}>
                        <stat.icon
                          style={{
                            width: "64px",
                            height: "64px",
                            color: stat.iconColor,
                          }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="space-y-1">
                        <AnimatedCounter number={stat.number} suffix={stat.suffix} triggerOpacity={stat.opacity} />
                        <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6 md:space-y-8 z-10 text-center lg:text-left flex flex-col justify-center">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white"
                  style={{ lineHeight: 0.9 }}
                >
                  PEN Group at a Glance
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  Planet Education Networks (PEN Group) operates a diverse portfolio of universities, colleges, online
                  learning platforms, and educational service providers across the UK, Ireland, Europe, and beyond. Our
                  purpose is to make high-quality, accessible education available to learners everywhere through strong
                  partnerships and a unified global ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
