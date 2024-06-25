import { loginAction } from "@/actions/auth/login-action";
import { useToast } from "@/components/ui/use-toast";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { LoginSchema, loginSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useLoginForm() {
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

  async function onSubmit(values: LoginSchema) {
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
  }

  return {
    form,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
}
