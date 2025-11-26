"use client";

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { showToast } from "@/components/common/custom-toast";
import { InputWithIcon } from "@/components/common/input-with-icon";
import { PasswordInput } from "@/components/common/password-input";
import { StatusDialog } from "@/components/common/status-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createClient } from "@/lib/supabase/client";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Tên phải có ít nhất 2 ký tự.",
    }),
    email: z.string().email({
      message: "Email không hợp lệ.",
    }),
    password: z.string().min(8, {
      message: "Mật khẩu phải có ít nhất 8 ký tự.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp.",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const router = useRouter();
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.name,
          },
        },
      });

      if (error) {
        showToast.error("Đăng ký thất bại", error.message);
        return;
      }

      setShowVerificationDialog(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResendEmail() {
    setIsResending(true);
    const supabase = createClient();
    const email = form.getValues("email");

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });

      if (error) {
        showToast.error("Gửi lại thất bại", error.message);
      } else {
        showToast.success("Đã gửi lại email xác thực");
      }
    } catch (error) {
       showToast.error("Đã có lỗi xảy ra");
    } finally {
      setIsResending(false);
    }
  }

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Đăng ký</CardTitle>
          <CardDescription className="text-center">
            Tạo tài khoản mới để trải nghiệm dịch vụ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ và tên</FormLabel>
                    <FormControl>
                      <InputWithIcon
                        startIcon={<User />}
                        placeholder="Nhập họ và tên của bạn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <InputWithIcon
                        startIcon={<Mail />}
                        placeholder="Nhập email của bạn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <PasswordInput
                        startIcon={<Lock />}
                        placeholder="Nhập mật khẩu của bạn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <PasswordInput
                        startIcon={<Lock />}
                        placeholder="Nhập lại mật khẩu của bạn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Đăng ký"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-muted-foreground">
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Đăng nhập ngay
            </Link>
          </div>
        </CardFooter>
      </Card>

      <StatusDialog
        open={showVerificationDialog}
        onOpenChange={setShowVerificationDialog}
        status="info"
        title="Xác thực email của bạn"
        description={
          <span>
            Chúng tôi đã gửi liên kết xác thực đến <span className="font-medium text-foreground">{form.getValues("email")}</span>.
            <br />
            Vui lòng kiểm tra hộp thư (bao gồm cả mục Spam) và nhấp vào liên kết để kích hoạt tài khoản.
          </span>
        }
        confirmText="Đã hiểu, tôi sẽ kiểm tra ngay"
        cancelText="Gửi lại email"
        onConfirm={() => setShowVerificationDialog(false)}
        onCancel={handleResendEmail}
        isLoading={isResending}
      />
    </>
  );
}
