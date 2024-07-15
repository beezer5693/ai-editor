import AuthPageHeader from "@/components/auth-page-header";
import GithubSignIn from "@/components/github-sign-in";
import GoogleSignIn from "@/components/google-sign-in";
import EmailSignUp from "@/components/email-sign-up";
import SlackSignIn from "@/components/slack-sign-in";
import FormContainer from "@/components/form/form-container";
import PageLayout from "@/components/page-layout";
import TermsOfServiceAndPrivacyPolicy from "@/components/terms-privacy";
import { FormType } from "@/lib/types/types";
import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Sign up | Keyword",
};

export default function SignUpPage() {
  const formType = FormType.SignUp;
  return (
    <PageLayout>
      <AuthPageHeader formType={formType} />
      <FormContainer>
        <EmailSignUp formType={formType} />
        <div className="border-t mt-5"></div>
        <div className="mt-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>More options</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 w-full my-2">
                  <GoogleSignIn />
                  <GithubSignIn />
                  <SlackSignIn />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-3">
          <TermsOfServiceAndPrivacyPolicy />
        </div>
      </FormContainer>
    </PageLayout>
  );
}
