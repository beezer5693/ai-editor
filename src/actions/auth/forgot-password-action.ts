"use server";

import { createClient } from "@/supabase/server";
import { Route } from "@/utils/constants";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/utils/validation/auth";
import { headers } from "next/headers";

export const forgotPasswordAction = async (values: ForgotPasswordSchema) => {
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
