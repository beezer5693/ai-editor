import Link from "next/link";
import React from "react";

export default function TermsOfServiceAndPrivacyPolicy() {
  return (
    <div>
      <p className="text-muted-foreground/90 text-xs mt-6 text-pretty">
        By clicking continue, you acknowledge that you have read and agree to
        KeyQuill&apos;s{" "}
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
