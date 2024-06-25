import { FormType } from "@/lib/constants";
import { UseFormReturn } from "react-hook-form";
import { ZodFormattedError } from "zod";

export function getFormTitle(formType: string) {
  switch (formType) {
    case FormType.Login:
      return "Login to AI Editor";
    case FormType.SignUp:
      return "Sign up for AI Editor";
    case FormType.ForgotPassword:
      return "Forgot Password";
    case FormType.ResetPassword:
      return "Reset Password";
  }
}

export function displayFormErrors(
  errors: ZodFormattedError<
    {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    string
  >,
  form: UseFormReturn<any, any, undefined>
) {
  if (errors.firstName) {
    form.setError("firstName", {
      type: "server",
      message: `${errors.firstName._errors[0]}`,
    });
  }
  if (errors.lastName) {
    form.setError("lastName", {
      type: "server",
      message: `${errors.lastName._errors[0]}`,
    });
  }
  if (errors.email) {
    form.setError("email", {
      type: "server",
      message: `${errors.email._errors[0]}`,
    });
  }
  if (errors.password) {
    form.setError("password", {
      type: "server",
      message: `${errors.password._errors[0]}`,
    });
  }
}
