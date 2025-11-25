"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Dịch vụ",
    href: "/services",
  },
  {
    title: "Về chúng tôi",
    href: "/about",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary relative group",
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.title}
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
              pathname === item.href && "w-full"
            )}
          />
        </Link>
      ))}
    </nav>
  );
}
