import AuthPageHeader from "@/components/auth-page-header";
import GithubSignIn from "@/components/github-sign-in";
import GoogleSignIn from "@/components/google-sign-in";
import EmailSignIn from "@/components/email-sign-in";
import SlackSignIn from "@/components/slack-sign-in";
import FormContainer from "@/components/form/form-container";
import PageLayout from "@/components/page-layout";
import { FormType } from "@/lib/types/types";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Login | Keyword",
};

export default async function SignInPage() {
  const formType = FormType.Login;
  return (
    <PageLayout>
      <AuthPageHeader formType={formType} />
      <FormContainer>
        <EmailSignIn formType={formType} />
        <div className="border-t mt-5"></div>
        <div className="mt-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>More options</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 w-full mt-2">
                  <GoogleSignIn />
                  <GithubSignIn />
                  <SlackSignIn />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </FormContainer>
    </PageLayout>
  );
}
