"use client";

import type React from "react";

import { AnimatedHeading } from "@/components/animated-heading";
import ScrollGlanceSection from "@/components/scroll-glance-section";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  Globe2,
  GraduationCap,
  Lightbulb,
  Network,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main>
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

        <div className="max-w-6xl mx-auto h-full flex items-center relative z-10 px-6 py-24 lg:py-0 lg:-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:space-y-10 z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h1
                className="text-5xl md:text-6xl lg:text-6xl font-black bg-gradient-to-r from-[#0a76b9] via-[#25a048] to-[#0a76b9] bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent"
                style={{ lineHeight: 0.9 }}
              >
                Innovating
                <br />
                Education
                <br />
                for a Global
                <br />
                Tomorrow
              </h1>

              <p className="text-lg md:text-xl lg:text-xl text-gray-800 leading-relaxed max-w-2xl">
                PEN Group is shaping the future of international education by
                partnering with universities and industry leaders to deliver
                scalable, high-quality learning opportunities around the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <Link href="/networks" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto text-base px-8 py-4 font-bold bg-[#0a76b9] hover:bg-[#085a8f] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(10,118,185,0.5)] border-2 border-[#0a76b9] hover:border-[#085a8f]"
                  >
                    Explore Our Network
                  </motion.button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto text-base px-8 py-4 font-bold bg-[#fec909] hover:bg-[#e5b508] text-[#033351] rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(254,201,9,0.5)] border-2 border-[#fec909] hover:border-[#e5b508]"
                  >
                    Partner With Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end lg:-mr-32 xl:-mr-48"
            >
              <div className="relative">
                <div className="relative w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]">
                  <div className="absolute inset-0 rounded-full border-[20px] lg:border-[28px] border-[#0a76b9] z-20" />

                  <div className="absolute inset-[20px] lg:inset-[28px] rounded-full overflow-hidden shadow-2xl z-10 bg-gray-200">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-hero-0BRDyFPSckP5tTLgu7q1xoJi2kHM3i.mp4"
                    />
                  </div>

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
                    <div className="absolute -top-8 lg:-top-10 left-1/2 -translate-x-1/2 w-32 h-32 lg:w-40 lg:h-40 bg-[#25a048] rounded-full opacity-85 shadow-xl" />
                  </motion.div>

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 35,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 z-30 pointer-events-none"
                  >
                    <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 w-40 h-40 lg:w-48 lg:h-48 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <ScrollGlanceSection />

      <SectionWrapper bgColor="navy" parchment>
        <div className="max-w-7xl mx-auto space-y-16">
          <AnimatedSection className="text-center space-y-8">
            <AnimatedHeading className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
              A Global Education Ecosystem
            </AnimatedHeading>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-5xl mx-auto text-pretty">
              PEN Group brings together a diverse network of institutions,
              services and platforms that collectively support learners,
              partners and communities across multiple regions. This ecosystem
              enables seamless collaboration, operational excellence and
              meaningful educational impact. This integrated model allows us to
              deliver end-to-end solutions for learners, institutions,
              governments and corporate partners, ensuring that education
              remains accessible, innovative and impact-driven.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Higher Education Institutions",
                icon: GraduationCap,
                description:
                  "Our portfolio includes established providers such as Elizabeth School of London, William College, and City Education Group (Ireland), delivering undergraduate and professional programmes across a wide range of disciplines.",
                bgColor: "bg-[#0a76b9]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Creative & Professional Colleges",
                icon: Lightbulb,
                description:
                  "Institutions like VCAD – Victoria College of Arts and Design expand our offering into the creative industries, supporting talent development in design, media, fashion and digital arts.",
                bgColor: "bg-[#fec909]",
                iconColor: "text-[#033351]",
                textColor: "text-[#033351]",
              },
              {
                title: "Online Learning Platforms",
                icon: Globe2,
                description:
                  "Through EducateU, we provide flexible online pathways, CPD courses and professional qualifications that allow learners worldwide to upskill at their own pace.",
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Technology Providers",
                icon: Sparkles,
                description:
                  "Our technology and digital-learning partners support innovation in academic delivery, student engagement and compliance, ensuring institutions remain responsive and future-ready.",
                bgColor: "bg-white",
                iconColor: "text-[#0a76b9]",
                textColor: "text-gray-900",
              },
              {
                title: "Academic Services & Support",
                icon: Award,
                description:
                  "Brands such as Horizon, Spectrum, and Pinnacle Educational Services strengthen institutional operations through academic coordination, quality assurance, compliance support and campus management.",
                bgColor: "bg-[#0a76b9]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Workforce & Skills Development Initiatives",
                icon: Network,
                description:
                  "Organisations including ZSOS, Uni Talent Network UniWay Connect, Go Uniway and Trusted EduPath support UK learners with guidance, outreach and progression routes into higher education and professional industries.",
                bgColor: "bg-[#25a048]",
                iconColor: "text-white",
                textColor: "text-white",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card
                  className={`p-8 h-full ${item.bgColor} border-0 hover-lift group transition-all duration-300 flex flex-col items-center justify-center text-center`}
                >
                  <div className="flex justify-center mb-6">
                    <item.icon
                      className={`${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      style={{ width: "64px", height: "64px" }}
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 md:mb-5 ${item.textColor}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${item.textColor === "text-white" ? "text-white/90" : item.textColor === "text-gray-900" ? "text-gray-700" : "text-[#033351]/90"} leading-relaxed text-base`}
                  >
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="relative py-16 md:py-20 lg:py-24 bg-white oveflow-x-hidden overflow-y-visible">
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-video-458fc5a7-5194-41ee-a376-8d9ab89ca020-B4KDNMf68tdPfrI5caDyROPioMPSWa.mp4"
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
                  <div className="absolute -top-6 lg:-top-8 left-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-[#fec909] rounded-full opacity-90 shadow-xl z-40" />
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
                  <div className="absolute -bottom-4 lg:-bottom-6 right-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-[#25a048] rounded-full opacity-85 shadow-lg z-40" />
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
                  <div className="absolute top-[20%] -right-3 lg:-right-4 w-14 h-14 lg:w-20 lg:h-20 bg-[#0a76b9] rounded-full opacity-80 shadow-lg z-40" />
                </motion.div>
              </div>
            </div>
          </div>

          <AnimatedSection className="text-center space-y-6 lg:space-y-8">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-7xl font-black text-[#033351]">
              Why Partner with PEN?
            </AnimatedHeading>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl mx-auto text-pretty">
              PEN Group partners with institutions, governments and
              organisations seeking responsible, future-focused and
              high-performing education solutions. Our experience, values and
              integrated ecosystem make us a trusted collaborator in a rapidly
              evolving global landscape.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {[
              {
                title: "Extensive Network & Proven Capability",
                description:
                  "We operate a broad ecosystem of institutions and services — including Elizabeth School of London, VCAD, William College and City Education Group — giving partners access to established infrastructure, operational expertise and sector-wide insight.",
                bgColor: "bg-[#0a76b9]",
                icon: Network,
                iconColor: "text-white",
                textColor: "text-white",
                delay: 0.1,
              },
              {
                title: "Experienced Leadership with Global Perspective",
                description:
                  "Our senior leadership team brings decades of academic, corporate and international experience, enabling strategic, well-governed and sustainable partnership development.",
                bgColor: "bg-[#25a048]",
                icon: Globe2,
                iconColor: "text-white",
                textColor: "text-white",
                delay: 0.2,
              },
              {
                title: "Flexible and Scalable Partnership Models",
                description:
                  "Whether institutions are exploring academic collaboration, campus expansion or specialised delivery models, we offer adaptable frameworks that evolve with partner needs.",
                bgColor: "bg-[#0a76b9]",
                icon: TrendingUp,
                iconColor: "text-white",
                textColor: "text-white",
                delay: 0.3,
              },
              {
                title: "A Collaborative and Supportive Approach",
                description:
                  "Partners benefit from a dedicated, knowledgeable and relationship-focused team committed to transparent communication, shared objectives and long-term success.",
                bgColor: "bg-[#fec909]",
                icon: Award,
                iconColor: "text-[#033351]",
                textColor: "text-[#033351]",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
              >
                <Card
                  className={`p-6 md:p-8 lg:p-10 ${item.bgColor} border-0 hover-lift h-full flex flex-col items-center justify-center text-center`}
                >
                  <div className="flex justify-center mb-6">
                    <item.icon
                      className={`${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      style={{ width: "64px", height: "64px" }}
                    />
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-black mb-4 md:mb-5 ${item.textColor}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-base md:text-lg leading-relaxed ${item.textColor === "text-white" ? "text-white/95" : "text-[#033351]/90"}`}
                  >
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center pt-4">
            <Link href="/partnerships">
              <motion.button
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 font-bold bg-[#25a048] hover:bg-[#1e8039] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(37,160,72,0.5)] border-2 border-[#25a048] hover:border-[#1e8039] inline-flex items-center gap-3"
              >
                Explore Partnership Opportunities
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <SectionWrapper bgColor="grey">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <AnimatedSection>
            <AnimatedHeading className="text-5xl md:text-6xl lg:text-7xl font-black text-[#033351] mb-6">
              Latest Updates
            </AnimatedHeading>
            <p className="text-2xl text-[#033351]/80">
              Stay informed about the latest news and developments from PEN
              Group.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {[
              {
                id: 1,
                title: "Expanding Global Reach",
                excerpt:
                  "PEN Group announces new partnerships with leading institutions across three continents, bringing quality education to more learners worldwide.",
                image: "/modern-university-campus.png",
                date: "March 15, 2024",
                slug: "expanding-global-reach",
                borderColor: "#0a76b9", // Changed to hex value for style attribute
              },
              {
                id: 2,
                title: "Innovation in Online Learning",
                excerpt:
                  "Launching cutting-edge virtual learning platforms that combine AI-powered personalization with interactive collaborative tools.",
                image: "/students-using-laptops-in-classroom.jpg",
                date: "March 10, 2024",
                slug: "innovation-online-learning",
                borderColor: "#fec909", // Changed to hex value
              },
              {
                id: 3,
                title: "Sustainability Initiatives",
                excerpt:
                  "Our commitment to creating environmentally responsible campuses across the UK and Ireland with new green building certifications.",
                image: "/green-sustainable-building.jpg",
                date: "March 5, 2024",
                slug: "sustainability-initiatives",
                borderColor: "#25a048", // Changed to hex value
              },
              {
                id: 4,
                title: "Industry Partnerships",
                excerpt:
                  "Forging strategic alliances with Fortune 500 companies to create direct pathways from education to employment for our learners.",
                image: "/business-handshake-partnership.png",
                date: "February 28, 2024",
                slug: "industry-partnerships",
                borderColor: "#033351", // Changed to hex value
              },
            ].map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="block h-full"
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden hover-lift group h-full flex flex-col shadow-md hover:shadow-xl transition-shadow"
                    style={{ border: `6px solid ${article.borderColor}` }}
                  >
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8 flex-1 flex flex-col text-center">
                      <p className="text-sm text-gray-500 mb-3">
                        {article.date}
                      </p>
                      <h3
                        className={`text-2xl font-bold mb-3 text-[#033351] group-hover:text-[#0a76b9] transition-colors`}
                      >
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-center text-[#0a76b9] group-hover:text-[#033351] transition-colors">
                        <span className="font-semibold">Read More</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="pt-6">
            <Link href="/insights">
              <motion.button
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-base md:text-lg px-10 md:px-12 py-4 md:py-6 font-bold bg-[#0a76b9] hover:bg-[#085a8f] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(10,118,185,0.5)] border-2 border-[#0a76b9] hover:border-[#085a8f] inline-flex items-center gap-3"
              >
                View All Insights
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </main>
  );
}
