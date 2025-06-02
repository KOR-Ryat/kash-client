"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  FileText,
  Mail,
  Rocket,
  Globe,
  Twitter,
  Github,
  Linkedin,
  MessageCircle,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Lock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// ===== CONFIGURATION SECTION - EASY TO MODIFY =====
const NAVIGATION_LINKS = {
  WHITEPAPER_URL: "/whitepaper.pdf", // Change this to your actual whitepaper URL
  LAUNCH_APP_URL: "https://app.defichain.com", // Change this to your actual app URL
}

const QUICK_LINKS = [
  {
    name: "Discord",
    url: "https://discord.gg/defichain",
    icon: MessageCircle,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/defichain",
    icon: Twitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/defichain",
    icon: Github,
  },
  {
    name: "Telegram",
    url: "https://t.me/defichain",
    icon: MessageCircle,
  },
]
// ===== END CONFIGURATION SECTION =====

export default function BlockchainWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  // Check for preview mode on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const preview = urlParams.get("preview")

    if (preview === "true") {
      setIsPreviewMode(true)
    } else {
      // Construction mode by default - redirect to whitepaper
      window.location.href = NAVIGATION_LINKS.WHITEPAPER_URL
    }
  }, [])

  // Sample news articles - Replace with your actual news
  const newsArticles = [
    {
      title: "DeFiChain Secures $25M in Series B Funding",
      source: "CoinTelegraph",
      date: "Jan 15, 2025",
      image: "/placeholder.svg?height=200&width=300",
      excerpt:
        "Revolutionary DeFi protocol raises significant funding to expand cross-chain capabilities and enhance user security features.",
      link: "https://example.com/news1",
    },
    {
      title: "Major Exchange Integration Announced",
      source: "The Block",
      date: "Jan 10, 2025",
      image: "/placeholder.svg?height=200&width=300",
      excerpt:
        "Leading cryptocurrency exchange partners with DeFiChain to provide seamless trading and staking opportunities for users.",
      link: "https://example.com/news2",
    },
    {
      title: "Smart Contract Audit Completed Successfully",
      source: "Decrypt",
      date: "Jan 5, 2025",
      image: "/placeholder.svg?height=200&width=300",
      excerpt:
        "Top-tier security firm completes comprehensive audit, confirming protocol security and readiness for mainnet launch.",
      link: "https://example.com/news3",
    },
  ]

  // Team members - Replace with your actual team
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Former Ethereum Foundation researcher with PhD in Cryptography from Stanford. Led development of multiple DeFi protocols.",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Ex-Coinbase Principal Engineer with 8+ years building scalable blockchain infrastructure and smart contract systems.",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      twitter: "https://twitter.com/marcusrodriguez",
    },
    {
      name: "Dr. James Liu",
      role: "Head of Research",
      image: "/placeholder.svg?height=150&width=150",
      bio: "PhD in Computer Science from MIT. Published 20+ papers on consensus mechanisms and zero-knowledge proofs.",
      linkedin: "https://linkedin.com/in/jamesliu",
      twitter: "https://twitter.com/jamesliu",
    },
    {
      name: "Elena Petrov",
      role: "Head of Product",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Former Product Lead at Uniswap. Expert in DeFi UX design and protocol tokenomics with 6+ years experience.",
      linkedin: "https://linkedin.com/in/elenapetrov",
      twitter: "https://twitter.com/elenapetrov",
    },
  ]

  // Partners - Replace with your actual partners
  const partners = [
    { name: "Chainlink", logo: "/placeholder.svg?height=80&width=120", url: "https://chain.link" },
    { name: "Polygon", logo: "/placeholder.svg?height=80&width=120", url: "https://polygon.technology" },
    { name: "The Graph", logo: "/placeholder.svg?height=80&width=120", url: "https://thegraph.com" },
    { name: "OpenZeppelin", logo: "/placeholder.svg?height=80&width=120", url: "https://openzeppelin.com" },
    { name: "Consensys", logo: "/placeholder.svg?height=80&width=120", url: "https://consensys.net" },
    { name: "Alchemy", logo: "/placeholder.svg?height=80&width=120", url: "https://alchemy.com" },
  ]

  // Auto-advance news carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsArticles.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [newsArticles.length])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsArticles.length)
  }

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsArticles.length) % newsArticles.length)
  }

  // Don't render content if not in preview mode
  if (!isPreviewMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl">Redirecting to whitepaper...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Preview Mode Banner */}
      <div className="bg-blue-600 text-white p-2 text-center">
        <span className="font-semibold">👀 Preview Mode - Add ?preview=true to URL to access this content</span>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="text-xl font-bold">DeFiChain</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("hero")} className="hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("media")} className="hover:text-blue-400 transition-colors">
                Media
              </button>
              <button onClick={() => scrollToSection("team")} className="hover:text-blue-400 transition-colors">
                Team
              </button>
              <button onClick={() => scrollToSection("partners")} className="hover:text-blue-400 transition-colors">
                Partners
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(NAVIGATION_LINKS.WHITEPAPER_URL, "_blank")}
                className="border-slate-500 text-slate-200 bg-slate-800/50 hover:bg-slate-700 hover:text-white hover:border-slate-400 transition-all duration-200"
              >
                <FileText className="w-4 h-4 mr-2" />
                Whitepaper
              </Button>
              <Button
                size="sm"
                onClick={() => window.open(NAVIGATION_LINKS.LAUNCH_APP_URL, "_blank")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Launch App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection("hero")} className="block px-3 py-2 hover:bg-slate-700 rounded">
                  Home
                </button>
                <button onClick={() => scrollToSection("about")} className="block px-3 py-2 hover:bg-slate-700 rounded">
                  About
                </button>
                <button onClick={() => scrollToSection("media")} className="block px-3 py-2 hover:bg-slate-700 rounded">
                  Media
                </button>
                <button onClick={() => scrollToSection("team")} className="block px-3 py-2 hover:bg-slate-700 rounded">
                  Team
                </button>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="block px-3 py-2 hover:bg-slate-700 rounded"
                >
                  Partners
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 hover:bg-slate-700 rounded"
                >
                  Contact
                </button>
                <div className="pt-2 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(NAVIGATION_LINKS.WHITEPAPER_URL, "_blank")}
                    className="w-full border-slate-500 text-slate-200 bg-slate-800/50 hover:bg-slate-700 hover:text-white hover:border-slate-400"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Whitepaper
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(NAVIGATION_LINKS.LAUNCH_APP_URL, "_blank")}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Launch App
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Next-Generation DeFi Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DeFiChain
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              The next-generation cross-chain DeFi protocol enabling seamless asset transfers and yield optimization
              across multiple blockchains
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open(NAVIGATION_LINKS.LAUNCH_APP_URL, "_blank")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Launch Platform
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="border-slate-500 text-slate-200 bg-slate-800/50 hover:bg-slate-700 hover:text-white hover:border-slate-400 text-lg px-8 py-3 transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About DeFiChain</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              DeFiChain is revolutionizing decentralized finance by providing a secure, scalable, and user-friendly
              platform for cross-chain asset management and yield optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Security First</h3>
                <p className="text-slate-300">
                  Multi-layer security architecture with formal verification and comprehensive audits by leading
                  security firms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Lightning Fast</h3>
                <p className="text-slate-300">
                  Sub-second transaction finality with minimal gas fees through our innovative consensus mechanism.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Community Driven</h3>
                <p className="text-slate-300">
                  Governed by our community through a transparent DAO structure with on-chain voting mechanisms.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Cross-Chain Yield Farming</h4>
                    <p className="text-slate-300">
                      Optimize yields across multiple blockchains with automated rebalancing strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Secure Asset Bridging</h4>
                    <p className="text-slate-300">
                      Transfer assets seamlessly between chains with institutional-grade security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Instant Liquidity</h4>
                    <p className="text-slate-300">
                      Access deep liquidity pools with minimal slippage and competitive rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h4 className="text-2xl font-bold mb-4 text-white">Protocol Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">$2.5B+</div>
                  <div className="text-slate-300">Total Value Locked</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">150K+</div>
                  <div className="text-slate-300">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">15+</div>
                  <div className="text-slate-300">Supported Chains</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-1">99.9%</div>
                  <div className="text-slate-300">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">In the News</h2>
            <p className="text-slate-300 text-lg">Latest coverage and updates from leading media outlets</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={newsArticles[currentNewsIndex].image || "/placeholder.svg"}
                      alt={newsArticles[currentNewsIndex].title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {newsArticles[currentNewsIndex].source}
                      </Badge>
                      <span className="text-slate-400 text-sm">{newsArticles[currentNewsIndex].date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{newsArticles[currentNewsIndex].title}</h3>
                    <p className="text-slate-300 mb-4">{newsArticles[currentNewsIndex].excerpt}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-500 text-slate-200 bg-slate-800/50 hover:bg-slate-700 hover:text-white hover:border-slate-400 transition-all duration-200"
                      onClick={() => window.open(newsArticles[currentNewsIndex].link, "_blank")}
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-700 hover:bg-slate-600 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextNews}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-700 hover:bg-slate-600 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {newsArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentNewsIndex ? "bg-blue-500" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-slate-300 text-lg">Experienced leaders driving blockchain innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-slate-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    {member.linkedin && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(member.linkedin, "_blank")}
                        className="text-slate-400 hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.twitter && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(member.twitter, "_blank")}
                        className="text-slate-400 hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-200"
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

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-slate-300 text-lg">Trusted by leading organizations in the blockchain ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">DeFiChain</span>
              </div>
              <p className="text-slate-300 mb-4">
                Building the future of decentralized finance through innovative blockchain solutions.
              </p>
              <div className="flex space-x-4">
                {QUICK_LINKS.map((link, index) => {
                  const IconComponent = link.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(link.url, "_blank")}
                      className="text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
                    >
                      <IconComponent className="w-5 h-5" />
                    </Button>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("media")}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Media
                </button>
                <button
                  onClick={() => window.open(NAVIGATION_LINKS.WHITEPAPER_URL, "_blank")}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Whitepaper
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <Link
                  href="mailto:team@defichain.com"
                  className="flex items-center text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  team@defichain.com
                </Link>
                <div className="flex items-center text-slate-300">
                  <Globe className="w-4 h-4 mr-2" />
                  Singapore & San Francisco
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 DeFiChain Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
