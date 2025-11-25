"use client"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import * as React from "react"

interface PasswordInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
  startIcon?: React.ReactNode
}

function PasswordInput({ className, startIcon, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="relative w-full">
      {startIcon && (
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
          {startIcon}
        </div>
      )}
      <Input
        type={showPassword ? "text" : "password"}
        className={cn(
          startIcon && "pl-9",
          "pr-9",
          className
        )}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none [&>svg]:h-4 [&>svg]:w-4"
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOff aria-hidden="true" />
        ) : (
          <Eye aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </button>
    </div>
  )
}

export { PasswordInput }
