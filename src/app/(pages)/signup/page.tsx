import AuthFormHeader from "@/components/auth-form-header";
import AuthPageHeader from "@/components/auth-page-header";
import FormContainer from "@/components/form-container";
import GithubSignIn from "@/components/github-sign-in";
import GoogleSignIn from "@/components/google-sign-in";
import PageLayout from "@/components/page-layout";
import SignUpForm from "@/components/signup-form";
import SlackSignIn from "@/components/slack-sign-in";
import ToggleForm from "@/components/toggle-form";
import { FormType } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | Keyword",
};

export default function SignUpPage() {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.SignUp} />
        <SignUpForm />
        <div className="flex items-center gap-4 mt-6 mb-3">
          <div className="border-t-[1px] w-full"></div>
          <div className="flex-none text-xs text-foreground">OR</div>
          <div className="border-t-[1px] w-full"></div>
        </div>
        <div className="space-y-2">
          <GoogleSignIn />
          <GithubSignIn />
          <SlackSignIn />
        </div>
        <ToggleForm formType={FormType.SignUp} />
      </FormContainer>
    </PageLayout>
  );
}
