import { FormType } from "@/lib/constants";
import Link from "next/link";
import React from "react";

type ToggleFormProps = {
  formType: FormType;
};

export default function ToggleForm({ formType }: ToggleFormProps) {
  return (
    <div className="mt-7 text-center text-primary text-sm hover:underline font-medium">
      {formType === FormType.Login ? (
        <Link href="/sign-up">Don&apos;t have an account? Sign up </Link>
      ) : (
        <Link href="/login">Already have an account? Login </Link>
      )}
    </div>
  );
}
