"use server";

import { createClient } from "@/supabase/server";
import { Route } from "@/lib/constants";
import { resetPasswordSchema } from "@/lib/validation/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

export const resetPasswordAction = async (
  values: z.infer<typeof resetPasswordSchema>,
  code: string
) => {
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
};
