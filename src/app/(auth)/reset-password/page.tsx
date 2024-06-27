import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthPageHeader from "@/components/auth/auth-page-header";
import AuthResetPasswordForm from "@/components/auth/auth-resetpassword-form";
import FormContainer from "@/components/form-container";
import PageLayout from "@/components/page-layout";
import { FormType } from "@/utils/constants";
import { Metadata } from "next";
import React from "react";

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
        <AuthResetPasswordForm code={searchParams.code} />
      </FormContainer>
    </PageLayout>
  );
}
