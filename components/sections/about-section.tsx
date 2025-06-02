import { GradientCard } from "@/components/ui/gradient-card"
import { CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Zap, Users } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Real Asset-Backed Trust",
      description: "Secure, verifiable tokenization of physical gold from Indonesian mining operations.",
      gradient: "gold" as const,
    },
    {
      icon: TrendingUp,
      title: "Risk-Adjusted Yield",
      description: "High-yield staking through vRWA-backed incentives for early participants.",
      gradient: "green" as const,
    },
    {
      icon: Zap,
      title: "Progressive Utility Expansion",
      description: "KASH evolves from gold-backed collateral to a DeFi-native unit of value.",
      gradient: "amber" as const,
    },
    {
      icon: Users,
      title: "Foundation-Led Ecosystem",
      description: "Structured and governed by a foundation, with potential for community governance.",
      gradient: "yellow" as const,
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 via-yellow-900/30 to-amber-800/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
            About {SITE_CONFIG.PROJECT_NAME}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-amber-100 text-lg leading-relaxed mb-6">
              <strong className="text-yellow-300">
                KASH is a hybrid RWA project that bridges real-world gold mining with decentralized finance.
              </strong>
            </p>
            <p className="text-amber-200 leading-relaxed mb-4">
              Based on the actual development of the{" "}
              <strong className="text-yellow-300">Buru Island gold mine in Indonesia</strong>, it issues{" "}
              <strong className="text-yellow-300">vRWA(Gold)</strong> — a tokenized forward claim on future gold
              production, and uses it as collateral to mint <strong className="text-yellow-300">KASH</strong>, a stable
              reserve token.
            </p>
            <p className="text-amber-200 leading-relaxed">
              This structure enables <strong className="text-yellow-300">secure, on-chain financial products</strong>{" "}
              backed by physical assets while providing new earning opportunities for early participants.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <GradientCard
              key={index}
              gradient={feature.gradient}
              className="hover:border-yellow-500/60 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-amber-100">{feature.description}</p>
              </CardContent>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
