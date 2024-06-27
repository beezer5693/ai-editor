"use client";

import { resetPasswordAction } from "@/actions/auth/reset-password-action";
import { Icons } from "@/components/icons";
import PasswordVisibilityToggle from "@/components/password-visibility-toggle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { displayFormErrors } from "@/utils/helpers/form-helpers";
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type AuthResetPasswordFormProps = {
  code: string;
};

export default function AuthResetPasswordForm({
  code,
}: AuthResetPasswordFormProps) {
  const { visible, toggleVisibility } = usePasswordVisibility();

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const { toast } = useToast();

  const onSubmit = async (values: ResetPasswordSchema) => {
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
  };

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
          <Button
            type="submit"
            className="w-full active:scale-[0.98] text-secondary"
            disabled={isSubmitting}
          >
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
