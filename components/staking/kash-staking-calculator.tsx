"use client"

import { useState } from "react"
import { GradientCard } from "@/components/ui/gradient-card"
import { CardContent } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Calculator, TrendingUp, DollarSign, Clock } from "lucide-react"

interface KashStakingCalculatorProps {
  isOpen: boolean
  onClose: () => void
}

export function KashStakingCalculator({ isOpen, onClose }: KashStakingCalculatorProps) {
  const [stakingAmount, setStakingAmount] = useState("")
  const [stakingPeriod, setStakingPeriod] = useState("12")
  const [results, setResults] = useState<{
    monthlyRewards: number
    totalRewards: number
    finalAmount: number
    apy: number
  } | null>(null)

  const calculateRewards = () => {
    const amount = Number.parseFloat(stakingAmount)
    const months = Number.parseInt(stakingPeriod)

    if (!amount || !months) return

    // Sample calculation - replace with actual KASH staking logic
    const baseAPY = 18.5 // Base APY from config
    const monthlyRate = baseAPY / 100 / 12
    const monthlyRewards = amount * monthlyRate
    const totalRewards = monthlyRewards * months
    const finalAmount = amount + totalRewards

    setResults({
      monthlyRewards,
      totalRewards,
      finalAmount,
      apy: baseAPY,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <GradientCard gradient="gold" className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">KASH Staking Calculator</h2>
            </div>
            <button onClick={onClose} className="text-amber-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="stakingAmount" className="text-amber-200 mb-2 block">
                  Staking Amount (KASH)
                </Label>
                <Input
                  id="stakingAmount"
                  type="number"
                  placeholder="Enter amount to stake"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(e.target.value)}
                  className="bg-amber-800/50 border-amber-600 text-white placeholder-amber-300"
                />
              </div>

              <div>
                <Label htmlFor="stakingPeriod" className="text-amber-200 mb-2 block">
                  Staking Period (Months)
                </Label>
                <select
                  id="stakingPeriod"
                  value={stakingPeriod}
                  onChange={(e) => setStakingPeriod(e.target.value)}
                  className="w-full p-2 bg-amber-800/50 border border-amber-600 rounded-md text-white"
                >
                  <option value="3">3 Months</option>
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                </select>
              </div>

              <GradientButton onClick={calculateRewards} className="w-full" variant="primary">
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Rewards
              </GradientButton>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              {results ? (
                <>
                  <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 p-4 rounded-lg border border-green-600/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-green-300 font-semibold">Monthly Rewards</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{results.monthlyRewards.toFixed(2)} KASH</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 p-4 rounded-lg border border-blue-600/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">Total Rewards</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{results.totalRewards.toFixed(2)} KASH</div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-800/50 to-amber-800/50 p-4 rounded-lg border border-yellow-600/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-semibold">Final Amount</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{results.finalAmount.toFixed(2)} KASH</div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-r from-amber-800/30 to-yellow-800/30 rounded-lg border border-amber-600/50">
                    <div className="text-amber-300 text-sm">Current APY</div>
                    <div className="text-3xl font-bold text-yellow-400">{results.apy}%</div>
                  </div>
                </>
              ) : (
                <div className="text-center text-amber-300 py-8">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your staking details to calculate potential rewards</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-amber-800/20 to-yellow-800/20 rounded-lg border border-amber-600/30">
            <p className="text-amber-200 text-sm">
              <strong>Disclaimer:</strong> This calculator provides estimates based on current APY rates. Actual rewards
              may vary based on market conditions and protocol changes.
            </p>
          </div>
        </CardContent>
      </GradientCard>
    </div>
  )
}
