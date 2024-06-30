import { FormType, Route } from "@/utils/constants";
import Link from "next/link";

type Props = {
  formType: FormType;
};

const toggle = {
  signup: (
    <>
      Don&apos;t have an account?{" "}
      <Link href={Route.Signup} className="hover:underline text-primary">
        Sign up
      </Link>
      .
    </>
  ),
  login: (
    <>
      Already have an account?{" "}
      <Link href={Route.Login} className="hover:underline text-primary">
        Log in
      </Link>
      .
    </>
  ),
};

const ToggleForm = ({ formType }: Props) => {
  return (
    <div className="text-[.85rem] font-medium mt-6 text-center text-muted-foreground">
      <p>{formType === FormType.Login ? toggle.signup : toggle.login}</p>
    </div>
  );
};

export default ToggleForm;
