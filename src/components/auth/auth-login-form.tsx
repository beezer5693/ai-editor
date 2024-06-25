"use client";

import { loginAction } from "@/actions/auth/login-action";
import PasswordVisibilityToggle from "@/components/auth/password-visibility-toggle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "@/hooks/use-login-form";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { LoginSchema } from "@/lib/validation/auth";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

export default function AuthLoginForm() {
  const { form, handleSubmit, isSubmitting } = useLoginForm();
  const { visible, toggleVisibility } = usePasswordVisibility();

  const { toast } = useToast();

  async function onSubmit(values: LoginSchema) {
    try {
      const result = await loginAction(values);

      if (result?.errors) {
        displayFormErrors(result.errors, form);
      }
    } catch (error: any) {
      toast({
        title: "There was a problem!",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                      "border-destructive"
                    }
                    placeholder="Enter your email address"
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
                        "border-destructive"
                      }
                      type={visible ? "text" : "password"}
                      placeholder="Enter your password"
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
          <div className="mt-3">
            <Link
              className="text-sm text-primary hover:underline font-medium"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div>
          <Button type="submit" className="w-full">
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
