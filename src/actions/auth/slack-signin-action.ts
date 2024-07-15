"use server";

import { slack } from "@/lib/session/auth";
import { generateState } from "arctic";
import { redirect } from "next/navigation";

export const slackSignInAction = async () => {
  const state = generateState();

  const url = await slack.createAuthorizationURL(state, {
    scopes: ["email", "profile"],
  });

  return redirect(url.toString());
};
