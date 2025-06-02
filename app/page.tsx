"use client"

import { useState, useEffect } from "react"
import { Construction } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { VisionSection } from "@/components/sections/vision-section"
import { TechnologySection } from "@/components/sections/technology-section"
import { FAQSection } from "@/components/sections/faq-section"
import { KashStakingCalculator } from "@/components/staking/kash-staking-calculator"
import { SITE_CONFIG, NEWS_ARTICLES, TEAM_MEMBERS, PARTNERS } from "@/lib/config"

// Import remaining sections that weren't refactored yet
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Mail,
  Globe,
  Twitter,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Icon mapping for dynamic icon rendering
const iconMap = {
  MessageCircle,
  Twitter,
  Github,
  Linkedin,
  FileText,
}

export default function BlockchainWebsite() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [redirectCountdown, setRedirectCountdown] = useState(3)
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  // Check for preview mode on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const preview = urlParams.get("preview")

    if (preview === "true") {
      setIsPreviewMode(true)
      setIsLoading(false)
    } else {
      // Construction mode - start countdown
      const countdownTimer = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownTimer)
            window.location.href = SITE_CONFIG.WHITEPAPER_URL
            return 0
          }
          return prev - 1
        })
      }, 1000)

      // Set loading to false after a brief moment to show construction message
      setTimeout(() => setIsLoading(false), 100)

      return () => clearInterval(countdownTimer)
    }
  }, [])

  // Auto-advance news carousel
  useEffect(() => {
    if (isPreviewMode) {
      const timer = setInterval(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % NEWS_ARTICLES.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isPreviewMode])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % NEWS_ARTICLES.length)
  }

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length)
  }

  // Show loading state initially
  if (isLoading) {
    return <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900"></div>
  }

  // Show construction mode if not in preview
  if (!isPreviewMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-yellow-900/80 to-amber-900/90" />

        <div className="text-center max-w-md mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Construction className="w-24 h-24 text-yellow-400 mx-auto mb-4 drop-shadow-lg" />
            <h1 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Website Under Construction
            </h1>
            <p className="text-amber-100 text-lg mb-6">
              We're working hard to bring you an amazing experience. Please check out our whitepaper in the meantime.
            </p>
            <div className="bg-gradient-to-br from-amber-800/80 to-yellow-800/80 rounded-lg p-4 mb-6 backdrop-blur-sm border border-amber-600/50">
              <p className="text-amber-200 text-sm mb-2">Redirecting to whitepaper in:</p>
              <div className="text-3xl font-bold text-yellow-300">{redirectCountdown}s</div>
            </div>
            <GradientButton onClick={() => (window.location.href = SITE_CONFIG.WHITEPAPER_URL)} variant="primary">
              <FileText className="w-4 h-4 mr-2" />
              View Whitepaper Now
            </GradientButton>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-600/20" />
      </div>

      <Navbar
        onScrollToSection={scrollToSection}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        showComingSoon={showComingSoon}
        setShowComingSoon={setShowComingSoon}
      />

      <HeroSection
        onExploreVision={() => scrollToSection("vision")}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      <AboutSection />
      <VisionSection />
      <TechnologySection />

      {/* Media Section - Not yet refactored */}
      <section id="media" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-yellow-800/40 to-amber-900/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              In the News
            </h2>
            <p className="text-amber-100 text-lg">Latest coverage and updates from leading media outlets</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-800/80 via-yellow-900/60 to-amber-800/80 border-amber-600/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={NEWS_ARTICLES[currentNewsIndex].image || "/placeholder.svg"}
                      alt={NEWS_ARTICLES[currentNewsIndex].title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/40">
                        {NEWS_ARTICLES[currentNewsIndex].source}
                      </Badge>
                      <span className="text-amber-300 text-sm">{NEWS_ARTICLES[currentNewsIndex].date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{NEWS_ARTICLES[currentNewsIndex].title}</h3>
                    <p className="text-amber-100 mb-4">{NEWS_ARTICLES[currentNewsIndex].excerpt}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-500/60 text-amber-200 bg-amber-800/30 hover:bg-amber-700/50 hover:text-white hover:border-amber-400/80 transition-all duration-200"
                      onClick={() => window.open(NEWS_ARTICLES[currentNewsIndex].link, "_blank")}
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={prevNews}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextNews}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {NEWS_ARTICLES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentNewsIndex
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg"
                      : "bg-amber-600/60 hover:bg-amber-500/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Not yet refactored */}
      <section id="team" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 via-yellow-900/30 to-amber-800/40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-amber-100 text-lg">
              Experienced leaders bridging traditional mining with blockchain innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-amber-800/80 via-yellow-900/60 to-amber-800/80 border-amber-600/50 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-400/50"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-yellow-300 mb-3 font-medium">{member.role}</p>
                  <p className="text-amber-100 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    {member.linkedin && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(member.linkedin, "_blank")}
                        className="text-amber-300 hover:text-yellow-300 hover:bg-amber-700/50 transition-all duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.twitter && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(member.twitter, "_blank")}
                        className="text-amber-300 hover:text-yellow-300 hover:bg-amber-700/50 transition-all duration-200"
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Partners Section - Not yet refactored */}
      <section id="partners" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 via-yellow-900/30 to-amber-800/40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Our Partners
            </h2>
            <p className="text-amber-100 text-lg">Trusted by leading organizations in the blockchain ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {PARTNERS.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Not yet refactored */}
      <footer id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-yellow-900/80 to-amber-900/90" />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold text-white">{SITE_CONFIG.PROJECT_NAME}</span>
              </div>
              <p className="text-amber-100 mb-4">
                Transforming real-world gold reserves into stable digital financial infrastructure through tokenization
                and DeFi integration.
              </p>
              <div className="flex space-x-4">
                {SITE_CONFIG.QUICK_LINKS.map((link, index) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap]
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(link.url, "_blank")}
                      className="text-amber-300 hover:text-white hover:bg-amber-800/50 transition-all duration-200"
                      title={link.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </Button>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <div className="space-y-2">
                <button
                  onClick={() => window.open(SITE_CONFIG.WHITEPAPER_URL, "_blank")}
                  className="block text-amber-200 hover:text-white transition-colors"
                >
                  Whitepaper
                </button>
                <button
                  onClick={() => window.open("https://docs.kash.finance", "_blank")}
                  className="block text-amber-200 hover:text-white transition-colors"
                >
                  Documentation
                </button>
                <button
                  onClick={() => window.open("https://github.com/kash-finance", "_blank")}
                  className="block text-amber-200 hover:text-white transition-colors"
                >
                  GitHub
                </button>
                <button
                  onClick={() => window.open("https://blog.kash.finance", "_blank")}
                  className="block text-amber-200 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-2">
                <Link
                  href={`mailto:${SITE_CONFIG.EMAIL}`}
                  className="flex items-center text-amber-200 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {SITE_CONFIG.EMAIL}
                </Link>
                <div className="flex items-center text-amber-200">
                  <Globe className="w-4 h-4 mr-2" />
                  {SITE_CONFIG.LOCATIONS}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-700/50 mt-8 pt-8 text-center text-amber-300">
            <p>&copy; 2025 {SITE_CONFIG.PROJECT_NAME} Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Staking Calculator Modal */}
      <KashStakingCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </div>
  )
}
