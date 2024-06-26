import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthPageHeader from "@/components/auth/auth-page-header";
import AuthSignUpForm from "@/components/auth/auth-signup-form";
import DiscordSignIn from "@/components/auth/discord-sign-in";
import GithubSignIn from "@/components/auth/github-sign-in";
import GoogleSignIn from "@/components/auth/google-sign-in";
import FormContainer from "@/components/form-container";
import PageLayout from "@/components/page-layout";
import TermsOfServiceAndPrivacyPolicy from "@/components/terms-privacy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormType } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | KeyQuill",
};

export default function SignUpPage() {
  return (
    <PageLayout>
      <AuthPageHeader formType={FormType.SignUp} />
      <FormContainer>
        <AuthFormHeader formType={FormType.SignUp} />
        <div className="flex flex-col space-y-2">
          <GoogleSignIn />
          <GithubSignIn />
        </div>
        <Accordion type="single" collapsible className="border-t-[1px] pt-2 mt-6">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="justify-center space-x-2 flex text-sm">
              <span>More options</span>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <div className="flex flex-col space-y-4">
                <DiscordSignIn />
                <div className="border-t-[1px] border-border pt-8">
                  <AuthSignUpForm />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <TermsOfServiceAndPrivacyPolicy />
      </FormContainer>
    </PageLayout>
  );
}
