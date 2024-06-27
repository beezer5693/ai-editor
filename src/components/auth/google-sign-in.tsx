"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { AuthProvider } from "@/utils/constants";
import { createClient } from "@/supabase/client";
import { Provider } from "@supabase/supabase-js";

export default function GoogleSignIn() {
  const supabase = createClient();

  const handleSignIn = async () => {
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
      <Icons.Google className="h-5 w-5" />
      <span>Continue with Google</span>
    </Button>
  );
}
