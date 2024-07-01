"use server";

import { createClient } from "@/supabase/server";
import { Route } from "@/lib/constants";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect(Route.Login);
};
