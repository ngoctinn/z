"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" suppressHydrationWarning>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-8 py-8">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
             <span className="font-bold text-2xl text-primary">ZenSpa</span>
          </Link>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
             <div className="grid grid-cols-2 gap-4">
                <Button variant="link" asChild className="w-full">
                  <Link href="/login">Đăng nhập</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/register">Đăng ký</Link>
                </Button>
             </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
