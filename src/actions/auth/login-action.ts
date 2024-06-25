"use server";

import { Route } from "@/lib/constants";
import { LoginSchema, loginSchema } from "@/lib/validation/auth";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(values: LoginSchema) {
  const result = loginSchema.safeParse(values);

  if (!result.success) {
    return { errors: result.error.format() };
  }

  const supabase = createClient();

  const { email, password } = values;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  revalidatePath(Route.Dashboard, "layout");
  redirect(Route.Dashboard);
}
