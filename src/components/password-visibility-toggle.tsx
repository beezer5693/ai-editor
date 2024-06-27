import { Icons } from "@/components/icons";

type PasswordVisibilityToggleProps = {
  visible: boolean;
  toggleVisibility: () => void;
};

export default function PasswordVisibilityToggle({
  visible,
  toggleVisibility,
}: PasswordVisibilityToggleProps) {
  return (
    <div
      onClick={toggleVisibility}
      className="absolute group flex items-center transition-colors justify-center fill-muted-foreground/50 hover:fill-muted-foreground right-0 top-1/2 h-full w-9 -translate-y-1/2"
    >
      {visible ? (
        <Icons.Eye className="h-4 w-4" />
      ) : (
        <Icons.EyeOff className="h-4 w-4" />
      )}
    </div>
  );
}
