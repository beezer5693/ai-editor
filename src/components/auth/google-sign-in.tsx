import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function GoogleSignIn() {
  return (
    <Button className="w-full gap-2">
      <span>
        <Icons.Google />
      </span>
      <span>Continue with Google</span>
    </Button>
  );
}
