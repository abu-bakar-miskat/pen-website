"use client"

import type React from "react"

import { SectionWrapper } from "@/components/section-wrapper"
import { AnimatedHeading } from "@/components/animated-heading"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Mail, MapPin, Send, Building2, Users, Newspaper } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    enquiryType: "general",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your enquiry. We will be in touch soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main>
      {/* Hero Section with Contact Form */}
      <SectionWrapper bgColor="blue" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              We welcome enquiries from prospective partners, institutions, corporates, agents, investors and
              candidates.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900 font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-2 border-gray-200 focus:border-[#0a76b9]"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-2 border-gray-200 focus:border-[#0a76b9]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-gray-900 font-semibold">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-white border-2 border-gray-200 focus:border-[#0a76b9]"
                    placeholder="Your Institution or Company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enquiryType" className="text-gray-900 font-semibold">
                    Enquiry Type *
                  </Label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 py-2 border-2 border-gray-200 rounded-md bg-white focus:border-[#0a76b9] focus:outline-none"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="partnership">Partnership Enquiry</option>
                    <option value="academic">Academic Collaboration</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="agent">Agent Partnership</option>
                    <option value="media">Media & Press</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-900 font-semibold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white border-2 border-gray-200 focus:border-[#0a76b9] resize-none"
                  placeholder="Please provide details about your enquiry..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto bg-[#0a76b9] hover:bg-[#0a76b9]/90 text-lg px-12 py-6 font-semibold"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </SectionWrapper>

      {/* Contact Details */}
      <SectionWrapper bgColor="light" parchment>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black text-[#033351]">
              Contact Information
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-pretty">
              Connect with us directly through the appropriate channel for your enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0a76b9] to-[#25a048] flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">General Enquiries</h3>
              <a
                href="mailto:hello@pengroup.com"
                className="text-[#0a76b9] hover:text-[#25a048] font-medium transition-colors"
              >
                hello@pengroup.com
              </a>
            </Card>

            <Card className="p-8 bg-white border-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#25a048] to-[#0a76b9] flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Corporate & Partnership Enquiries</h3>
              <a
                href="mailto:partnerships@pengroup.com"
                className="text-[#0a76b9] hover:text-[#25a048] font-medium transition-colors"
              >
                partnerships@pengroup.com
              </a>
            </Card>

            <Card className="p-8 bg-white border-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#fec909] to-[#0a76b9] flex items-center justify-center">
                <Newspaper className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Media and Press Enquiries</h3>
              <a
                href="mailto:press@pengroup.com"
                className="text-[#0a76b9] hover:text-[#25a048] font-medium transition-colors"
              >
                press@pengroup.com
              </a>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Head Office */}
      <SectionWrapper bgColor="navy" parchment>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-black">Head Office</AnimatedHeading>

          <Card className="p-12 bg-white/5 backdrop-blur-sm border-white/20">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-[#fec909]" />
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">PEN Group Headquarters</h3>
                <div className="flex items-start justify-center gap-3 text-white/90">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    Ground Floor Unit H1, Moorfoot House
                    <br />
                    Meridian Gate, 221 Marsh Wall
                    <br />
                    London E14 9FJ
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </main>
  )
}
