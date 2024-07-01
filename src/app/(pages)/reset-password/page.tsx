import AuthFormHeader from "@/components/auth-form-header";
import AuthPageHeader from "@/components/auth-page-header";
import ResetPasswordForm from "@/components/reset-password-form";
import FormContainer from "@/components/form-container";
import PageLayout from "@/components/page-layout";
import { FormType } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Keyword",
};

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.ResetPassword} />
        <ResetPasswordForm code={searchParams.code} />
      </FormContainer>
    </PageLayout>
  );
}
