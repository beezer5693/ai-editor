"use client";

import { forgotPasswordAction } from "@/actions/auth/forgot-password-action";
import SubmitButton from "@/components/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { FormType } from "@/lib/constants";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { forgotPasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

export default function ForgotPasswordForm() {
  // Once form has been submitted successfully, disable input field and button
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = useFormState(form);

  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    try {
      const result = await forgotPasswordAction(values);

      if (result?.errors) {
        displayFormErrors(result.errors, form);
        return;
      }

      toast({
        title: "Please check your email!",
        description: "We've sent you a link to reset your password.",
        variant: "success",
      });

      setFormSubmitted(true);

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                    disabled={isSubmitting || formSubmitted}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-2">
          <SubmitButton
            formType={FormType.ForgotPassword}
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}
