import AuthDivider from "@/components/auth/auth-divider";
import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthSignUpForm from "@/components/auth/auth-signup-form";
import GoogleSignIn from "@/components/auth/google-sign-in";
import ToggleForm from "@/components/auth/toggle-form";
import { FormType } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | AI Editor",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden p-6 md:p-0">
      <div className="w-full flex flex-col max-w-[380px] m-auto py-8">
        <AuthFormHeader formType={FormType.SignUp} />
        <p className="font-medium mb-7 text-2xl text-[#878787]">
          Optomize your content,
          <br />
          enhance writing quality, and <br />
          boost visiblity with tailored
          <br /> keywords.
        </p>
        <GoogleSignIn />
        <AuthDivider />
        <AuthSignUpForm />
        <ToggleForm formType={FormType.SignUp} />
      </div>
    </div>
  );
}
