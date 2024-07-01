import { Icons } from "./icons";

type Props = {
  visible: boolean;
  toggleVisibility: () => void;
};

export default function PasswordVisibilityToggle({
  visible,
  toggleVisibility,
}: Props) {
  return (
    <div
      onClick={toggleVisibility}
      className="absolute group flex items-center transition-colors justify-center text-muted-foreground/70 hover:text-primary right-0 pr-1 top-1/2 h-full w-9 -translate-y-1/2"
    >
      {visible ? (
        <Icons.Visible className="h-[18px] w-[18px]" />
      ) : (
        <Icons.NonVisible className="h-[18px] w-[18px]" />
      )}
    </div>
  );
}
