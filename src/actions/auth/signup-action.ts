"use server";

import { AuthProvider, Cookies, Route } from "@/lib/constants";
import { SignUpSchema, signUpSchema } from "@/lib/validation/auth";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addYears } from "date-fns";
import { cookies } from "next/headers";

export const signupAction = async (values: SignUpSchema) => {
  const supabase = createClient();
  const cookieStore = cookies();

  const result = signUpSchema.safeParse(values);

  if (!result.success) {
    return { errors: result.error.format() };
  }

  const { email, password } = values;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  cookieStore.set(Cookies.PreferredSignInOption, AuthProvider.Email, {
    expires: addYears(new Date(), 1),
  });

  revalidatePath(Route.Dashboard, "layout");
  redirect(Route.Dashboard);
};
