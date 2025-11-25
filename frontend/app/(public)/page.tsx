import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32">
        <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Chào mừng đến với ZenSpa
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Trải nghiệm thư giãn tuyệt vời và chăm sóc sắc đẹp toàn diện.
              Đặt lịch ngay hôm nay để nhận ưu đãi đặc biệt.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/register">Đăng ký ngay</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Xem dịch vụ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
