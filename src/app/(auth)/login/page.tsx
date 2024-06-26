import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthLoginForm from "@/components/auth/auth-login-form";
import AuthPageHeader from "@/components/auth/auth-page-header";
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
import { AuthProvider, Cookies, FormType } from "@/lib/constants";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Login | KeyQuill",
};

export default async function LoginPage() {
  const cookieStore = cookies();
  const preferred = cookieStore.get(Cookies.PreferredSignInOption);

  let preferredSignInOption = null;
  let moreSignInOptions = null;

  switch (preferred?.value) {
    case AuthProvider.Google:
      preferredSignInOption = <GoogleSignIn />;
      moreSignInOptions = (
        <>
          <GithubSignIn />
          <DiscordSignIn />
          <div className="border-t-[1px] border-border pt-8">
            <AuthLoginForm />
          </div>
        </>
      );
      break;
    case AuthProvider.Github:
      preferredSignInOption = <GithubSignIn />;
      moreSignInOptions = (
        <>
          <GoogleSignIn />
          <DiscordSignIn />
          <div className="border-t-[1px] border-border pt-8">
            <AuthLoginForm />
          </div>
        </>
      );
      break;
    case AuthProvider.Discord:
      preferredSignInOption = <DiscordSignIn />;
      moreSignInOptions = (
        <>
          <GoogleSignIn />
          <GithubSignIn />
          <div className="border-t-[1px] border-border pt-8">
            <AuthLoginForm />
          </div>
        </>
      );
      break;
    case AuthProvider.Email:
      preferredSignInOption = <AuthLoginForm />;
      moreSignInOptions = (
        <>
          <GoogleSignIn />
          <GithubSignIn />
          <DiscordSignIn />
        </>
      );
      break;
    default:
      preferredSignInOption = (
        <div className="flex flex-col space-y-2">
          <GoogleSignIn />
          <GithubSignIn />
        </div>
      );
      moreSignInOptions = (
        <>
          <DiscordSignIn />
          <div className="border-t-[1px] border-border pt-8">
            <AuthLoginForm />
          </div>
        </>
      );
  }

  return (
    <PageLayout>
      <AuthPageHeader formType={FormType.Login} />
      <FormContainer>
        <AuthFormHeader formType={FormType.Login} />
        {preferredSignInOption}
        <Accordion type="single" collapsible className="border-t-[1px] pt-2 mt-6">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="justify-center space-x-2 flex text-sm">
              <span>More options</span>
            </AccordionTrigger>
            <AccordionContent className="mt-4">
              <div className="flex flex-col space-y-4">{moreSignInOptions}</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <TermsOfServiceAndPrivacyPolicy />
      </FormContainer>
    </PageLayout>
  );
}
