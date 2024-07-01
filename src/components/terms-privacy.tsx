import Link from "next/link";

const TermsOfServiceAndPrivacyPolicy = () => {
  return (
    <div className="mt-6">
      <p className="text-muted-foreground/90 text-xs text-pretty font-medium">
        By clicking continue, you acknowledge that you have read and agree to
        Keyword&apos;s{" "}
        <Link href="/terms">
          <span className="underline">Terms of Service</span> and{" "}
        </Link>
        <Link href="/privacy">
          <span className="underline">Privacy Policy</span>.
        </Link>
      </p>
    </div>
  );
};

export default TermsOfServiceAndPrivacyPolicy;
