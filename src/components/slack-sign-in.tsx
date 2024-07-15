"use client";

import { slackSignInAction } from "@/actions/auth/slack-signin-action";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SlackSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);

    try {
      await slackSignInAction();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleSignIn} className="w-full gap-2 active:scale-[0.98]">
      {isLoading ? (
        <Icons.Spinner className="size-4 animate-spin" />
      ) : (
        <>
          <Icons.Slack className="size-[22px]" />
          <span>Continue with Slack</span>
        </>
      )}
    </Button>
  );
};

export default SlackSignIn;
