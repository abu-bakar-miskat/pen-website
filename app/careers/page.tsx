"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedHeading } from "@/components/animated-heading"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PoundSterling, TrendingUp, Users, Globe2, Heart, Briefcase } from "lucide-react"

export default function CareersPage() {
  return (
    <main>
      <section className="relative py-24 md:py-28 lg:py-32 bg-white overflow-hidden">
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
        <div className="container max-w-7xl mx-auto px-4 md:px-6 space-y-16 relative z-10">
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Careers-9BsYlnJzNsQRALuEjvfujBl1qBU2NH.mp4"
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

          <AnimatedSection className="text-center space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#0a76b9] via-[#25a048] to-[#0a76b9] bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">
              A Global Workplace That Values People
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl mx-auto text-pretty">
              At PEN Group, we believe our people drive our success. We offer an inclusive, collaborative and
              forward-thinking working environment where every team member can grow, contribute and feel valued. Our
              culture encourages innovation, supports professional development and recognises the unique strengths each
              individual brings, creating a workplace where people are empowered to excel and make meaningful impact.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#what-we-offer">
              <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-semibold bg-[#0a76b9] hover:bg-[#0a76b9]/90 text-white border-2 border-[#0a76b9] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  What We Offer
                </Button>
              </motion.div>
            </a>
            <Link href="https://www.linkedin.com/company/pengroup/jobs/" target="_blank">
              <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-semibold bg-[#25a048] hover:bg-[#25a048]/90 text-white border-2 border-[#25a048] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Current Vacancies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper bgColor="grey" id="what-we-offer">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              What We Offer
            </AnimatedHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Salary & Benefits",
                description:
                  "We provide a comprehensive and competitive benefits package designed to support staff wellbeing, financial stability and long-term career satisfaction.",
                icon: PoundSterling,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
                delay: 0.1,
              },
              {
                title: "Professional Development & Training",
                description:
                  "Our teams have access to continuous learning opportunities, leadership development programmes and skills-based training to support career progression.",
                icon: TrendingUp,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
                delay: 0.2,
              },
              {
                title: "Inclusive & Diverse Workplace Culture",
                description:
                  "We celebrate diversity and are committed to fostering an inclusive environment where every individual is valued, respected and empowered to contribute.",
                icon: Users,
                borderColor: "border-[#25a048]",
                iconColor: "text-[#25a048]",
                delay: 0.3,
              },
              {
                title: "International Collaboration Opportunities",
                description:
                  "With a global network of partners and campuses, our staff benefit from opportunities to collaborate across regions, sharing knowledge and best practice.",
                icon: Globe2,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
                delay: 0.4,
              },
              {
                title: "Supportive Leadership & Team Environment",
                description:
                  "Our leadership teams prioritise transparency, mentorship and open communication, ensuring that staff feel supported, heard and able to thrive in their roles.",
                icon: Heart,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
                delay: 0.5,
              },
              {
                title: "Employee Benefits Scheme",
                description:
                  "Through our BRAVO Benefits scheme, staff enjoy access to exclusive discounts, wellness programs, retail savings, entertainment offers, and lifestyle perks designed to enhance work-life balance and overall wellbeing.",
                icon: Briefcase,
                borderColor: "border-[#25a048]",
                iconColor: "text-[#25a048]",
                delay: 0.6,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: benefit.delay, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-white rounded-xl p-8 border-6 ${benefit.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4`}
              >
                <benefit.icon className={`h-16 w-16 ${benefit.iconColor}`} />
                <h3 className="text-2xl font-bold text-[#033351]">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="yellow">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatedHeading className="text-3xl md:text-4xl lg:text-5xl font-black text-[#033351]">
            Ready to Join Our Team?
          </AnimatedHeading>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Explore current opportunities and find your next career move with PEN Group. We're always looking for
            talented, passionate individuals to join our global team.
          </p>
          <Link href="https://www.linkedin.com/company/pengroup/jobs/" target="_blank">
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                size="lg"
                className="text-xl px-12 py-8 font-bold bg-[#0a76b9] hover:bg-[#0a76b9]/90 text-white border-2 border-[#0a76b9] shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                View Current Vacancies on LinkedIn
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
