import { FormType, Route } from "@/lib/constants";
import Link from "next/link";

type Props = {
  formType: FormType;
};

const toggle = {
  signup: (
    <>
      Don&apos;t have an account?{" "}
      <Link href={Route.Signup} className="hover:underline text-foreground">
        Sign up
      </Link>
      .
    </>
  ),
  login: (
    <>
      Already have an account?{" "}
      <Link href={Route.Login} className="hover:underline text-foreground">
        Log in
      </Link>
      .
    </>
  ),
};

const ToggleForm = ({ formType }: Props) => {
  return (
    <div className="text-sm font-medium mt-8 text-center text-muted-foreground">
      <p>{formType === FormType.Login ? toggle.signup : toggle.login}</p>
    </div>
  );
};

export default ToggleForm;
