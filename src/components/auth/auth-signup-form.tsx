"use client";

import { signupAction } from "@/actions/auth/signup-action";
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
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { useSignupForm } from "@/hooks/use-signup-form";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { SignUpSchema } from "@/lib/validation/auth";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function AuthSignUpForm() {
  const { form, handleSubmit, isSubmitting } = useSignupForm();
  const { visible, toggleVisibility } = usePasswordVisibility();

  const { toast } = useToast();

  async function onSubmit(values: SignUpSchema) {
    try {
      const result = await signupAction(values);

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
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive"
                    }
                    placeholder="Enter your first name"
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive"
                    }
                    placeholder="Enter your last name"
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
                      placeholder="Create a password"
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
          <Button type="submit" className="w-full">
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Sign up"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
