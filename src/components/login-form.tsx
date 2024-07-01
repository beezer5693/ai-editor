"use client";

import { loginAction } from "@/actions/auth/login-action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { FormType } from "@/lib/constants";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { loginSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import SubmitButton from "./submit-button";
import { Label } from "./ui/label";
import PasswordVisibilityToggle from "./password-visibility-toggle";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = useFormState(form);
  const { visible, toggleVisibility } = usePasswordVisibility();

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive focus:border-destructive focus-visible:ring-destructive/30"
                    }
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
                <div className="flex items-center justify-between">
                  <Label>Password</Label>
                  <div>
                    <Link
                      href="/forgot-password"
                      className="text-xs hover:underline font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={
                        form.getFieldState(field.name).error &&
                        "border-destructive focus:border-destructive focus-visible:ring-destructive/30"
                      }
                      type={visible ? "text" : "password"}
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
        <div className="pt-4">
          <SubmitButton formType={FormType.Login} isSubmitting={isSubmitting} />
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
