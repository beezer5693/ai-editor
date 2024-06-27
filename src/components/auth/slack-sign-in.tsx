"use client";

import { AuthProvider } from "@/utils/constants";
import { createClient } from "@/supabase/client";
import { Provider } from "@supabase/supabase-js";
import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function SlackSignIn() {
  const supabase = createClient();

  const handleSignIn = async () => {
    const redirectTo = new URL("/api/auth/callback", window.location.origin);
    redirectTo.searchParams.set("provider", AuthProvider.Slack);

    await supabase.auth.signInWithOAuth({
      provider: AuthProvider.Slack as Provider,
      options: {
        redirectTo: redirectTo.toString(),
      },
    });
  };

  return (
    <Button
      onClick={handleSignIn}
      className="w-full gap-2 active:scale-[0.98] text-secondary"
    >
      <Icons.Slack className="h-6 w-6" />
      <span>Continue with Slack</span>
    </Button>
  );
}
