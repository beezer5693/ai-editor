import { FormType } from "@/lib/constants";
import Link from "next/link";
import React from "react";

type ToggleFormProps = {
  formType: FormType;
};

export default function ToggleForm({ formType }: ToggleFormProps) {
  return (
    <div className="text-primary text-sm hover:underline font-medium">
      <Link href={formType === FormType.Login ? "/sign-up" : "/login"}>
        {formType === FormType.Login
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </Link>
    </div>
  );
}
