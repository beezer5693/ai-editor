import AuthPageHeader from "@/components/auth-page-header";
import FormContainer from "@/components/form/form-container";
import PageLayout from "@/components/page-layout";
import ResetPassword from "@/components/reset-password";
import { FormType } from "@/lib/types/types";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reset Password | Keyword",
};

export default function ResetPasswordPage() {
  const formType = FormType.ResetPassword;
  return (
    <PageLayout>
      <AuthPageHeader formType={formType} />
      <FormContainer>
        <ResetPassword formType={formType} />
        <div className="mt-7 w-full">
          <Link
            href="/login"
            className="flex gap-0.5 group items-center text-sm text-foreground hover:underline font-medium"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">
              <ChevronLeft className="h-3.5 w-3.5" />
            </span>
            <span>Back</span>
          </Link>
        </div>
      </FormContainer>
    </PageLayout>
  );
}
