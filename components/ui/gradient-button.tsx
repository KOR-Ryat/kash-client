import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ variant = "primary", size = "md", children, className, ...props }, ref) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 hover:from-yellow-500 hover:via-amber-400 hover:to-yellow-500 text-white shadow-lg hover:shadow-xl",
      secondary:
        "bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-500 text-white shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-amber-500/60 text-amber-200 bg-gradient-to-r from-amber-800/30 via-yellow-900/20 to-amber-800/30 hover:bg-gradient-to-r hover:from-amber-700/50 hover:via-yellow-800/40 hover:to-amber-700/50 hover:text-white hover:border-amber-400/80 backdrop-blur-sm",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <Button
        ref={ref}
        className={cn(
          "font-medium transition-all duration-300 transform hover:scale-105",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

GradientButton.displayName = "GradientButton"
