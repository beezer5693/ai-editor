"use server";

import { updatePasswordSchema } from "@/lib/validation/auth";
import { z } from "zod";

export const updatePasswordAction = async (
  formData: z.infer<typeof updatePasswordSchema>,
  code: string
) => {
  const parsed = updatePasswordSchema.safeParse(formData);
  if (!parsed.success) {
    return { validationErrors: parsed.error.format() };
  }

  // Update user's password
  return { success: true };
};
