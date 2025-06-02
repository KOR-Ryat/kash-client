"use client"

import { useState } from "react"
import { GradientCard } from "@/components/ui/gradient-card"
import { CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/config"

export function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-yellow-800/40 to-amber-900/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-amber-100 text-lg">Everything you need to know about KASH and vRWA(Gold)</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <GradientCard key={index} gradient="gold" className="border-amber-600/50">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-amber-700/30 hover:to-yellow-800/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-400" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-amber-100 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
