"use client";

import { ExampleForm } from "@/components/common/example-form";
import { InputWithIcon } from "@/components/common/input-with-icon";
import { PasswordInput } from "@/components/common/password-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
            <Button variant="outline" onClick={() => showToast.info("Event has been created", "Sunday, December 03, 2023 at 9:00 AM")}>
              Show Info
            </Button>
            <Button variant="outline" onClick={() => showToast.success("Success message", "Operation completed successfully")}>
              Show Success
            </Button>
            <Button variant="outline" onClick={() => showToast.error("Error message", "Something went wrong")}>
              Show Error
            </Button>
            <Button variant="outline" onClick={() => showToast.warning("Warning message", "Please be careful")}>
              Show Warning
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
