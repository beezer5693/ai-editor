"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/client";
import { AuthProvider } from "@/utils/constants";
import { Provider } from "@supabase/supabase-js";
import { useState } from "react";

const GithubSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();

  const handleSignIn = async () => {
    setIsLoading(true);

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
      className="w-full gap-2 active:scale-[0.98] fill-secondary"
    >
      {isLoading ? (
        <Icons.Spinner className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Icons.Github className="h-6 w-6" />
          <span>Continue with Github</span>
        </>
      )}
    </Button>
  );
};

export default GithubSignIn;
