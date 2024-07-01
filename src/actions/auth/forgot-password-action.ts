"use server";

import { createClient } from "@/supabase/server";
import { Route } from "@/lib/constants";
import { forgotPasswordSchema } from "@/lib/validation/auth";
import { headers } from "next/headers";
import { z } from "zod";

export const forgotPasswordAction = async (
  values: z.infer<typeof forgotPasswordSchema>
) => {
  const supabase = createClient();

  const result = forgotPasswordSchema.safeParse(values);

  if (!result.success) {
    return { errors: result.error.format() };
  }

  const { email } = values;

  const origin = headers().get("origin");

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}${Route.ResetPassword}`,
  });

  if (error) throw error;
};
