"use server";

import { Route } from "@/lib/constants";
import { SignUpSchema, signUpSchema } from "@/lib/validation/auth";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signupAction(values: SignUpSchema) {
  const result = signUpSchema.safeParse(values);

  if (!result.success) {
    return { errors: result.error.format() };
  }

  const supabase = createClient();

  const { firstName, lastName, email, password } = values;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (error) throw error;

  revalidatePath(Route.Dashboard, "layout");
  redirect(Route.Dashboard);
}
