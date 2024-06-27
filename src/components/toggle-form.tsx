import { FormType, Route } from "@/utils/constants";
import Link from "next/link";

type ToggleFormProps = {
  formType: FormType;
};

export default function ToggleForm({ formType }: ToggleFormProps) {
  return (
    <div className="text-[.85rem] font-medium mt-6 text-center text-muted-foreground">
      <p>
        {formType === FormType.Login ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href={Route.Signup} className="underline text-primary">
              Sign up
            </Link>
            .
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href={Route.Login} className="underline text-primary">
              Log in
            </Link>
            .
          </>
        )}
      </p>
    </div>
  );
}
