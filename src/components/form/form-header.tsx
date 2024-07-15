import { FormType } from "@/lib/types/types";

type Props = {
  formType: FormType;
};

const FormHeader = ({ formType }: Props) => {
  const formTitles = {
    login: {
      title: "Login to Keyword.",
      subtitle: "Boost qaulity, optimized content, and increase your traffic.",
    },
    signup: {
      title: "Sign up for Keyword.",
      subtitle: "Boost qaulity, optimized content, and increase your traffic.",
    },
    "reset-password": {
      title: "Reset your password.",
      subtitle:
        "Enter your email address and we'll send you a link to reset your password.",
    },
    "update-password": {
      title: "Update your password.",
      subtitle: "Create a new password below.",
    },
  };

  const { title, subtitle } = formTitles[formType];

  return (
    <div className="mb-9">
      <h1 className="text-[1.75rem] font-semibold mb-3">{title}</h1>
      <p className="text-2xl font-semibold text-muted-foreground text-pretty pr-7">
        {subtitle}
      </p>
    </div>
  );
};

export default FormHeader;
