"use client"

import React from "react"

import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedHeading } from "@/components/animated-heading"
import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, ArrowRight, Globe } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function NetworksPage() {
  const academicInstitutions = [
    {
      name: "Elizabeth School of London",
      description:
        "Elizabeth School of London is a multi-campus higher education institution with locations across London, Birmingham, Manchester, Leeds, Leicester and Northampton. It delivers a wide range of undergraduate programmes in Business, Computing, Health & Social Care Management and related fields. ESL is known for its strong student-support ecosystem, flexible study routes, foundation-year pathways and a commitment to widening participation. Its campuses provide modern facilities, academic support services, wellbeing services, and career-focused learning environments.",
      website: "https://www.esl.ac.uk",
      locations: "London, Birmingham, Manchester, Leeds, Leicester, Northampton",
      logo: "/logos/esl-master-logo.svg",
    },
    {
      name: "Victoria College of Arts and Design",
      description:
        "VCAD is a specialist creative-arts institution offering programmes in Fashion Design, Fashion Media, Graphic Design, Digital Marketing, and other creative disciplines. With campuses in London and Manchester, VCAD blends technical training with industry-informed practice. Students benefit from hands-on studio work, creative industry links, expert tutors, and opportunities to build professional portfolios through projects and collaborations.",
      website: "https://www.vcad.ac.uk",
      locations: "London & Manchester",
      logo: "/logos/vcad-master-logo.svg",
    },
    {
      name: "William College",
      description:
        "William College delivers programmes in Law, Psychology, Criminology and Policing. With a strong focus on ethical practice, employability and professional development, the college prepares students for frontline, community-facing and policy-driven careers. Its teaching model integrates academic theory with real-world case studies, critical thinking, and skills training aligned with the justice and social science sectors.",
      website: "https://www.williamcollege.com",
      locations: "UK",
      logo: "/logos/wc-master-logo.jpg",
    },
    {
      name: "London Professional College (LPC)",
      description:
        "Located in Canary Wharf, LPC offers nationally recognised qualifications and higher-level skills programmes in business, management, leadership and professional disciplines. It serves both UK and international learners through flexible delivery, industry-aligned curricula and experienced academic staff. LPC places particular focus on workforce relevance and employer engagement.",
      website: "https://www.lpc.ac.uk",
      locations: "Canary Wharf, London",
      logo: "/logos/lpc-master-logo.png", // updated to PNG logo
    },
    {
      name: "Zenith Academy of Healthcare Studies (ZAHS)",
      description:
        "Zenith Academy of Healthcare Studies specialises in Health and Social Care education and professional development. The academy supports the development of future healthcare workers through practical skills training, sector-aligned curricula, and pathways into employment within care, clinical support and community-health settings.",
      website: "https://www.zahs.co.uk",
      locations: "UK",
      logo: "/logos/zenith-master-logo.png", // updated to PNG logo
    },
    {
      name: "City Education Group (Ireland)",
      description:
        "City Education Group is a major Dublin-based education provider consisting of multiple institutions including City Colleges, Ashfield College, Progressive College and City Language School. It delivers programmes across higher education, secondary education, professional training and English language education. As part of PEN's international portfolio, it strengthens the Group's presence within the EU education landscape.",
      website: "https://www.cityeducationgroup.ie",
      locations: "Dublin, Ireland",
      logo: "/logos/city-education-group.png", // updated to PNG logo
    },
    {
      name: "EducateU (Online Qualifications)",
      description:
        "EducateU is PEN's online learning platform offering CPD courses, professional certificates, Level 7 diplomas and pathways that support career progression and lifelong learning. The platform provides flexible, self-paced study options across subjects such as business, technology, compliance, leadership, health & safety, and professional skills — enabling learners to upskill from anywhere in the world.",
      website: "https://www.educateu.com",
      locations: "Online - Global",
      logo: "/logos/educate-u-master-logo.png", // updated to reference the EducateU master logo with compass design
    },
    {
      name: "City Language School",
      description:
        "City Language School in Dublin offers high-quality English language education and professional communication training designed to support learners, professionals, and organisations in achieving strong global communication skills. With experienced tutors, modern teaching methods, and a culturally diverse learning environment, the school helps students build confidence, fluency, and workplace-ready language abilities suitable for academic, personal, and professional success.",
      website: "https://citylanguageschool.co.uk",
      locations: "Dublin, Ireland",
      logo: "/logos/cls-master-logo.png", // updated to PNG logo
    },
  ]

  const educationServices = [
    {
      name: "Horizon Educational Services",
      description:
        "Horizon Educational Services provides comprehensive academic and operational support to universities and colleges across the UK. Its remit spans academic delivery assistance, institutional partnership coordination, campus-level operations management, and the implementation of quality-driven teaching practices. Horizon works closely with leadership teams, academic staff and administrative departments to streamline workflows, enhance regulatory compliance and strengthen the overall student journey. With a focus on consistency, excellence and scalability, Horizon enables institutions to expand their provision confidently while maintaining high academic standards.",
      website: "https://www.horizoneduservices.com",
    },
    {
      name: "Spectrum Educational Services",
      description:
        "Spectrum Educational Services supports higher education institutions in delivering programmes that are academically robust, operationally sound and fully aligned with regulatory expectations. Its services include academic partnership implementation, programme delivery oversight, curriculum coordination, internal quality auditing, and staff development planning. Spectrum also assists partner institutions in navigating complex compliance landscapes, ensuring readiness for external reviews, inspections and regulatory reporting. Through its structured processes and collaborative approach, Spectrum helps institutions uphold teaching excellence while enabling sustainable growth.",
      website: "https://www.spectrumeduservices.com",
    },
    {
      name: "Pinnacle Educational Services",
      description:
        "Pinnacle Educational Services provides end-to-end operational, academic and administrative support to universities and colleges, helping them manage their delivery sites efficiently and effectively. Pinnacle's work includes curriculum coordination, student-support infrastructure development, timetabling and resource planning, administrative process management, and continuous quality monitoring. The organisation plays a vital role in ensuring that both students and staff benefit from well-structured, reliable and professional campus operations. Through its attention to detail and commitment to service excellence, Pinnacle strengthens institutional performance and enhances the learner experience across all partner locations.",
      website: "https://www.pinnacleeduservices.com",
    },
    {
      name: "Zeta System of Smartlearning (ZSOS)",
      description:
        "Zeta System of Smartlearning is a UK-based student recruitment and advisory organisation supporting home students across the country. ZSOS provides end-to-end guidance, from course and institution selection to application support and enrolment, with a strong focus on compliance, clear communication and student welfare. The team works closely with partner colleges and universities to ensure that learners are placed on suitable, career-focused programmes. ZSOS also maintains long-term engagement with learners, ensuring they receive ongoing support and progression advice throughout their academic journey.",
      website: "https://www.zsos.co.uk",
    },
    {
      name: "Trusted EduPath",
      description:
        "Trusted EduPath is a UK-focused student advisory and recruitment service dedicated to supporting individuals who are returning to education or seeking career progression through higher-level study. The organisation offers personalised pathway guidance, programme matching, application support, and ongoing student care. Trusted EduPath works closely with partner institutions to ensure applicants are placed into courses that reflect their goals, strengths and long-term aspirations. Through its community-driven outreach approach and strong compliance framework, Trusted EduPath plays a key role in widening participation and connecting learners to meaningful academic opportunities.",
      website: "https://www.trustededupath.co.uk",
    },
    {
      name: "UniWay Connect",
      description:
        "UniWay Connect provides tailored admissions and recruitment support to UK-based learners exploring higher education options. Its team offers one-to-one consultations, course recommendations, document preparation assistance and full application management. UniWay Connect focuses on clarity, accessibility and informed decision-making, ensuring that students understand their progression routes and entry requirements. Through strong institutional partnerships and student-centred service delivery, UniWay Connect helps learners transition smoothly into higher education environments.",
      website: "https://www.uniwayconnect.co.uk",
    },
    {
      name: "UniTalent Network",
      description:
        "UniTalent Network supports learners across the UK by providing structured outreach, recruitment services and admissions guidance. Specialising in fields such as business, computing, health, social care and the creative industries, UniTalent delivers a guided approach to programme selection and application processes. The team hosts recruitment events, information sessions and personalised consultations to help prospective students make confident educational choices. With a focus on quality, integrity and clear communication, UniTalent Network enhances student access to reputable higher education pathways.",
      website: "https://www.unitalentnetwork.co.uk",
    },
    {
      name: "Go Uniway",
      description:
        "Go Uniway supports adult learners and career-driven individuals across the UK by offering comprehensive guidance on returning to education. Through personalised consultations and community-engagement initiatives, Go Uniway helps learners identify suitable programmes aligned with their professional goals. The team handles course matching, application support and document preparation, ensuring a seamless transition into higher education. With its supportive, approachable and learner-centred ethos, Go Uniway empowers individuals to take the next step in their academic and professional journeys.",
      website: "https://www.gouniway.co.uk",
    },
    {
      name: "Univive (International – B2B)",
      description:
        "Univive is PEN Group's international recruitment, admissions and global partnerships platform, designed to support education agents and institutions worldwide. Through structured frameworks, compliance-led processes and dedicated training resources, Univive enables partners to recruit ethically, efficiently and at scale. The platform connects agents to multiple universities and colleges while offering ongoing operational support, marketing assets, and admissions processing. Univive strengthens global access to education by simplifying recruitment pathways and fostering transparent, reliable partnerships across international markets.",
      website: "https://www.univive.com",
    },
    {
      name: "UniAptix (International – B2C)",
      description:
        "UniAptix is a direct-to-student global admissions service that provides personalised support to international learners seeking higher education opportunities abroad. The platform assists students with every stage of the process, from programme selection and academic counselling to application submission, documentation review and visa support. UniAptix prioritises accessibility, cultural understanding and student wellbeing, ensuring that learners receive clear guidance and realistic pathway options. Its user-friendly approach empowers students to navigate international education systems confidently and successfully.",
      website: "https://www.uniaptix.com",
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
                <div className="absolute inset-0 rounded-[48px] border-[16px] lg:border-[20px] border-[#0a76b9] z-20" />
                <div className="absolute inset-[16px] lg:inset-[20px] rounded-[32px] lg:rounded-[28px] overflow-hidden shadow-2xl bg-gray-200 z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/images/networks.mp4"
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
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-black"
              style={{
                background: "linear-gradient(90deg, #0a76b9 0%, #25a048 50%, #fec909 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}
            >
              Connecting Institutions. Empowering Learners. Transforming Education.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl mx-auto text-pretty">
              PEN Group's ecosystem brings together leading institutions, service partners and innovation platforms to
              create a unified global network focused on excellence, access and meaningful educational impact.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#institutions">
              <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-semibold bg-[#0a76b9] hover:bg-[#0a76b9]/90 text-white border-2 border-[#0a76b9] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Our Institutions
                </Button>
              </motion.div>
            </a>
            <Link href="/partnerships">
              <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-semibold bg-[#25a048] hover:bg-[#25a048]/90 text-white border-2 border-[#25a048] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Partnerships
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Institutions */}
      <SectionWrapper bgColor="white" id="institutions">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Academic Institutions
            </AnimatedHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicInstitutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className="p-8 bg-white border-4 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  style={{
                    borderColor: ["#0a76b9", "#fec909", "#25a048", "#0a76b9"][index % 4],
                  }}
                >
                  <div className="mb-6 flex items-center justify-center h-32">
                    <Image
                      src={institution.logo || "/placeholder.svg"}
                      alt={`${institution.name} logo`}
                      width={280}
                      height={112}
                      className="object-contain max-h-full w-auto"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-[#033351]">{institution.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{institution.description}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">{institution.locations}</span>
                    </div>
                    <a href={institution.website} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 border-2 hover:bg-[#0a76b9] hover:text-white transition-colors bg-transparent"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Education Services & Support */}
      <SectionWrapper bgColor="grey">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Education Services & Support
            </AnimatedHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className="p-6 bg-white border-4 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  style={{
                    borderColor: ["#0a76b9", "#fec909", "#25a048"][index % 3],
                  }}
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-[#033351]">{service.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    {service.website && (
                      <a href={service.website} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 border-2 hover:bg-[#25a048] hover:text-white transition-colors bg-transparent"
                        >
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* International Operations */}
      <SectionWrapper bgColor="grey">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              International Operations – Where We Grow and Collaborate
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN Group operates across multiple regions, strengthening global access to education through strategic
              partnerships, support centres and international campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ireland – Expanding Academic Excellence",
                description:
                  "City Education Group, headquartered in Dublin, operates multiple institutions including City Colleges, Ashfield College, Progressive College and City Language School. The Group delivers higher education, secondary education, professional training and English language courses, strengthening PEN's presence within the EU education landscape.",
                icon: Globe,
                borderColor: "border-[#25a048]",
                iconColor: "text-[#25a048]",
              },
              {
                title: "Dubai – Innova Institute Partnership",
                description:
                  "PEN Group partners with Innova Institute in Dubai to deliver UK-aligned academic programmes to students in the Middle East. This collaboration enables access to internationally recognised qualifications while fostering regional education capacity.",
                icon: Globe,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
              },
              {
                title: "Switzerland – StedVarn Partnership",
                description:
                  "Through its partnership with StedVarn in Switzerland, PEN Group facilitates access to transnational education, academic mobility and quality-assured programme delivery for learners seeking UK higher education credentials.",
                icon: Globe,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
              },
              {
                title: "Emerging Markets – Malta, Spain, Italy, France",
                description:
                  "PEN Group is actively exploring and developing strategic partnerships across Mediterranean and Southern European education markets. These emerging relationships aim to: Enhance transnational education (TNE) provision across the region. Enable collaborative programme delivery between UK institutions and local partners. Expand access to UK-recognised qualifications for learners in these territories. Support internationalisation strategies for partner institutions. Facilitate student and staff mobility initiatives.",
                icon: Globe,
                borderColor: "border-[#25a048]",
                iconColor: "text-[#25a048]",
              },
              {
                title: "India – Univive and UniAptix Operations",
                description:
                  "PEN Group maintains operational presence in India through Univive and UniAptix. Univive serves as a business-to-business (B2B) platform supporting global education agents, while UniAptix operates as a direct-to-consumer (B2C) admissions service for individual learners. Both platforms enable ethical, transparent and efficient international student recruitment aligned with UK regulatory frameworks.",
                icon: Globe,
                borderColor: "border-[#0a76b9]",
                iconColor: "text-[#0a76b9]",
              },
              {
                title: "Bangladesh – PEN Global Support Office",
                description:
                  "PEN Global operates a support office in Bangladesh, providing administrative, operational and compliance assistance for international student recruitment and global partnership coordination. The office facilitates communication, application processing and quality assurance across PEN's international operations.",
                icon: Globe,
                borderColor: "border-[#fec909]",
                iconColor: "text-[#fec909]",
              },
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className={`p-8 bg-white border-2 ${region.borderColor} hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-${region.iconColor.replace("text-", "")}/10 flex items-center justify-center flex-shrink-0`}
                    >
                      {React.createElement(region.icon, { className: `${region.iconColor} h-8 w-8` })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{region.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{region.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
