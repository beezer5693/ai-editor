"use client";

import { googleSignInAction } from "@/actions/auth/google-signin-action";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);

    try {
      await googleSignInAction();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Button onClick={handleSignIn} className="w-full gap-2 active:scale-[0.98]">
      {isLoading ? (
        <Icons.Spinner className="size-4 animate-spin" />
      ) : (
        <>
          <Icons.Google className="size-5" />
          <span>Continue with Google</span>
        </>
      )}
    </Button>
  );
};

export default GoogleSignIn;
