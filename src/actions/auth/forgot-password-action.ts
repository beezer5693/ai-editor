"use server";

import { Route } from "@/lib/constants";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/lib/validation/auth";
import { createClient } from "@/supabase/server";
import { headers } from "next/headers";

export async function forgotPasswordAction(values: ForgotPasswordSchema) {
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
}
