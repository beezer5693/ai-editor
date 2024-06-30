"use server";

import { createClient } from "@/supabase/server";
import { AuthProvider, Cookies, Route } from "@/utils/constants";
import { otpSchema } from "@/utils/validation/auth";
import { addYears } from "date-fns";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const otpAction = async (
  values: z.infer<typeof otpSchema>,
  otpSent: boolean
) => {
  const supabase = createClient();
  const cookieStore = cookies();

  const result = otpSchema.safeParse(values);

  if (!result.success) {
    return { errors: result.error.format() };
  }

  console.log(values);

  const { email, otp } = values;

  if (!otpSent) {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
      },
    });

    if (error) throw error;
  } else {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp!,
      type: "email",
    });

    if (error) throw error;

    cookieStore.set(Cookies.PreferredSignInOption, AuthProvider.Otp, {
      expires: addYears(new Date(), 1),
    });

    revalidatePath(Route.Dashboard, "layout");
    redirect(Route.Dashboard);
  }
};
