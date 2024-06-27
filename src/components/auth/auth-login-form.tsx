"use client";

import { loginAction } from "@/actions/auth/login-action";
import SubmitButton from "@/components/auth/submit-button";
import PasswordVisibilityToggle from "@/components/password-visibility-toggle";
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
import { FormType } from "@/utils/constants";
import { displayFormErrors } from "@/utils/helpers/form-helpers";
import { LoginSchema, loginSchema } from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, useFormState } from "react-hook-form";

type AuthLoginFormProps = {
  formType: FormType;
};

export default function AuthLoginForm({ formType }: AuthLoginFormProps) {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = useFormState(form);
  const { visible, toggleVisibility } = usePasswordVisibility();

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    placeholder="name@email.com"
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
                      placeholder="••••••••"
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
        <div className="pt-1">
          <SubmitButton formType={formType} isSubmitting={isSubmitting} />
        </div>
      </form>
    </Form>
  );
}
