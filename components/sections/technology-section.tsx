import { GradientCard } from "@/components/ui/gradient-card"
import { CardContent } from "@/components/ui/card"
import { Coins, DollarSign, Shield } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      icon: Coins,
      title: "vRWA(Gold)",
      description: "Tokenized forward contracts representing 1 oz of future gold from Buru Island mining operations.",
      features: [
        "ERC-20 compatible tokens",
        "Backed by verified mining reserves",
        "Redeemable for physical gold or USDT",
      ],
      gradient: "yellow" as const,
    },
    {
      icon: DollarSign,
      title: "KASH Token",
      description: "Issued based on vRWA collateral; evolves into a digital reserve asset for DeFi applications.",
      features: ["Collateralized by vRWA(Gold)", "Price stability mechanisms", "DeFi utility and governance rights"],
      gradient: "amber" as const,
    },
    {
      icon: Shield,
      title: "Reserve Pool",
      description: "Backed by USDT and RWA; grows as gold production is realized and vRWA tokens are redeemed.",
      features: ["Multi-asset backing", "Transparent reserve management", "Automated rebalancing"],
      gradient: "green" as const,
    },
  ]

  return (
    <section id="technology" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 via-yellow-900/30 to-amber-800/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-amber-100 text-lg max-w-3xl mx-auto">
            KASH operates through a three-layer system that connects physical gold mining with digital finance
            infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <GradientCard
              key={index}
              gradient={tech.gradient}
              className="hover:border-yellow-500/60 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{tech.title}</h3>
                <p className="text-amber-100 mb-4">{tech.description}</p>
                <ul className="text-amber-200 text-sm space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
