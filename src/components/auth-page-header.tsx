import { Icons } from "@/components/icons";
import { FormType } from "@/lib/types/types";
import Link from "next/link";
import ToggleForm from "./toggle-form";

type Props = {
  formType: FormType;
};

const AuthPageHeader = ({ formType }: Props) => {
  return (
    <div className="md:p-10 p-5 w-full flex items-center justify-between absolute top-0 left-0 right-0">
      <Link href="/" className="flex items-center gap-2 text-primary">
        <Icons.Logo />
        <p className="tracking-wider font-medium text-sm text-primary">
          keyword
        </p>
      </Link>
      {(formType === FormType.Login || formType === FormType.SignUp) && (
        <ToggleForm formType={formType} />
      )}
    </div>
  );
};

export default AuthPageHeader;
