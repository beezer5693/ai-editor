"use server";

import { Route } from "@/lib/constants";
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "@/lib/validation/auth";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function resetPasswordAction(
  values: ResetPasswordSchema,
  code: string
) {
  const supabase = createClient();

  const result = resetPasswordSchema.safeParse(values);
  if (!result.success) {
    return { errors: result.error.format() };
  }

  const { password } = values;

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) throw error;

  const { error: updateError } = await supabase.auth.updateUser({
    password,
  });
  if (error) throw updateError;

  const { error: signOutError } = await supabase.auth.signOut();
  if (error) throw signOutError;

  redirect(Route.Login);
}
