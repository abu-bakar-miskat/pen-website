"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { ArrowRight, Linkedin } from "lucide-react"
import Link from "next/link"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "AA Faruki",
      title: "Founder & CEO",
      bio: "AA Faruki is a forward-thinking entrepreneur and the driving force behind PEN Group's rapid evolution into a global education network. With extensive experience in building and scaling organisations, he leads with a strategic focus on innovation, accessibility, and sustainable growth. His leadership philosophy centres on empowerment, collaboration, and a commitment to widening participation in education. Under his guidance, PEN Group has expanded its institutional portfolio, strengthened its international presence, and developed transformative partnership models that support learners and communities worldwide.",
      linkedin: "https://www.linkedin.com/in/aa-faruki-appi-4bb62a1b4/",
      image: "/images/leaders/aa-faruki.jpeg",
    },
    {
      name: "Professor Ian Luke, PhD PFHEA",
      title: "Chief Academic Officer",
      bio: "Professor Ian Luke is an experienced academic leader with a distinguished career across public and private higher education. Known for his principled, community-focused and partnership-driven approach, he has led major initiatives in academic development, digital learning, quality enhancement and global engagement. His strategic leadership continues to shape PEN Group's academic vision, ensuring that programmes, partnerships and teaching practices uphold excellence, inclusivity and long-term sustainability across all institutions.",
      linkedin: "https://www.linkedin.com/in/prof-ian-luke-phd-pfhea-9a2532369/",
      image: "/images/leaders/ian-luke.jpg",
    },
    {
      name: "MD Arifur Rahman",
      title: "Chief Operating Officer",
      bio: "Md Arifur Rahman is a senior operations specialist with deep expertise in organisational development, higher education management and international partnerships. As Chief Operating Officer, he oversees PEN Group's operational strategy, student experience, service delivery and institutional growth. His leadership is grounded in integrity, collaboration and effectiveness, creating environments where staff and students can thrive. His work continues to strengthen PEN's reputation for operational excellence and values-led, community-focused development.",
      linkedin: "https://www.linkedin.com/in/md-arifur-rahman-arif-433257259/",
      image: "/images/leaders/md-arifur-rahman.png",
    },
    {
      name: "Professor Cedric D Bell, LLB, LLM, Barrister & PhD",
      title: "Director",
      bio: "Professor Cedric Bell is an internationally recognised academic entrepreneur with decades of experience in global higher education, regulatory governance and institutional leadership. Having led major educational organisations across the UK, Malaysia, Africa and Europe, he brings extensive strategic expertise to PEN Group. His distinguished career includes senior executive roles, board leadership positions and advisory contributions across multiple sectors. At PEN, he plays a central role in global strategy, governance, international expansion and senior leadership mentoring.",
      linkedin: "https://www.linkedin.com/in/professor-cedric-bell-5b0a9a2ab/",
      image: "/images/leaders/cedric-bell.jpg",
    },
    {
      name: "Andrew Green",
      title: "Director",
      bio: "Andrew Green is an education leader with nearly four decades of experience across Europe, Asia and the United States. His background spans transnational education, academic leadership and international programme development. Before joining PEN Group as Director, he served as Principal and Director of Partnership Development at Elizabeth School of London, where he helped expand the institution's reach and impact. Andrew is deeply committed to widening educational access and supporting learners from underserved communities, shaping PEN's mission to deliver inclusive, high-quality education.",
      linkedin: "https://www.linkedin.com/in/andrew-green-269273bb/",
      image: "/images/leaders/andrew-green.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
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
                {/* Blue border around video */}
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                {/* Video container */}
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leadership-PEN-buiZwuuSLmSYyJlx1fKgBezqCWng5e.mp4"
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
              Leadership Team
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl mx-auto text-pretty">
              Meet the visionary leaders guiding PEN Group's mission to transform global education through innovation,
              collaboration, and inclusive excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Team Members */}
      <SectionWrapper bgColor="grey">
        <div className="max-w-6xl mx-auto space-y-16">
          {leaders.map((leader, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 ${isEven ? "md:grid-cols-[40%_60%]" : "md:grid-cols-[60%_40%]"} gap-0`}
                >
                  {/* Image Section with Animated Circles */}
                  <div
                    className={`flex items-center justify-center p-12 bg-gradient-to-br from-[#0a76b9]/5 to-[#25a048]/5 ${!isEven ? "md:order-2" : ""}`}
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 z-30 pointer-events-none"
                      >
                        <div className="absolute -top-4 left-[10%] w-12 h-12 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                      </motion.div>

                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 25,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 z-30 pointer-events-none"
                      >
                        <div className="absolute -bottom-3 right-[15%] w-10 h-10 bg-[#25a048] rounded-full opacity-85 shadow-lg" />
                      </motion.div>

                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 30,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 z-30 pointer-events-none"
                      >
                        <div className="absolute top-[25%] -right-2 w-8 h-8 bg-[#0a76b9] rounded-full opacity-80 shadow-lg" />
                      </motion.div>

                      <div className="absolute inset-0 rounded-full border-[12px] border-[#0a76b9] z-10"></div>
                      <div className="w-80 h-80 rounded-full overflow-hidden bg-white">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${!isEven ? "md:order-1" : ""}`}>
                    <h3 className="text-3xl font-black text-[#033351] mb-2">{leader.name}</h3>
                    <p className="text-xl font-bold text-[#0a76b9] mb-4">{leader.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{leader.bio}</p>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0a76b9] hover:text-[#085a8f] font-bold transition-colors group"
                    >
                      <Linkedin className="h-5 w-5" />
                      View LinkedIn Profile
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Back to About CTA */}
      <SectionWrapper bgColor="blue">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-white">Learn More About PEN Group</h2>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-base px-10 py-5 font-bold bg-white hover:bg-gray-100 text-[#0a76b9] rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] border-2 border-white"
            >
              Back to About Us
            </motion.button>
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
