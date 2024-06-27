import Link from "next/link";
import { Icons } from "../icons";

export default function AuthPageHeader() {
  return (
    <div className="md:p-10 p-5 w-full flex items-center justify-between absolute top-0 left-0 right-0">
      <Link href="/" className="flex items-center gap-2 text-primary">
        <Icons.Logo />
        <p className="tracking-wider font-medium text-sm text-primary">
          keyword
        </p>
      </Link>
    </div>
  );
}
