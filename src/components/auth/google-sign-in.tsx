"use client";

import { signInWithOAuth } from "@/actions/auth/oauth-signin";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function GoogleSignIn() {
  const { toast } = useToast();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithOAuth("google");
    } catch (error: any) {
      toast({
        title: "There was a problem!",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={handleSignInWithGoogle} className="w-full gap-2">
      <span>
        <Icons.Google />
      </span>
      <span>Continue with Google</span>
    </Button>
  );
}
