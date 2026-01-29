"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedHeading } from "@/components/animated-heading"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Heart, Globe2, Award, Shield, BookOpen, TrendingUp } from "lucide-react"

export default function InsightsPage() {
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
          {/* Video Wrapper */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="relative aspect-video">
                {/* Border */}
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                {/* Video Container */}
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/News-IpFQsqycTLcWX7ikNSyUkvCqTXU1Ha.mp4"
                  />
                </div>
                {/* Animated Circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -top-6 lg:-top-8 left-[15%] w-20 h-20 lg:w-28 lg:h-28 bg-[#fec909] rounded-full opacity-90 shadow-xl" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute -bottom-4 lg:-bottom-6 right-[10%] w-16 h-16 lg:w-24 lg:h-24 bg-[#25a048] rounded-full opacity-85 shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute top-[20%] -right-3 lg:-right-4 w-14 h-14 lg:w-20 lg:h-20 bg-[#0a76b9] rounded-full opacity-80 shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <AnimatedSection className="text-center space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#0a76b9] via-[#25a048] to-[#0a76b9] bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">
              Shaping Education Through Knowledge, Innovation and Meaningful Change
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl mx-auto text-pretty">
              Explore the latest updates, thought leadership and impact stories from across PEN Group as we work with
              partners, institutions and communities to advance global education.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#news">
              <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-semibold bg-[#0a76b9] hover:bg-[#0a76b9]/90 text-white border-2 border-[#0a76b9] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Latest Insights
                </Button>
              </motion.div>
            </a>
            <a href="#impact">
              <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-semibold bg-[#25a048] hover:bg-[#25a048]/90 text-white border-2 border-[#25a048] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Discover Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </a>
          </div>
        </div>
      </section>

      <SectionWrapper bgColor="light" id="news">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              News & Announcements
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              Stay informed about the latest news and developments from PEN Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {[
              {
                id: 1,
                title: "New Strategic Partnerships Announced",
                excerpt:
                  "PEN Group has established groundbreaking collaborations with leading educational institutions across Europe and Asia to enhance global learning opportunities.",
                image: "/modern-university-campus.png",
                date: "March 20, 2024",
                slug: "new-strategic-partnerships",
                borderColor: "#0a76b9",
              },
              {
                id: 2,
                title: "Digital Transformation in Education",
                excerpt:
                  "Our innovative learning platforms are revolutionizing the educational experience, integrating advanced technology to support diverse learning styles worldwide.",
                image: "/students-using-laptops-in-classroom.jpg",
                date: "March 15, 2024",
                slug: "digital-transformation",
                borderColor: "#fec909",
              },
              {
                id: 3,
                title: "Expanding Access to Higher Education",
                excerpt:
                  "New scholarship programmes and accessibility initiatives are opening doors for thousands of students from underrepresented communities across the globe.",
                image: "/green-sustainable-building.jpg",
                date: "March 10, 2024",
                slug: "expanding-access",
                borderColor: "#25a048",
              },
              {
                id: 4,
                title: "Industry-Academia Collaboration",
                excerpt:
                  "Leading corporations partner with PEN Group institutions to create innovative programmes that bridge the gap between academic learning and career readiness.",
                image: "/business-handshake-partnership.png",
                date: "March 5, 2024",
                slug: "industry-collaboration",
                borderColor: "#033351",
              },
            ].map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Link href={`/insights/${article.slug}`} className="block h-full">
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
                      <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                      <h3 className="text-2xl font-bold mb-3 text-[#033351] group-hover:text-[#0a76b9] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed flex-1">{article.excerpt}</p>
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
        </div>
      </SectionWrapper>

      <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden" id="impact">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/building-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-[#033351] opacity-90 z-[1]" />
        <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-12 relative z-10">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Social Impact
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN Group invests in widening participation, community engagement and global education initiatives,
              ensuring that education serves as a catalyst for positive societal change. Our social impact agenda
              focuses on building long-term, meaningful contributions to the communities we serve by promoting inclusive
              access, supporting lifelong learning, and strengthening global educational ecosystems. Our social impact
              work is guided by clear priority areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Widening Access to Education",
                description:
                  "Creating pathways that support learners from diverse backgrounds, ensuring education remains accessible, inclusive and transformative.",
                icon: Globe2,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
                delay: 0.1,
              },
              {
                title: "Community Engagement & Partnerships",
                description:
                  "Collaborating with local organisations, charities and community groups to deliver meaningful educational outreach and lifelong learning opportunities.",
                icon: Users,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
                delay: 0.2,
              },
              {
                title: "Global Citizenship & Responsibility",
                description:
                  "Encouraging cultural understanding, social responsibility and positive global engagement across all institutions and programmes.",
                icon: Award,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
                delay: 0.3,
              },
              {
                title: "Supporting Underrepresented Learners",
                description:
                  "Providing targeted support, guidance and resources to individuals and communities who face barriers to accessing higher education.",
                icon: Heart,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-white rounded-xl p-8 border-6 ${item.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4`}
              >
                <item.icon className={`h-16 w-16 ${item.iconColor}`} />
                <h3 className="text-xl font-bold text-[#033351]">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper bgColor="white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Academic Quality & Compliance
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              Our institutions maintain rigorous academic standards supported by internal and external regulation,
              ensuring that every programme delivered across the Group meets the highest expectations of quality,
              credibility and learner experience. Through continuous improvement, transparent governance and
              evidence-based academic practice, we uphold a culture where excellence is both expected and actively
              nurtured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Robust Quality Assurance Frameworks",
                description:
                  "Regular monitoring, evaluation and review processes that safeguard the integrity and credibility of all programmes.",
                icon: Shield,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
                delay: 0.1,
              },
              {
                title: "Regulatory Alignment",
                description:
                  "Adherence to national and international regulatory requirements to ensure full compliance and high institutional standards.",
                icon: BookOpen,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
                delay: 0.2,
              },
              {
                title: "Consistent Teaching Excellence",
                description:
                  "Commitment to delivering high-quality teaching supported by continuous staff development, innovation and reflective academic practice.",
                icon: Award,
                borderColor: "border-[#25a048]",
                iconColor: "text-[#25a048]",
                delay: 0.3,
              },
              {
                title: "Transparent Governance & Reporting",
                description:
                  "Clear oversight structures that promote accountability, data accuracy and evidence-based decision making across all institutions.",
                icon: TrendingUp,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-white rounded-xl p-8 border-6 ${item.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4`}
              >
                <item.icon className={`h-16 w-16 ${item.iconColor}`} />
                <h3 className="text-xl font-bold text-[#033351]">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
