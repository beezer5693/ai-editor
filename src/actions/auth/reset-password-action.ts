"use server";

import { resetPasswordSchema } from "@/lib/validation/auth";
import { z } from "zod";

export const resetPasswordAction = async (
  formData: z.infer<typeof resetPasswordSchema>
) => {
  const parsed = resetPasswordSchema.safeParse(formData);
  if (!parsed.success) {
    return { validationErrors: parsed.error.format() };
  }

  // Send email to user with link to reset password
  return { success: true };
};
