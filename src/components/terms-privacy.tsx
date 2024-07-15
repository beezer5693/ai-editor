import Link from "next/link";

const TermsOfServiceAndPrivacyPolicy = () => {
  return (
    <p className="text-muted-foreground/90 text-xs text-pretty">
      By creating an account, you acknowledge that you have read and agree to
      Keyword&apos;s{" "}
      <Link href="/terms">
        <span className="underline">Terms of Service</span> and{" "}
      </Link>
      <Link href="/privacy">
        <span className="underline">Privacy Policy</span>.
      </Link>
    </p>
  );
};

export default TermsOfServiceAndPrivacyPolicy;
