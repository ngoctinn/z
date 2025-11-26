"use client"

import { cn } from "@/lib/utils"
import { AlertTriangle, Check, Info, X } from "lucide-react"
import { toast } from "sonner"

export type ToastType = "success" | "error" | "info" | "warning"

interface CustomToastProps {
  t: string | number
  type: ToastType
  title: string
  description?: string
}

const toastStyles = {
  success: {
    icon: Check,
    container: "bg-emerald-50 border-emerald-500",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    titleColor: "text-emerald-700",
    descColor: "text-emerald-600",
    closeColor: "text-emerald-400 hover:text-emerald-600",
  },
  error: {
    icon: X,
    container: "bg-red-50 border-red-400",
    iconBg: "bg-red-400",
    iconColor: "text-white",
    titleColor: "text-red-700",
    descColor: "text-red-600",
    closeColor: "text-red-400 hover:text-red-600",
  },
  info: {
    icon: Info,
    container: "bg-sky-50 border-sky-500",
    iconBg: "bg-sky-500",
    iconColor: "text-white",
    titleColor: "text-sky-700",
    descColor: "text-sky-600",
    closeColor: "text-sky-400 hover:text-sky-600",
  },
  warning: {
    icon: AlertTriangle,
    container: "bg-orange-50 border-orange-400",
    iconBg: "bg-orange-400",
    iconColor: "text-white",
    titleColor: "text-orange-700",
    descColor: "text-orange-600",
    closeColor: "text-orange-400 hover:text-orange-600",
  },
}

export function CustomToast({ t, type, title, description }: CustomToastProps) {
  const styles = toastStyles[type]
  const Icon = styles.icon

  return (
    <div
      className={cn(
        "relative flex w-full items-center gap-3 rounded-2xl border p-4 shadow-sm transition-all overflow-hidden",
        styles.container
      )}
    >
      <div className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full", styles.iconBg)}>
        <Icon className={cn("h-4 w-4", styles.iconColor)} strokeWidth={3} />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className={cn("font-medium text-sm leading-none tracking-tight", styles.titleColor)}>
          {title}
        </h3>
        {description && (
          <p className={cn("mt-1 text-xs opacity-90", styles.descColor)}>
            {description}
          </p>
        )}
      </div>

      <button
        onClick={() => toast.dismiss(t)}
        className={cn(
          "shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2",
          styles.closeColor
        )}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  )
}

const toastOptions = {
  className: "!bg-transparent !border-0 !shadow-none !p-0 !w-full",
  duration: 4000,
}

export const showToast = {
  success: (title: string, description?: string) => {
    toast.custom((t) => <CustomToast t={t} type="success" title={title} description={description} />, toastOptions)
  },
  error: (title: string, description?: string) => {
    toast.custom((t) => <CustomToast t={t} type="error" title={title} description={description} />, toastOptions)
  },
  info: (title: string, description?: string) => {
    toast.custom((t) => <CustomToast t={t} type="info" title={title} description={description} />, toastOptions)
  },
  warning: (title: string, description?: string) => {
    toast.custom((t) => <CustomToast t={t} type="warning" title={title} description={description} />, toastOptions)
  },
}
