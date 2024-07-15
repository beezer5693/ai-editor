"use server";

import { github } from "@/lib/session/auth";
import { generateState } from "arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const TEN_MINUTES = 60 * 10;

export const githubSignInAction = async () => {
  const state = generateState();
  const url = await github.createAuthorizationURL(state, {
    scopes: ["email"],
  });

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: TEN_MINUTES,
    sameSite: "lax",
  });

  return redirect(url.toString());
};
