import AuthFormHeader from "@/components/auth/auth-form-header";
import AuthLoginForm from "@/components/auth/auth-login-form";
import AuthPageHeader from "@/components/auth/auth-page-header";
import DiscordSignIn from "@/components/auth/discord-sign-in";
import GithubSignIn from "@/components/auth/github-sign-in";
import GoogleSignIn from "@/components/auth/google-sign-in";
import SlackSignIn from "@/components/auth/slack-sign-in";
import FormContainer from "@/components/form-container";
import PageLayout from "@/components/page-layout";
import TermsOfServiceAndPrivacyPolicy from "@/components/terms-privacy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AuthProvider, Cookies, FormType } from "@/utils/constants";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Login | Keyword",
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
          <SlackSignIn />
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
          <SlackSignIn />
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
          <SlackSignIn />
          <div className="border-t-[1px] border-border pt-8">
            <AuthLoginForm />
          </div>
        </>
      );
      break;
    case AuthProvider.Slack:
      preferredSignInOption = <SlackSignIn />;
      moreSignInOptions = (
        <>
          <GoogleSignIn />
          <GithubSignIn />
          <DiscordSignIn />
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
          <SlackSignIn />
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
          <SlackSignIn />
          <DiscordSignIn />
          <div className="border-t-[1px] border-border pt-8">
            <AuthLoginForm />
          </div>
        </>
      );
  }

  return (
    <PageLayout>
      <AuthPageHeader />
      <FormContainer>
        <AuthFormHeader formType={FormType.Login} />
        {preferredSignInOption}
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
              <div className="flex flex-col space-y-4">{moreSignInOptions}</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <TermsOfServiceAndPrivacyPolicy />
      </FormContainer>
    </PageLayout>
  );
}
