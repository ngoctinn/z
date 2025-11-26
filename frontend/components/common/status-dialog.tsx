"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, Check, Info, Loader2, X } from "lucide-react"
import * as React from "react"

export type StatusDialogVariant = "success" | "error" | "info" | "warning"

interface StatusDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  status?: StatusDialogVariant
  title: string
  description: React.ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  isLoading?: boolean
  icon?: React.ReactNode
}

const variantStyles = {
  success: {
    icon: Check,
    color: "text-green-600",
    bg: "bg-green-100",
    button: "bg-green-600 hover:bg-green-700",
  },
  error: {
    icon: AlertCircle,
    color: "text-red-600",
    bg: "bg-red-100",
    button: "bg-red-600 hover:bg-red-700",
  },
  info: {
    icon: Info,
    color: "text-blue-600",
    bg: "bg-blue-100",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-100",
    button: "bg-orange-600 hover:bg-orange-700",
  },
}

export function StatusDialog({
  open,
  onOpenChange,
  status = "info",
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
  icon,
}: StatusDialogProps) {
  const styles = variantStyles[status]
  const IconComponent = styles.icon

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden gap-0">
        <div className="p-6 flex flex-col items-center text-center">
            {/* Close button absolute top right */}
            <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </button>

          <div className={cn("mb-4 flex h-16 w-16 items-center justify-center rounded-full", styles.bg)}>
            {icon || <IconComponent className={cn("h-8 w-8", styles.color)} />}
          </div>

          <DialogHeader className="mb-2">
            <DialogTitle className="text-xl font-semibold text-center">{title}</DialogTitle>
          </DialogHeader>

          <DialogDescription className="text-center text-muted-foreground">
            {description}
          </DialogDescription>
        </div>

        <DialogFooter className="bg-gray-50/50 p-6 flex flex-col sm:flex-row gap-3 sm:justify-center w-full border-t">
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto min-w-[100px]"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelText}
            </Button>
          )}

          {onConfirm && (
            <Button
              type="button"
              className={cn("w-full sm:w-auto min-w-[100px]", styles.button)}
              onClick={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                confirmText
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
