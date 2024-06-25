import AuthDivider from "@/components/auth/auth-divider";
import AuthFormHeader from "@/components/auth/auth-form-header";
import PageLayout from "@/components/page-layout";
import AuthSignUpForm from "@/components/auth/auth-signup-form";
import GoogleSignIn from "@/components/auth/google-sign-in";
import ToggleForm from "@/components/auth/toggle-form";
import FormContainer from "@/components/form-container";
import { FormType } from "@/lib/constants";
import type { Metadata } from "next";
import AuthPageHeader from "@/components/auth/auth-page-header";

export const metadata: Metadata = {
  title: "Signup | KeyQuill",
};

export default function SignUpPage() {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.SignUp} />
        <GoogleSignIn />
        <AuthDivider />
        <AuthSignUpForm />
        <ToggleForm formType={FormType.SignUp} />
      </FormContainer>
    </PageLayout>
  );
}
