import { FormType, formTitles } from "@/utils/constants";

type AuthFormHeaderProps = {
  formType: FormType;
};

export default function AuthFormHeader({ formType }: AuthFormHeaderProps) {
  const { title, subtitle } = formTitles[formType as FormType];

  return (
    <div className="text-primary inline-block mb-10">
      <h1 className="text-3xl font-semibold mb-5">{title}</h1>
      <p className="font-semibold max-w-[20ch] text-2xl text-muted-foreground text-balance">
        {subtitle}
      </p>
    </div>
  );
}
