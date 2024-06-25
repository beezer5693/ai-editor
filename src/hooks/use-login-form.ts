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

  return {
    form,
    handleSubmit,
    isSubmitting,
  };
}
