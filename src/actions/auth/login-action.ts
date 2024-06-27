"use server";

import { AuthProvider, Cookies, Route } from "@/utils/constants";
import { LoginSchema, loginSchema } from "@/utils/validation/auth";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { addYears } from "date-fns";

export const loginAction = async (values: LoginSchema) => {
  const supabase = createClient();
  const cookieStore = cookies();

  const result = loginSchema.safeParse(values);

  if (!result.success) {
    return { errors: result.error.format() };
  }

  const { email, password } = values;

  const { error } = await supabase.auth.signInWithPassword({
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
