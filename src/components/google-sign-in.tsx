"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/client";
import { AuthProvider } from "@/lib/constants";
import { Provider } from "@supabase/supabase-js";
import { useState } from "react";

const GoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();

  const handleSignIn = async () => {
    setIsLoading(true);

    const redirectTo = new URL("/api/auth/callback", window.location.origin);
    redirectTo.searchParams.set("provider", AuthProvider.Google);

    await supabase.auth.signInWithOAuth({
      provider: AuthProvider.Google as Provider,
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
      {isLoading ? (
        <Icons.Spinner className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Icons.Google className="h-5 w-5" />
          <span>Continue with Google</span>
        </>
      )}
    </Button>
  );
};

export default GoogleSignIn;
