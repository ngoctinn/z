"use client";

import { showToast } from "@/components/common/custom-toast";
import { InputWithIcon } from "@/components/common/input-with-icon";
import { PasswordInput } from "@/components/common/password-input";
import { StatusDialog } from "@/components/common/status-dialog";
import { Button } from "@/components/ui/button";
import { Mail, User } from "lucide-react";
import { useState } from "react";

export default function TestComponentsPage() {
  const [password, setPassword] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  return (
    <div className="container mx-auto py-10 space-y-10">
      <h1 className="text-3xl font-bold">Test Common Components</h1>

      {/* Input With Icon Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input With Icon</h2>
        <div className="grid gap-4 max-w-md">
          <InputWithIcon
            startIcon={<Mail />}
            placeholder="Email address"
            type="email"
          />
          <InputWithIcon
            startIcon={<User />}
            placeholder="Username"
          />
        </div>
      </section>

      {/* Password Input Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Password Input</h2>
        <div className="max-w-md">
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Value: {password}
          </p>
        </div>
      </section>

      {/* Status Dialog Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Status Dialog</h2>
        <div className="flex gap-4">
          <Button onClick={() => setShowSuccessDialog(true)}>
            Show Success Dialog
          </Button>
          <Button variant="destructive" onClick={() => setShowErrorDialog(true)}>
            Show Error Dialog
          </Button>
        </div>

        <StatusDialog
          open={showSuccessDialog}
          onOpenChange={setShowSuccessDialog}
          status="success"
          title="Thành công!"
          description="Thao tác của bạn đã được thực hiện thành công."
          confirmText="Đóng"
          onConfirm={() => setShowSuccessDialog(false)}
        />

        <StatusDialog
          open={showErrorDialog}
          onOpenChange={setShowErrorDialog}
          status="error"
          title="Thất bại!"
          description="Đã có lỗi xảy ra. Vui lòng thử lại sau."
          confirmText="Thử lại"
          onConfirm={() => setShowErrorDialog(false)}
        />
      </section>

      {/* Toast Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Toasts (Custom)</h2>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() =>
              showToast.success("Thành công", "Đây là thông báo thành công")
            }
          >
            Show Success Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              showToast.error("Lỗi", "Đây là thông báo lỗi")
            }
          >
            Show Error Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              showToast.info("Thông tin", "Đây là thông báo thông tin")
            }
          >
            Show Info Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              showToast.warning("Cảnh báo", "Đây là thông báo cảnh báo")
            }
          >
            Show Warning Toast
          </Button>
        </div>
      </section>
    </div>
  );
}
