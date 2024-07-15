import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { FormType } from "@/lib/types/types";

type Props = {
  formType: FormType;
  isSubmitting: boolean;
};

const FormActionButton = ({ formType, isSubmitting }: Props) => {
  let buttonText;

  switch (formType) {
    case FormType.Login:
      buttonText = "Log in";
      break;
    case FormType.SignUp:
      buttonText = "Sign up";
      break;
    case FormType.ResetPassword:
      buttonText = "Send reset password link";
      break;
    case FormType.UpdatePassword:
      buttonText = "Update password";
      break;
  }

  return (
    <Button
      type="submit"
      className="w-full active:scale-[0.98]"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <Icons.Spinner className="size-4 animate-spin" />
      ) : (
        <span>{buttonText}</span>
      )}
    </Button>
  );
};

export default FormActionButton;
