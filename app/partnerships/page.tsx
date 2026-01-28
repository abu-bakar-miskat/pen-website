import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedHeading } from "@/components/animated-heading"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingUp, Globe2, GraduationCap, Award, Target } from "lucide-react"

export default function PartnershipsPage() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper bgColor="navy" parchment className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance">
            Building Strong Partnerships for a Global Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
            PEN Group works hand-in-hand with universities, colleges, governments, agents and corporate organisations to
            create sustainable, future-focused and high-quality education pathways that benefit learners and communities
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#academic">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
                Explore Partnerships
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-semibold border-2 border-white text-white hover:bg-white hover:text-[#033351] bg-transparent"
              >
                Contact Partnership Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Academic Partnerships */}
      <SectionWrapper bgColor="light" parchment id="academic">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Academic Partnerships – Strengthening Education Through Collaboration
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              We work with universities to build long-term, high-impact academic partnerships that enhance access,
              quality and global reach. Our collaborative approach ensures that institutions are supported academically,
              operationally and strategically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Programme Delivery Support",
                icon: GraduationCap,
                description:
                  "We help universities deliver programmes through local, regional and international campuses, ensuring consistency, compliance and academic excellence.",
              },
              {
                title: "Curriculum Co-Development",
                icon: Target,
                description:
                  "Our teams collaborate with academic leaders to design industry-aligned, future-focused curricula that respond to evolving learner and employer needs.",
              },
              {
                title: "Teaching Quality & Student Support",
                icon: Award,
                description:
                  "We work alongside institutions to strengthen teaching standards, enhance student services, and elevate the overall academic experience.",
              },
              {
                title: "Global Recruitment Expansion",
                icon: Globe2,
                description:
                  "Through our extensive recruitment networks and international platforms, we support universities in diversifying and expanding their global student base.",
              },
              {
                title: "Strategic Growth & Market Positioning",
                icon: TrendingUp,
                description:
                  "We provide insights, operational support and market intelligence to help institutions explore new regions, grow their footprint and strengthen competitive advantage.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white border-2 hover:shadow-xl transition-all duration-300 group">
                <item.icon className="h-10 w-10 text-[#0a76b9] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Franchise & Campus Partnerships */}
      <SectionWrapper bgColor="blue">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black">
              Franchise & Campus Partnerships – Expanding Institutional Reach
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN collaborates with universities and colleges to establish high-quality, fully supported franchise and
              campus partnership models that enable sustainable growth and regional expansion. Our approach combines
              academic integrity, operational strength and strategic insight to ensure successful delivery across all
              partner locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Campus Establishment & Expansion",
                description:
                  "We support institutions in setting up new campuses across the UK, Ireland and Europe, ensuring full compliance with academic, operational and regulatory requirements.",
              },
              {
                title: "Flexible Delivery Models",
                description:
                  "PEN offers multiple partnership structures — including franchise, validated, and co-branded models — allowing institutions to select the most suitable pathway for their aspirations and markets.",
              },
              {
                title: "Operational Excellence & Quality Oversight",
                description:
                  "Our teams provide on-the-ground support for teaching delivery, staffing, quality assurance, student services and campus administration, ensuring consistency and excellence.",
              },
              {
                title: "Regulatory Alignment & Risk Mitigation",
                description:
                  "We guide universities through complex regulatory landscapes, helping institutions reduce risk, safeguard reputation and ensure compliant delivery across all sites.",
              },
              {
                title: "Market Positioning & Regional Strategy",
                description:
                  "PEN helps institutions strengthen their presence in new and emerging markets through market intelligence, recruitment support and tailored regional strategies.",
              },
              {
                title: "Strengthening Academic Identity",
                description:
                  "Our co-branded models promote institutional identity while benefitting from PEN's infrastructure, enabling partners to enhance brand recognition and academic visibility.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Training */}
      <SectionWrapper bgColor="green">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black">
              Corporate Training & Executive Education – Developing Future-Ready Leaders
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN delivers tailored executive education and professional development solutions designed to support
              organisations, government bodies and industry partners in strengthening workforce capability and
              leadership excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Leadership & Management Development",
                description:
                  "We design programmes that enhance leadership effectiveness, strategic thinking and organisational performance at all levels.",
              },
              {
                title: "Digital Transformation & Technology Skills",
                description:
                  "Our training equips teams with the digital competencies needed to navigate innovation, automation and evolving technological landscapes.",
              },
              {
                title: "Health & Social Care Workforce Training",
                description:
                  "We support public and private sector organisations with specialist programmes that develop compassionate, skilled and regulation-aligned care professionals.",
              },
              {
                title: "Business, Marketing & Financial Training",
                description:
                  "Our industry-informed courses help organisations strengthen commercial awareness, marketing capability and financial literacy across teams.",
              },
              {
                title: "Creative & Innovation-Focused Programmes",
                description:
                  "We deliver training for teams working within creative sectors, supporting skills in design thinking, communication, media and digital creativity.",
              },
              {
                title: "Bespoke Corporate Solutions",
                description:
                  "All programmes can be customised to meet organisational needs, enabling partners to address skills gaps, support staff progression and drive measurable impact.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Agent Partnerships */}
      <SectionWrapper bgColor="yellow">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Agent & Recruitment Partnerships – Expanding Global Access to Education
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto text-pretty">
              PEN Group works with a trusted global network of education agents, recruitment partners and advisory
              organisations, ensuring ethical, transparent and high-quality student recruitment pathways across
              international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Comprehensive Agent Training & Compliance Support",
                description:
                  "We provide structured onboarding, training resources and compliance frameworks to help agents operate with integrity, accuracy and sector-aligned best practices.",
              },
              {
                title: "Marketing & Recruitment Enablement",
                description:
                  "Partners receive access to up-to-date marketing materials, digital assets, campaign support and programme information to enhance recruitment capabilities.",
              },
              {
                title: "Access to Multiple Institutions & Programmes",
                description:
                  "Agents benefit from a diversified portfolio of universities, colleges and online platforms, enabling them to match students to appropriate academic pathways.",
              },
              {
                title: "Dedicated Account Management Teams",
                description:
                  "Our regional account managers provide ongoing support, communication and performance insights to ensure strong partnerships and effective recruitment outcomes.",
              },
              {
                title: "Ethical Recruitment & Student Welfare Focus",
                description:
                  "We emphasise transparent, student-first recruitment practices, ensuring learners receive accurate guidance, responsible counselling and a positive admissions journey.",
              },
              {
                title: "Global Market Expertise",
                description:
                  "PEN supplies partners with regional insights, market trends and strategic advice to help them expand responsibly and strengthen their competitive position.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white border-2 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* University Centre Model */}
      <SectionWrapper bgColor="white" parchment>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              University Centre Model (UCM) – A Smarter Way to Expand University Presence
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              The University Centre Model (UCM) offers universities a sustainable, compliant and low-risk alternative to
              traditional franchise arrangements. Instead of outsourcing delivery, the UCM allows institutions to
              establish a university-owned subsidiary supported by PEN Group through a structured Service Level
              Agreement (SLA). This approach enhances academic control, governance, financial transparency and long-term
              institutional reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "What the UCM Enables",
                description:
                  "The UCM enables universities to establish a fully university-controlled branch campus model with direct oversight of academic delivery, staffing and quality assurance. It provides clear and auditable financial structures that support predictable growth while reducing exposure to risks associated with franchised provision. The model is flexible, enabling activities such as professional training and community engagement, ensuring alignment with long-term institutional strategies.",
                color: "bg-[#0a76b9]",
              },
              {
                title: "Strategic Value",
                description:
                  "The UCM strengthens widening participation, supports civic engagement, and extends educational opportunities within target communities. It aligns with Access & Participation priorities and contributes to core student enrollment growth whilst fostering meaningful local impact.",
                color: "bg-[#25a048]",
              },
              {
                title: "Economic Strengths",
                description:
                  "The UCM offers greater planning stability than traditional franchise arrangements. It features transparent financial pathways and a shared-surplus approach where growth benefits reinvestment, reducing vulnerability to regulatory or market pressures.",
                color: "bg-[#033351]",
              },
              {
                title: "Commercial Advantages",
                description:
                  "The UCM strengthens institutional identity and brand visibility. It opens opportunities to broaden academic portfolios and develop workforce-aligned programmes with flexible campus space use for teaching, professional training and community engagement.",
                color: "bg-[#fec909]",
              },
              {
                title: "Financial Efficiency",
                description:
                  "The model reduces upfront financial exposure by leveraging the Educational Service Provider (ESP), which funds infrastructure, staffing and key operational elements. Conservative modelling demonstrates early operational stability with strong potential for long-term growth.",
                color: "bg-[#0a76b9]",
              },
              {
                title: "Governance & Delivery Assurance",
                description:
                  "Governance within the UCM is supported by a structured Service Level Agreement (SLA) that clearly defines responsibilities, quality expectations and performance indicators. Embedded oversight mechanisms ensure alignment with OfS requirements and national regulations, with student outcomes and data management fully integrated into university systems.",
                color: "bg-[#25a048]",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`p-8 ${item.color} text-white border-0 hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className={`leading-relaxed ${item.color === "bg-[#fec909]" ? "text-gray-900" : "text-white/90"}`}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-[#0a76b9] hover:bg-[#0a76b9]/90 text-lg px-8 py-6 font-semibold">
                Discuss Partnership Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
