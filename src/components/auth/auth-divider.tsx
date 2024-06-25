import React from "react";

export default function AuthDivider() {
  return (
    <div className="flex items-center gap-3 mt-6 mb-5">
      <div className="w-full border-t border-input"></div>
      <div className="text-xs font-medium">OR</div>
      <div className="w-full border-t border-input"></div>
    </div>
  );
}
