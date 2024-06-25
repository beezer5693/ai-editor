import { forgotPasswordAction } from "@/actions/auth/forgot-password-action";
import { useToast } from "@/components/ui/use-toast";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { ForgotPasswordSchema, forgotPasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useForgotPasswordForm() {
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

  async function onSubmit(values: ForgotPasswordSchema) {
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
  }

  return {
    form,
    handleSubmit,
    onSubmit,
    isSuccess,
    isSubmitting,
  };
}
