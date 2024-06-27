"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { AuthProvider } from "@/utils/constants";
import { createClient } from "@/supabase/client";
import { Provider } from "@supabase/supabase-js";

export default function GithubSignIn() {
  const supabase = createClient();

  const handleSignIn = async () => {
    const redirectTo = new URL("/api/auth/callback", window.location.origin);
    redirectTo.searchParams.set("provider", AuthProvider.Github);

    await supabase.auth.signInWithOAuth({
      provider: AuthProvider.Github as Provider,
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
      <Icons.Github className="h-6 w-6" />
      <span>Continue with Github</span>
    </Button>
  );
}
