import React, { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden p-6 md:p-0">
      {children}
    </main>
  );
}
