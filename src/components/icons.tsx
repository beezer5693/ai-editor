import React from "react";
import { Loader2 } from "lucide-react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa6";
import Image from "next/image";
import logoLight from "../../public/assets/logo-light.png";
import logoDark from "../../public/assets/logo-dark.png";

export const Icons = {
  Logo: () => (
    <>
      <Image className="hidden dark:block" src={logoLight} height={25} width={25} alt="app logo" />
      <Image className="block dark:hidden" src={logoDark} height={25} width={25} alt="app logo" />
    </>
  ),
  Github: (props: any) => <FaGithub {...props} />,
  Google: (props: any) => <FaGoogle {...props} />,
  Discord: (props: any) => <FaDiscord {...props} />,
  Spinner: (props: any) => <Loader2 {...props} />,
};
