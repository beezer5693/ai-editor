"use server";

import { lucia } from "@/lib/session/auth";
import { validateRequest } from "@/lib/session/validate-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
  const { session } = await validateRequest();

  if (!session) {
    return redirect("/login");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/login");
};
