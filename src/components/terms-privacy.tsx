import Link from "next/link";

export default function TermsOfServiceAndPrivacyPolicy() {
  return (
    <div className="mt-6">
      <p className="text-muted-foreground/90 text-xs text-center text-pretty font-medium">
        By clicking continue, you acknowledge that you have read and agree to
        Keyword&apos;s{" "}
        <Link href="/terms-of-service">
          <span className="underline">Terms of Service</span> and{" "}
        </Link>
        <Link href="/privacy-policy">
          <span className="underline">Privacy Policy</span>.
        </Link>
      </p>
    </div>
  );
}
