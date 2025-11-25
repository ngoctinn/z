"use client";

import { ExampleForm } from "@/components/common/example-form";
import { InputWithIcon } from "@/components/common/input-with-icon";
import { PasswordInput } from "@/components/common/password-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Bell, Lock, Mail, Search } from "lucide-react";
import { toast } from "sonner";

export default function ComponentsTestPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Components Showcase</h1>
        <p className="text-muted-foreground">
          A collection of components for testing and verification.
        </p>
      </div>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Inputs</CardTitle>
              <CardDescription>Default input styles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file">File</Label>
                <Input id="file" type="file" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inputs with Icons</CardTitle>
              <CardDescription>Custom InputWithIcon component.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="search">Search</Label>
                <InputWithIcon
                  id="search"
                  placeholder="Search..."
                  startIcon={<Search />}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-icon">Email</Label>
                <InputWithIcon
                  id="email-icon"
                  placeholder="Email"
                  startIcon={<Mail />}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password-icon">Password</Label>
                <PasswordInput
                  id="password-icon"
                  placeholder="Password"
                  startIcon={<Lock />}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Buttons & Interactive</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="icon" variant="outline"><Bell /></Button>
        </div>
        <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Feedback</h2>
        <div className="flex gap-4">
            <Button variant="outline" onClick={() => toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })}>
              Show Toast
            </Button>
            <Button variant="outline" onClick={() => toast.success("Success message")}>
              Show Success
            </Button>
            <Button variant="outline" onClick={() => toast.error("Error message")}>
              Show Error
            </Button>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Form Validation</h2>
        <Card>
            <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>Test form validation states and error messages.</CardDescription>
            </CardHeader>
            <CardContent>
                <ExampleForm />
            </CardContent>
        </Card>
      </section>

    </div>
  );
}
