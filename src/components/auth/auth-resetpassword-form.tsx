"use client";

import PasswordVisibilityToggle from "@/components/auth/password-visibility-toggle";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { useResetPasswordForm } from "@/hooks/use-resetpassword-form";

type AuthResetPasswordFormProps = {
  code: string;
};

export default function AuthResetPasswordForm({ code }: AuthResetPasswordFormProps) {
  const { form, handleSubmit, onSubmit, isSubmitting } = useResetPasswordForm(code);
  const { visible, toggleVisibility } = usePasswordVisibility();

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
            {isSubmitting ? <Icons.Spinner className="h-4 w-4 animate-spin" /> : "Reset password"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
