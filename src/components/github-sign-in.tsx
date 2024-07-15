"use client";

import { githubSignInAction } from "@/actions/auth/github-signin-action";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GithubSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);

    try {
      await githubSignInAction();
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
          <Icons.Github className="size-[22px]" />
          <span>Continue with Github</span>
        </>
      )}
    </Button>
  );
};

export default GithubSignIn;
