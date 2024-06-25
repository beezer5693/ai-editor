import React from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

type PasswordVisibilityToggleProps = {
  visible: boolean;
  toggleVisibility: () => void;
};

export default function PasswordVisibilityToggle({
  visible,
  toggleVisibility,
}: PasswordVisibilityToggleProps) {
  return (
    <div
      onClick={toggleVisibility}
      className="absolute flex items-center transition-colors justify-center text-muted-foreground/30 hover:text-muted-foreground right-0 top-1/2 h-full w-9 -translate-y-1/2"
    >
      {visible ? <IoEyeSharp /> : <IoEyeOffSharp />}
    </div>
  );
}
