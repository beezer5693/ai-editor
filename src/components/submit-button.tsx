import React from "react";
import { Button } from "@/components/ui/button";
import { FormType } from "@/lib/constants";
import { Icons } from "@/components/icons";

type Props = {
  formType: FormType;
  isSubmitting: boolean;
};

export default function SubmitButton({ formType, isSubmitting }: Props) {
  let buttonText;

  switch (formType) {
    case FormType.Login:
      buttonText = "Log in";
      break;
    case FormType.SignUp:
      buttonText = "Sign up";
      break;
    case FormType.ForgotPassword:
      buttonText = "Send reset link";
      break;
    case FormType.ResetPassword:
      buttonText = "Reset password";
      break;
  }

  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? (
        <Icons.Spinner className="h-4 w-4 animate-spin" />
      ) : (
        <span>{buttonText}</span>
      )}
    </Button>
  );
}
