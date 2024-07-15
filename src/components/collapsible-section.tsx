import { cn } from "@/lib/utils/cn";
import React, { useRef } from "react";

type Props = {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
};

const CollapsibleSection = ({ isOpen, className, children }: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={contentRef}
      style={{ height: isOpen ? contentRef.current?.scrollHeight : "0px" }}
      className={cn(
        "w-full overflow-hidden transition-[height] duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CollapsibleSection;
