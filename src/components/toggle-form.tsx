import { FormType } from "@/lib/types/types";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  formType: FormType;
};

const ToggleForm = ({ formType }: Props) => {
  const toggle = {
    signUp: (
      <Link href={"/sign-up"} className="hover:underline text-foreground">
        <Button variant="ghost" size="sm">
          Sign up
        </Button>
      </Link>
    ),
    login: (
      <Link href={"/login"} className="hover:underline text-foreground">
        <Button variant="ghost" size="sm">
          Login
        </Button>
      </Link>
    ),
  };

  return <>{formType === FormType.Login ? toggle.signUp : toggle.login}</>;
};

export default ToggleForm;
