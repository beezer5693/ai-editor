"use server";

import { createClient } from "@/supabase/server";
import { AuthProvider, Cookies, Route } from "@/utils/constants";
import { SignUpSchema, signUpSchema } from "@/utils/validation/auth";
import { addYears } from "date-fns";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
