import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import * as React from "react"

interface InputWithIconProps extends React.ComponentProps<typeof Input> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

function InputWithIcon({ className, startIcon, endIcon, ...props }: InputWithIconProps) {
  return (
    <div className="relative w-full">
      {startIcon && (
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
          {startIcon}
        </div>
      )}
      <Input
        className={cn(
          startIcon && "pl-9",
          endIcon && "pr-9",
          className
        )}
        {...props}
      />
      {endIcon && (
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
          {endIcon}
        </div>
      )}
    </div>
  )
}

export { InputWithIcon }
