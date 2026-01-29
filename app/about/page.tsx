"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedHeading } from "@/components/animated-heading"
import { Card } from "@/components/ui/card"
import { Award, Users, Globe2, Target, Shield, Lightbulb, Heart, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper bgColor="white" className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/light-background-web.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />

        <div className="max-w-6xl mx-auto h-full flex items-center relative z-10 px-6 pt-24 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:space-y-10 z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#0a76b9] via-[#25a048] to-[#0a76b9] bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent"
                style={{ lineHeight: 1.0 }}
              >
                We are a global education organisation
              </h1>

              <p className="text-lg md:text-xl lg:text-xl text-gray-800 leading-relaxed max-w-2xl">
                Through a portfolio of institutions, digital platforms, and educational services, our group brings
                together academics, industry leaders, policymakers and innovators with one shared mission - to empower
                individuals and communities through education.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <a href="#mission" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto text-base px-8 py-4 font-bold bg-[#0a76b9] hover:bg-[#085a8f] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(10,118,185,0.5)] border-2 border-[#0a76b9] hover:border-[#085a8f]"
                  >
                    Our Mission
                  </motion.button>
                </a>
                <a href="#leadership" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto text-base px-8 py-4 font-bold bg-[#25a048] hover:bg-[#1e8039] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(37,160,72,0.5)] border-2 border-[#25a048] hover:border-[#1e8039]"
                  >
                    Leadership Team
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Image Collage */}
            <div className="relative w-full h-[600px] lg:h-[700px]">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-20 -left-20 w-80 h-80 bg-[#25a048] rounded-full z-0"
              />

              {/* 2x2 Grid Container */}
              <div className="relative grid grid-cols-2 gap-6 lg:gap-8 w-full h-full">
                {/* Top Left - Yellow bordered woman presenting */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="w-full h-full border-[16px] lg:border-[20px] border-[#fec909] rounded-[32px] lg:rounded-[48px] overflow-hidden bg-white shadow-2xl">
                    <img
                      src="/professional-woman-presenting-at-business-conferen.jpg"
                      alt="Professional woman presenting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Top Right - Blue bordered building */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="w-full h-full border-[16px] lg:border-[20px] border-[#0a76b9] rounded-[32px] lg:rounded-[48px] overflow-hidden bg-white shadow-2xl">
                    <img
                      src="/modern-glass-building-architecture-blue-sky.jpg"
                      alt="Modern glass building"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-12 -right-12 w-32 h-32 lg:w-40 lg:h-40 bg-[#fec909] rounded-full z-10"
                  />
                </motion.div>

                {/* Bottom Left - Navy bordered team meeting */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="w-full h-full border-[16px] lg:border-[20px] border-[#033351] rounded-[32px] lg:rounded-[48px] overflow-hidden bg-white shadow-2xl">
                    <img
                      src="/diverse-business-team-meeting-around-conference-ta.jpg"
                      alt="Business team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{
                      x: [0, -20, 0],
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-16 -left-8 w-36 h-36 lg:w-44 lg:h-44 bg-[#fec909] rounded-full z-10"
                  />
                </motion.div>

                {/* Bottom Right - Green bordered woman presenting */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <div className="w-full h-full border-[16px] lg:border-[20px] border-[#25a048] rounded-[32px] lg:rounded-[48px] overflow-hidden bg-white shadow-2xl">
                    <img
                      src="/professional-woman-presenting-at-business-conferen.jpg"
                      alt="Professional presenter"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Purpose */}
      <SectionWrapper bgColor="grey" parchment>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="relative aspect-video">
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/images/our-purpose.mp4"
                  />
                </div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -top-6 lg:-top-8 left-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -bottom-4 lg:-bottom-6 right-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-[#25a048] rounded-full opacity-85 shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute top-[20%] -right-3 lg:-right-4 w-14 h-14 lg:w-20 lg:h-20 bg-[#0a76b9] rounded-full opacity-80 shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Our Purpose
            </AnimatedHeading>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">
              PEN Group was founded by a team of passionate educators and visionaries committed to enhancing global
              learning experiences. Our strength lies in our diverse expertise and our belief that education can
              transform societies.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Mission */}
      <SectionWrapper bgColor="white" className="z-50 overflow-visible" id="mission">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/light-background-web.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="relative aspect-video">
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our-Mission-HhTWrscClQ09z2EUh4h61NBfLejGDY.mp4"
                  />
                </div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -top-6 lg:-top-8 left-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -bottom-4 lg:-bottom-6 right-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-[#25a048] rounded-full opacity-85 shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute top-[20%] -right-3 lg:-right-4 w-14 h-14 lg:w-20 lg:h-20 bg-[#0a76b9] rounded-full opacity-80 shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Our Mission
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              We equip learners with the knowledge, skills, and ethical foundations needed to thrive in a globalised
              world. Our mission focuses on creating meaningful educational opportunities that prepare individuals for
              modern careers, civic engagement and positive societal contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Academic Excellence",
                description:
                  "We are committed to delivering high-quality education grounded in robust academic standards, expert teaching and continuous improvement.",
                icon: Award,
                bgColor: "bg-[#0a76b9]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Inclusive Learning Opportunities",
                description:
                  "We widen participation by ensuring that learners from all backgrounds have access to supportive, flexible and transformative educational pathways.",
                icon: Users,
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Global Collaboration",
                description:
                  "We work across borders with institutions, partners and communities to promote shared learning, cultural understanding and international engagement.",
                icon: Globe2,
                bgColor: "bg-[#fec909]",
                iconColor: "text-[#564400]",
                textColor: "text-[#564400]",
              },
              {
                title: "Workforce-Focused Skills Development",
                description:
                  "We design programmes that equip learners with practical skills, industry insight and career-ready capabilities aligned with the demands of a modern workforce.",
                icon: Target,
                bgColor: "bg-white",
                iconColor: "text-[#0a76b9]",
                textColor: "text-[#0a76b9]",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${item.bgColor} ${item.textColor} border-0 p-8 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center`}
              >
                {item.icon && <item.icon className={`h-16 w-16 ${item.iconColor} mb-4`} />}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p
                  className={`leading-relaxed ${item.textColor === "text-white" ? "text-white/90" : item.textColor === "text-gray-900" ? "text-gray-700" : "text-[#033351]/90"}`}
                >
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What Drives Us */}
      <SectionWrapper bgColor="blue" parchment className="z-50 overflow-visible">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black">What Drives Us</AnimatedHeading>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto text-pretty">
              At PEN, we hold ourselves to the highest standards of academic integrity, innovation, and inclusion. Our
              values guide everything we do — from curriculum design to student engagement — and define the culture of
              excellence across our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Global Connectivity",
                description:
                  "We believe in using education as a powerful tool to connect people and bridge international communities, fostering meaningful relationships across borders.",
                icon: Globe2,
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Integrity",
                description:
                  "We strive to instil honesty, transparency, fairness and ethical conduct across all our academic and operational practices to build a community founded on trust.",
                icon: Shield,
                bgColor: "bg-white",
                iconColor: "text-[#0a76b9]",
                textColor: "text-[#0a76b9]",
              },
              {
                title: "Innovation",
                description:
                  "We continuously evolve our methods and approaches to meet the dynamic needs of global learners and the rapidly changing education landscape.",
                icon: Lightbulb,
                bgColor: "bg-[#fec909]",
                iconColor: "text-[#564400]",
                textColor: "text-[#564400]",
              },
              {
                title: "Empowering Minds",
                description:
                  "We encourage intellectual growth and creativity by promoting critical thinking and innovation, enabling students to excel in an ever-changing world.",
                icon: Sparkles,
                bgColor: "bg-[#fec909]",
                iconColor: "text-[#564400]",
                textColor: "text-[#564400]",
              },
              {
                title: "Inclusivity",
                description:
                  "We are committed to ensuring that all individuals — regardless of background or circumstance — have equal access to high-quality educational opportunities.",
                icon: Users,
                bgColor: "bg-white",
                iconColor: "text-[#0a76b9]",
                textColor: "text-[#0a76b9]",
              },
              {
                title: "Cultural Exchange",
                description:
                  "We celebrate diversity and champion mutual understanding among cultures, using education to support meaningful cross-cultural engagement.",
                icon: Heart,
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${item.bgColor} ${item.textColor} border-0 p-8 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center`}
              >
                {item.icon && <item.icon className={`h-16 w-16 ${item.iconColor} mb-4`} />}
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{item.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${item.textColor === "text-white" ? "text-white/90" : item.textColor === "text-gray-900" ? "text-gray-700" : "text-[#033351]/90"}`}
                >
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Governance */}
      <SectionWrapper bgColor="white" parchment className="z-50 overflow-visible">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/light-background-web.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl overflow-visible">
              <div className="relative aspect-video overflow-visible">
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate-Governance-pn2fXgR7mgGKVob7tSZXP13YNuHYXR.mp4"
                  />
                </div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-[100] pointer-events-none"
                >
                  <div className="absolute -top-6 lg:-top-8 left-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-[100] pointer-events-none"
                >
                  <div className="absolute -bottom-4 lg:-bottom-6 right-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-[#25a048] rounded-full opacity-85 shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-[100] pointer-events-none"
                >
                  <div className="absolute top-[20%] -right-3 lg:-right-4 w-14 h-14 lg:w-20 lg:h-20 bg-[#0a76b9] rounded-full opacity-80 shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Corporate Governance – What Guides Our Leadership
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN Group is committed to strong, transparent and responsible governance. Our governance approach ensures
              that every institution within our network operates with integrity, academic rigour and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Regulatory Compliance",
                description:
                  "We maintain strict alignment with national and international regulatory requirements to ensure the highest level of institutional integrity and academic credibility.",
                icon: Shield,
                bgColor: "bg-[#0a76b9]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Quality Assurance",
                description:
                  "Robust internal frameworks safeguard academic standards, enhance teaching quality and ensure consistent learner outcomes across all campuses and partner institutions.",
                icon: Award,
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Ethical Practice",
                description:
                  "Our governance principles prioritise fairness, responsibility and ethical conduct, ensuring that decision-making always reflects the best interests of learners, partners and communities.",
                icon: Heart,
                bgColor: "bg-white",
                iconColor: "text-[#0a76b9]",
                textColor: "text-[#0a76b9]",
              },
              {
                title: "Accountability & Oversight",
                description:
                  "Leadership teams across the Group operate under structured oversight mechanisms, enabling continuous improvement, compliance monitoring and responsible organisational growth.",
                icon: Target,
                bgColor: "bg-[#fec909]",
                iconColor: "text-[#564400]",
                textColor: "text-[#564400]",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${item.bgColor} ${item.textColor} border-0 p-8 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center`}
              >
                {item.icon && <item.icon className={`h-16 w-16 ${item.iconColor} mb-4`} />}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p
                  className={`leading-relaxed ${item.textColor === "text-white" ? "text-white/90" : item.textColor === "text-gray-900" ? "text-gray-700" : "text-[#033351]/90"}`}
                >
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Technology & Innovation */}
      <SectionWrapper bgColor="yellow" parchment className="z-50 overflow-visible">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="relative aspect-video">
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Technology-and-Innovation-bLH7AiDmb7BMvqrZyt26UHpssLykyU.mp4"
                  />
                </div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -top-6 lg:-top-8 left-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -bottom-4 lg:-bottom-6 right-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-[#25a048] rounded-full opacity-85 shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute top-[20%] -right-3 lg:-right-4 w-14 h-14 lg:w-20 lg:h-20 bg-[#0a76b9] rounded-full opacity-80 shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#564400]">
              Technology & Innovation – What Powers Our Progress
            </AnimatedHeading>
            <p className="text-lg md:text-2xl text-[#564400] leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN Group is committed to advancing education through modern, scalable and impactful technologies that
              enhance teaching, learning and institutional performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Learning Transformation",
                description:
                  "We develop and integrate digital tools that support flexible, accessible and high-quality learning experiences for students across multiple regions.",
                icon: Lightbulb,
                bgColor: "bg-white",
                iconColor: "text-[#0a76b9]",
                textColor: "text-[#0a76b9]",
              },
              {
                title: "Student Experience Enhancement",
                description:
                  "We invest in platforms that improve engagement, communication, wellbeing and personalised support throughout the learner journey.",
                icon: Users,
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Data-Driven Decision Making",
                description:
                  "Our systems empower institutions with reliable insights to optimise academic delivery, strengthen compliance and inform strategic planning.",
                icon: Target,
                bgColor: "bg-[#0a76b9]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Innovation Through Collaboration",
                description:
                  "We work with universities, technology partners and industry experts to co-create solutions that meet emerging educational and workforce needs.",
                icon: Globe2,
                bgColor: "bg-white",
                iconColor: "text-[#25a048]",
                textColor: "text-[#25a048]",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${item.bgColor} ${item.textColor} border-0 p-8 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center`}
              >
                {item.icon && <item.icon className={`h-16 w-16 ${item.iconColor} mb-4`} />}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${item.textColor === "text-white" ? "text-white/90" : item.textColor === "text-gray-900" ? "text-gray-700" : "text-[#033351]/90"}`}
                >
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
