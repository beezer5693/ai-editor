import React, { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col max-w-[380px] m-auto py-8">
      {children}
    </div>
  );
}
