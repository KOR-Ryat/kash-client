"use client"

import { useState } from "react"
import { GradientButton } from "@/components/ui/gradient-button"
import { Menu, X, FileText, Rocket, Calculator } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void
  onOpenCalculator: () => void
  showComingSoon: boolean
  setShowComingSoon: (show: boolean) => void
}

export function Navbar({ onScrollToSection, onOpenCalculator, showComingSoon, setShowComingSoon }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLaunchApp = () => {
    if (SITE_CONFIG.LAUNCH_APP_URL) {
      window.open(SITE_CONFIG.LAUNCH_APP_URL, "_blank")
    }
  }

  const navItems = [
    { label: "Home", section: "hero" },
    { label: "About", section: "about" },
    { label: "Vision", section: "vision" },
    { label: "Technology", section: "technology" },
    { label: "Media", section: "media" },
    { label: "Team", section: "team" },
    { label: "FAQ", section: "faq" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-amber-900/95 via-yellow-900/95 to-amber-900/95 backdrop-blur-sm border-b border-amber-700/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-white">{SITE_CONFIG.PROJECT_NAME}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => onScrollToSection(item.section)}
                className="text-amber-100 hover:text-yellow-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <GradientButton
              variant="outline"
              size="sm"
              onClick={() => window.open(SITE_CONFIG.WHITEPAPER_URL, "_blank")}
            >
              <FileText className="w-4 h-4 mr-2" />
              Whitepaper
            </GradientButton>

            <GradientButton variant="secondary" size="sm" onClick={onOpenCalculator}>
              <Calculator className="w-4 h-4 mr-2" />
              Calculator
            </GradientButton>

            <div className="relative">
              <GradientButton
                size="sm"
                onClick={handleLaunchApp}
                onMouseEnter={() => !SITE_CONFIG.LAUNCH_APP_URL && setShowComingSoon(true)}
                onMouseLeave={() => setShowComingSoon(false)}
                disabled={!SITE_CONFIG.LAUNCH_APP_URL}
                variant={SITE_CONFIG.LAUNCH_APP_URL ? "primary" : "outline"}
                className={!SITE_CONFIG.LAUNCH_APP_URL ? "opacity-50 cursor-not-allowed" : ""}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Launch App
              </GradientButton>
              {showComingSoon && !SITE_CONFIG.LAUNCH_APP_URL && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-800 to-yellow-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap border border-amber-600 shadow-lg">
                  Coming Soon
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-800 rotate-45 border-l border-t border-amber-600"></div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-amber-800 to-yellow-800 border-t border-amber-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    onScrollToSection(item.section)
                    setIsMenuOpen(false)
                  }}
                  className="block px-3 py-2 text-amber-100 hover:bg-amber-700/50 rounded transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 space-y-2">
                <GradientButton
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(SITE_CONFIG.WHITEPAPER_URL, "_blank")}
                  className="w-full"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Whitepaper
                </GradientButton>
                <GradientButton variant="secondary" size="sm" onClick={onOpenCalculator} className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculator
                </GradientButton>
                <GradientButton
                  size="sm"
                  onClick={handleLaunchApp}
                  disabled={!SITE_CONFIG.LAUNCH_APP_URL}
                  variant={SITE_CONFIG.LAUNCH_APP_URL ? "primary" : "outline"}
                  className={`w-full ${!SITE_CONFIG.LAUNCH_APP_URL ? "opacity-50" : ""}`}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  {SITE_CONFIG.LAUNCH_APP_URL ? "Launch App" : "Coming Soon"}
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
