"use client";

import React from "react";
import { useResetPasswordForm } from "@/hooks/use-resetpassword-form";
import { useToast } from "@/components/ui/use-toast";
import { ResetPasswordSchema } from "@/lib/validation/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordVisibilityToggle from "@/components/auth/password-visibility-toggle";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { resetPasswordAction } from "@/actions/auth/reset-password-action";
import { displayFormErrors } from "@/lib/helpers/form-helpers";

type AuthResetPasswordFormProps = {
  code: string;
};

export default function AuthResetPasswordForm({
  code,
}: AuthResetPasswordFormProps) {
  const { form, handleSubmit, isSubmitting } = useResetPasswordForm();
  const { visible, toggleVisibility } = usePasswordVisibility();

  const { toast } = useToast();

  async function onSubmit(values: ResetPasswordSchema) {
    try {
      const result = await resetPasswordAction(values, code);

      if (result?.errors) {
        displayFormErrors(result.errors, form);
      }

      toast({
        title: "Password reset successful!",
        description: "You can now login with your new password.",
      });
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                      placeholder="Create new password"
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
        </div>
        <div>
          <FormField
            control={form.control}
            name="confirmPassword"
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
                      placeholder="Confirm new password"
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
        </div>
        <div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Icons.Spinner className="h-4 w-4 animate-spin" />
            ) : (
              "Reset password"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
