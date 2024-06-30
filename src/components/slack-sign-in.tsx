"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/client";
import { AuthProvider } from "@/utils/constants";
import { Provider } from "@supabase/supabase-js";
import { useState } from "react";

const SlackSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();

  const handleSignIn = async () => {
    setIsLoading(true);

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
      className="w-full gap-2 active:scale-[0.98] fill-secondary"
    >
      {isLoading ? (
        <Icons.Spinner className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Icons.Slack className="h-6 w-6" />
          <span>Continue with Slack</span>
        </>
      )}
    </Button>
  );
};

export default SlackSignIn;
