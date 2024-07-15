import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const PageLayout = ({ className, children }: Props) => {
  return (
    <main
      className={cn(
        "h-screen relative flex flex-col items-center justify-center overflow-hidden px-5",
        className
      )}
    >
      {children}
    </main>
  );
};

export default PageLayout;
