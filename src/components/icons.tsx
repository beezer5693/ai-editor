import { Loader2 } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaGoogle, FaSlack } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
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
  Google: (props: any) => <FaGoogle {...props} />,
  Visible: (props: any) => <IoEyeSharp {...props} />,
  NonVisible: (props: any) => <IoEyeOffSharp {...props} />,
  Dot: (props: any) => <GoDotFill {...props} />,
  Spinner: (props: any) => <Loader2 {...props} />,
};
