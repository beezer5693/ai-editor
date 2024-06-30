import { FormType } from "@/utils/constants";

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
};

const AuthFormHeader = ({ formType }: Props) => {
  const { title, subtitle } = formTitles[formType];

  return (
    <div className="text-primary block mb-9">
      <h1 className="text-3xl font-semibold mb-3">{title}</h1>
      {
        <p className="font-semibold max-w-[22ch] text-2xl text-muted-foreground text-balance">
          {subtitle}
        </p>
      }
    </div>
  );
};

export default AuthFormHeader;
