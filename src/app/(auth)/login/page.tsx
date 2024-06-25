import PageLayout from "@/components/page-layout";
import AuthPageHeader from "@/components/auth/auth-page-header";
import FormContainer from "@/components/form-container";
import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthLoginForm from "@/components/auth/auth-login-form";
import AuthDivider from "@/components/auth/auth-divider";
import GoogleSignIn from "@/components/auth/google-sign-in";
import ToggleForm from "@/components/auth/toggle-form";
import { FormType } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | KeyQuill",
};

export default function LoginPage() {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.Login} />
        <GoogleSignIn />
        <AuthDivider />
        <AuthLoginForm />
        <ToggleForm formType={FormType.Login} />
      </FormContainer>
    </PageLayout>
  );
}
