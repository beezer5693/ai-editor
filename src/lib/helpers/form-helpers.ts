import { UseFormReturn } from "react-hook-form";

export const displayValidationErrors = (
  errors: Record<string, string[] | undefined> | undefined,
  form: UseFormReturn<any, any, undefined>
) => {
  if (errors?.email) {
    form.setError("email", {
      type: "server",
      message: `${errors.email[0]}`,
    });
  }
  if (errors?.password) {
    form.setError("password", {
      type: "server",
      message: `${errors.password[0]}`,
    });
  }
};
