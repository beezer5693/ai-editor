import React from "react";
import { Button } from "@/components/ui/button";
import { FormType } from "@/utils/constants";
import { Icons } from "@/components/icons";

type SubmitButtonProps = {
  formType: FormType;
  isSubmitting: boolean;
};

export default function SubmitButton({
  formType,
  isSubmitting,
}: SubmitButtonProps) {
  let buttonText;

  switch (formType) {
    case FormType.Login:
      buttonText = "Login";
      break;
    case FormType.Signup:
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
