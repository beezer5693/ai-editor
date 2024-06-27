"use client";

import { forgotPasswordAction } from "@/actions/auth/forgot-password-action";
import SubmitButton from "@/components/auth/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { FormType } from "@/utils/constants";
import { displayFormErrors } from "@/utils/helpers/form-helpers";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";

type AuthForgotPasswordFormProps = {
  formType: FormType;
};

export default function AuthForgotPasswordForm({
  formType,
}: AuthForgotPasswordFormProps) {
  // Once form has been submitted successfully, disable input field and button
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = useFormState(form);

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

      setIsSubmissionSuccessful(true);

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
                    placeholder="Enter your email address"
                    disabled={isSubmitting || isSubmissionSuccessful}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <SubmitButton formType={formType} isSubmitting={isSubmitting} />
        </div>
      </form>
    </Form>
  );
}
