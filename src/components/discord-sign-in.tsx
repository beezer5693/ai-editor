"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/client";
import { AuthProvider } from "@/lib/constants";
import { Provider } from "@supabase/supabase-js";

const DiscordSignIn = () => {
  const supabase = createClient();

  const handleSignIn = async () => {
    const redirectTo = new URL("/api/auth/callback", window.location.origin);
    redirectTo.searchParams.set("provider", AuthProvider.Discord);

    await supabase.auth.signInWithOAuth({
      provider: AuthProvider.Discord as Provider,
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
      <Icons.Discord className="h-6 w-6" />
      <span>Continue with Discord</span>
    </Button>
  );
};

export default DiscordSignIn;
