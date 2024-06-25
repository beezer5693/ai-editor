import { signupAction } from "@/actions/auth/signup-action";
import { useToast } from "@/components/ui/use-toast";
import { displayFormErrors } from "@/lib/helpers/form-helpers";
import { SignUpSchema, signUpSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useSignupForm() {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
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

  return {
    form,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
}
