import { Loader2 } from "lucide-react";
import Image from "next/image";
import { BsGoogle } from "react-icons/bs";
import { FaDiscord, FaGithub, FaSlack } from "react-icons/fa6";
import logoDark from "../../public/assets/logo-dark.png";
import logoLight from "../../public/assets/logo-light.png";

export const Icons = {
  Logo: () => (
    <>
      <Image
        className="hidden dark:block"
        src={logoLight}
        height={25}
        width={25}
        alt="app logo"
      />
      <Image
        className="block dark:hidden"
        src={logoDark}
        height={25}
        width={25}
        alt="app logo"
      />
    </>
  ),
  Github: (props: any) => <FaGithub {...props} />,
  Slack: (props: any) => <FaSlack {...props} />,
  Google: (props: any) => <BsGoogle {...props} />,
  Discord: (props: any) => <FaDiscord {...props} />,
  Spinner: (props: any) => <Loader2 {...props} />,
};
