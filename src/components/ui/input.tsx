import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-muted/40 border px-3 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium font-medium focus:bg-transparent placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground/60 focus:border-ring focus-visible:ring-1 focus-visible:ring-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
