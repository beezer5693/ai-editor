"use client";

import { forgotPasswordAction } from "@/actions/auth/forgot-password-action";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { ForgotPasswordSchema, forgotPasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

export default function AuthForgotPasswordForm() {
  // Once form has been submitted successfully, disable input field and button
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const { toast } = useToast();

  const onSubmit = async (values: ForgotPasswordSchema) => {
    try {
      const result = await forgotPasswordAction(values);

      if (result?.errors) {
        displayFormErrors(result.errors, form);
        return;
      }

      toast({
        title: "Please check your email!",
        description: "We've sent you a link to reset your password.",
      });

      setIsSuccess(true);

      form.reset();
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
                    disabled={isSubmitting || isSuccess}
                    {...field}
                  />
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
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? <Icons.Spinner className="h-4 w-4 animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
