import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthLoginForm from "@/components/auth/auth-login-form";
import AuthDivider from "@/components/auth/auth-divider";
import GoogleSignIn from "@/components/auth/google-sign-in";
import ToggleForm from "@/components/auth/toggle-form";
import { FormType } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | AI Editor",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden p-6 md:p-0">
      <div className="w-full flex flex-col max-w-[380px] m-auto py-8">
        <AuthFormHeader formType={FormType.Login} />
        <p className="font-medium mb-7 text-2xl text-[#878787]">
          Optomize your content,
          <br />
          enhance writing quality, and <br />
          boost visiblity with tailored
          <br /> keywords.
        </p>
        <GoogleSignIn />
        <AuthDivider />
        <AuthLoginForm />
        <ToggleForm formType={FormType.Login} />
      </div>
    </div>
  );
}
