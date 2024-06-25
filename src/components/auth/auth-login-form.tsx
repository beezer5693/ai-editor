"use client";

import PasswordVisibilityToggle from "@/components/auth/password-visibility-toggle";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "@/hooks/use-login-form";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import Link from "next/link";

export default function AuthLoginForm() {
  const { form, handleSubmit, onSubmit, isSubmitting } = useLoginForm();
  const { visible, toggleVisibility } = usePasswordVisibility();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive focus:border-destructive"
                    }
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={
                        form.getFieldState(field.name).error &&
                        "border-destructive focus:border-destructive"
                      }
                      type={visible ? "text" : "password"}
                      placeholder="Enter your password"
                      disabled={isSubmitting}
                      {...field}
                    />
                    <PasswordVisibilityToggle
                      visible={visible}
                      toggleVisibility={toggleVisibility}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <Link
              className="text-sm text-primary hover:underline font-medium"
              href="/forgot-password"
            >
              <span>Forgot password?</span>
            </Link>
          </div>
        </div>
        <div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Icons.Spinner className="h-4 w-4 animate-spin" /> : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
