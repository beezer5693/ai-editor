import { FormType } from "@/utils/constants";
import Link from "next/link";

type ToggleFormProps = {
  formType: FormType;
};

export default function ToggleForm({ formType }: ToggleFormProps) {
  return (
    <div className="text-sm font-medium mt-4 mb-10 max-w-max text-muted-foreground">
      <p>
        {formType === FormType.Login ? (
          <>
            New to Keyword?{" "}
            <Link href="/sign-up" className="hover:underline text-primary">
              Sign up for an account
            </Link>
            .
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="hover:underline text-primary">
              Log in
            </Link>
            .
          </>
        )}
      </p>
    </div>
  );
}
