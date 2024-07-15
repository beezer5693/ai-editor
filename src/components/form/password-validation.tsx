import { Icons } from "@/components/icons";
import { type PasswordValidation } from "@/hooks/use-password-validation";
import { cn } from "@/lib/utils/cn";

type Props = {
  passwordValidation: PasswordValidation[];
};

const PasswordValidation = ({ passwordValidation }: Props) => {
  return (
    <ul className="flex flex-col gap-1 pt-1">
      {passwordValidation.map((validation) => (
        <li
          key={validation.text}
          className={cn(
            "flex items-center gap-1 text-xs font-medium text-muted-foreground/80",
            {
              "text-muted-foreground": validation.isValid,
            }
          )}
        >
          <Icons.Dot
            className={cn("size-3.5 text-muted-foreground/50", {
              "text-green-500": validation.isValid,
            })}
          />
          {validation.text}
        </li>
      ))}
    </ul>
  );
};

export default PasswordValidation;
