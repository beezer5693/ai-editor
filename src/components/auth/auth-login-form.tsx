"use client";

import { loginAction } from "@/actions/auth/login-action";
import { Icons } from "@/components/icons";
import PasswordVisibilityToggle from "@/components/password-visibility-toggle";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { LoginSchema, loginSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

export default function AuthLoginForm() {
  const { visible, toggleVisibility } = usePasswordVisibility();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const { toast } = useToast();

  const onSubmit = async (values: LoginSchema) => {
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
  };

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
          <Button
            type="submit"
            className="w-full active:scale-[0.98] text-secondary"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Icons.Spinner className="h-4 w-4 animate-spin" /> : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
