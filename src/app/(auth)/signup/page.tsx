import AuthFormHeader from "@/components/auth-form-header";
import AuthPageHeader from "@/components/auth-page-header";
import FormContainer from "@/components/form-container";
import GithubSignIn from "@/components/github-sign-in";
import GoogleSignIn from "@/components/google-sign-in";
import OtpSignIn from "@/components/otp-sign-in";
import PageLayout from "@/components/page-layout";
import SlackSignIn from "@/components/slack-sign-in";
import TermsOfServiceAndPrivacyPolicy from "@/components/terms-privacy";
import ToggleForm from "@/components/toggle-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormType } from "@/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | Keyword",
};

export default function SignUpPage() {
  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.Signup} />
        <div className="flex flex-col space-y-2">
          <GoogleSignIn />
          <GithubSignIn />
        </div>
        <Accordion
          type="single"
          collapsible
          className="border-t-[1px] pt-2 mt-4"
        >
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="justify-center space-x-2 flex text-sm">
              <span>More options</span>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <div className="flex flex-col space-y-4">
                <SlackSignIn />
                <div className="border-t-[1px] border-border pt-8">
                  <OtpSignIn />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <TermsOfServiceAndPrivacyPolicy />
        <ToggleForm formType={FormType.Signup} />
      </FormContainer>
    </PageLayout>
  );
}
