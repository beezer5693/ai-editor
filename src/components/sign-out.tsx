"use client";

import { signOutAction } from "@/actions/auth/sign-out-action";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const SignOut = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);

    await signOutAction();
  };

  return (
    <DropdownMenuItem onClick={(e) => handleSignOut(e)}>
      <div className="flex items-center gap-1.5">
        {isLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
        <span className="text-sm font-medium">
          {isLoading ? "Signing out..." : "Sign out"}
        </span>
      </div>
    </DropdownMenuItem>
  );
};

export default SignOut;
