import { FormType } from "@/lib/constants";

type Props = {
  formType: FormType;
};

const formTitles = {
  login: {
    title: "Login to keyword.",
    subtitle: (
      <>
        Optimize content, <br /> enhance writing quality, <br /> and boost
        visibility.
      </>
    ),
  },
  signup: {
    title: "Sign up for keyword.",
    subtitle: (
      <>
        Optimize content, <br /> enhance writing quality, <br /> and boost
        visibility.
      </>
    ),
  },
  "forgot-password": {
    title: "Forgot your password.",
    subtitle: "Enter your email to reset your password.",
  },
  "reset-password": {
    title: "Reset your password.",
    subtitle: "Enter your new password below.",
  },
};

const AuthFormHeader = ({ formType }: Props) => {
  const { title, subtitle } = formTitles[formType];

  return (
    <div className="text-primary block mb-9">
      <h1 className="text-2xl font-semibold mb-1">{title}</h1>
      <p className="font-semibold text-xl text-muted-foreground text-pretty">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthFormHeader;
