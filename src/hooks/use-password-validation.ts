import { useMemo, useState } from "react";

export type PasswordValidation = {
  text: string;
  regex: RegExp;
  isValid: boolean;
};

export const usePasswordValidation = () => {
  const validations: PasswordValidation[] = useMemo(
    () => [
      { text: "Uppercase letter", regex: /[A-Z]/, isValid: false },
      { text: "Lowercase letter", regex: /[a-z]/, isValid: false },
      { text: "Special character", regex: /[^A-Za-z0-9]/, isValid: false },
      { text: "Number", regex: /[0-9]/, isValid: false },
      { text: "8+ characters or more", regex: /.{8,}/, isValid: false },
    ],
    []
  );

  const [passwordValidation, setPasswordValidation] =
    useState<PasswordValidation[]>(validations);

  const [showValidation, setShowValidation] = useState<boolean>(false);

  const handlePasswordValidation = (password: string) => {
    setPasswordValidation((prev) =>
      prev.map((validation) => ({
        ...validation,
        isValid: validation.regex.test(password),
      }))
    );
  };

  return {
    passwordValidation,
    showValidation,
    setShowValidation,
    handlePasswordValidation,
  };
};
