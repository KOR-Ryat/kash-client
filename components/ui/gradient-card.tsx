import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
  gradient?: "gold" | "amber" | "yellow" | "green" | "blue"
}

export function GradientCard({ children, className, gradient = "gold" }: GradientCardProps) {
  const gradientClasses = {
    gold: "bg-gradient-to-br from-amber-800/80 via-yellow-900/60 to-amber-800/80",
    amber: "bg-gradient-to-br from-amber-700/80 via-amber-800/60 to-yellow-800/80",
    yellow: "bg-gradient-to-br from-yellow-700/80 via-amber-800/60 to-yellow-900/80",
    green: "bg-gradient-to-br from-green-700/80 via-emerald-800/60 to-green-900/80",
    blue: "bg-gradient-to-br from-blue-700/80 via-indigo-800/60 to-blue-900/80",
  }

  return (
    <Card className={cn("border-amber-700/50 backdrop-blur-sm", gradientClasses[gradient], className)}>{children}</Card>
  )
}
