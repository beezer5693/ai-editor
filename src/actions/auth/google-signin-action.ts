"use server";

import { google } from "@/lib/session/auth";
import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const TEN_MINUTES = 60 * 10;

export async function googleSignInAction() {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  cookies().set("google_oauth_state", state, {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: TEN_MINUTES,
  });

  cookies().set("google_code_verifier", codeVerifier, {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: TEN_MINUTES,
  });

  return redirect(url.toString());
}
