import { cn } from "@/lib/utils/cn";
import React from "react";
import { IoWarningOutline } from "react-icons/io5";

type Props = {
  errorMessage: string;
  className?: string;
};

const ErrorMessageCard = ({ errorMessage, className }: Props) => {
  return (
    <div
      className={cn(
        "py-3 px-4 border border-destructive bg-destructive/10 flex items-center gap-3 rounded-md",
        className
      )}
    >
      <span>
        <IoWarningOutline className="text-destructive size-7" />
      </span>
      <span className="text-sm font-medium">{errorMessage}</span>
    </div>
  );
};

export default ErrorMessageCard;
