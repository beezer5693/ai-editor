import { getFormTitle } from "@/lib/helpers/form-helpers";

type AuthFormHeaderProps = {
  formType: string;
};

export default function AuthFormHeader({ formType }: AuthFormHeaderProps) {
  const title = getFormTitle(formType);

  return (
    <div className="text-primary inline-block mb-4">
      <h1 className="text-3xl font-medium">{title}</h1>
    </div>
  );
}
