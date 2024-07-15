import AuthPageHeader from "@/components/auth-page-header";
import FormContainer from "@/components/form/form-container";
import PageLayout from "@/components/page-layout";
import UpdatePassword from "@/components/update-password";
import { FormType } from "@/lib/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Password | Keyword",
};

export default function UpdatePasswordPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const formType = FormType.UpdatePassword;
  return (
    <PageLayout>
      <AuthPageHeader formType={formType} />
      <FormContainer>
        <UpdatePassword formType={formType} code={searchParams.code} />
      </FormContainer>
    </PageLayout>
  );
}
