"use client"

import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"
import { Mountain, FileText, Calculator } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

interface HeroSectionProps {
  onExploreVision: () => void
  onOpenCalculator: () => void
}

export function HeroSection({ onExploreVision, onOpenCalculator }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-yellow-900/80 to-amber-900/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-yellow-900/30" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-500/20 via-amber-400/30 to-yellow-500/20 text-yellow-300 border-yellow-500/40 backdrop-blur-sm">
            {SITE_CONFIG.PROJECT_TAGLINE}
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Redefining Gold in the Digital Era
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed drop-shadow-md">
            From Indonesian mines to blockchain-based value. KASH connects real gold with the future of finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton size="lg" onClick={onExploreVision} variant="primary">
              <Mountain className="w-5 h-5 mr-2" />
              Explore the Vision
            </GradientButton>

            <GradientButton
              size="lg"
              onClick={() => window.open(SITE_CONFIG.WHITEPAPER_URL, "_blank")}
              variant="outline"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read the Whitepaper
            </GradientButton>

            <GradientButton size="lg" onClick={onOpenCalculator} variant="secondary">
              <Calculator className="w-5 h-5 mr-2" />
              Staking Calculator
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
}
