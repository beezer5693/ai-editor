import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-screen relative flex flex-col items-center justify-center overflow-hidden p-5">
      {children}
    </main>
  );
};

export default PageLayout;
