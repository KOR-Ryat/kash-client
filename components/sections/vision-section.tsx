import { GradientCard } from "@/components/ui/gradient-card"
import { CardContent } from "@/components/ui/card"
import { Mountain, Coins, TrendingUp, DollarSign } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"

export function VisionSection() {
  const visionPoints = [
    {
      icon: Mountain,
      title: "Grounded in Real-World Mining",
      description:
        "Built on actual gold extraction from the Buru Island project in Indonesia, providing tangible asset backing.",
      color: "yellow-500",
    },
    {
      icon: Coins,
      title: "Tokenized Gold-Backed Infrastructure",
      description:
        "vRWA(Gold) tokens represent forward claims on future gold production, creating a bridge between physical and digital assets.",
      color: "amber-500",
    },
    {
      icon: TrendingUp,
      title: "Staking Rewards for Early Supporters",
      description:
        "High-yield opportunities for participants who provide early backing and help establish the reserve pool.",
      color: "green-500",
    },
    {
      icon: DollarSign,
      title: "Structured for Long-Term DeFi Utility",
      description:
        "KASH evolves into a versatile reserve asset for lending, collateral, and cross-chain DeFi applications.",
      color: "blue-500",
    },
  ]

  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-yellow-800/40 to-amber-900/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
            A New Reserve Currency, Born from Gold
          </h2>
          <p className="text-amber-100 text-lg max-w-3xl mx-auto">
            KASH represents the evolution of gold-backed value in the digital age, combining traditional asset security
            with modern DeFi innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {visionPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`w-8 h-8 bg-gradient-to-br from-${point.color} to-${point.color.replace("500", "600")} rounded-full flex items-center justify-center mt-1 shadow-lg`}
                >
                  <point.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-amber-200">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <GradientCard gradient="gold" className="p-8 border-amber-600/50">
            <CardContent className="p-0">
              <h4 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                Protocol Stats
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{SITE_CONFIG.STATS.GOLD_RESERVES}</div>
                  <div className="text-amber-200">Gold Reserves</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400 mb-1">{SITE_CONFIG.STATS.VRWA_ISSUED}</div>
                  <div className="text-amber-200">vRWA Issued</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">{SITE_CONFIG.STATS.KASH_SUPPLY}</div>
                  <div className="text-amber-200">KASH Supply</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">{SITE_CONFIG.STATS.APY}</div>
                  <div className="text-amber-200">Staking APY</div>
                </div>
              </div>
            </CardContent>
          </GradientCard>
        </div>
      </div>
    </section>
  )
}
