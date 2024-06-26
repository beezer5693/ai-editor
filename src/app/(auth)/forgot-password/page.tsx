import React from "react";
import PageLayout from "@/components/page-layout";
import AuthPageHeader from "@/components/auth/auth-page-header";
import FormContainer from "@/components/form-container";
import AuthFormHeader from "@/components/auth/auth-form-header";
import { FormType } from "@/lib/constants";
import AuthForgotPasswordForm from "@/components/auth/auth-forgotpassword-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | KeyQuill",
};

export default function ForgotPasswordPage() {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.ForgotPassword} />
        <AuthForgotPasswordForm />
        <div className="text-center mt-5">
          <Link href="/login" className="text-sm text-primary hover:underline font-medium">
            <span>Back to Login</span>
          </Link>
        </div>
      </FormContainer>
    </PageLayout>
  );
}
