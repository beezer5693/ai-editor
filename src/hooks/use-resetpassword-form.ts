import { resetPasswordAction } from "@/actions/auth/reset-password-action";
import { useToast } from "@/components/ui/use-toast";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { ResetPasswordSchema, resetPasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useResetPasswordForm(code: string) {
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

  async function onSubmit(values: ResetPasswordSchema) {
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
  }

  return {
    form,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
}
