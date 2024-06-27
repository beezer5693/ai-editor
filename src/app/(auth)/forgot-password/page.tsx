import AuthForgotPasswordForm from "@/components/auth/auth-forgotpassword-form";
import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthPageHeader from "@/components/auth/auth-page-header";
import FormContainer from "@/components/form-container";
import PageLayout from "@/components/page-layout";
import { FormType } from "@/utils/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forgot Password | Keyword",
};

export default function ForgotPasswordPage() {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.ForgotPassword} />
        <AuthForgotPasswordForm />
        <div className="text-center mt-5">
          <Link
            href="/login"
            className="text-sm text-primary hover:underline font-medium"
          >
            <span>Back to Login</span>
          </Link>
        </div>
      </FormContainer>
    </PageLayout>
  );
}
