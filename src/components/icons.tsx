import { Loader2 } from "lucide-react";
import Image from "next/image";
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
  Github: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  ),
  Slack: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z" />
    </svg>
  ),
  Google: (props: any) => (
    <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#878787"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#B3B3B3"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#D7D7D7"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#585858"
      />
    </svg>
  ),
  Discord: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
    </svg>
  ),
  Eye: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <circle />
      <path d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
    </svg>
  ),
  EyeOff: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 00-60.57-60.57zM252.66 319.91l-60.57-60.57a64.07 64.07 0 0060.57 60.57z" />
      <path d="M256 352a96 96 0 01-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 00335 402.2l-53.61-53.6A95.84 95.84 0 01256 352zM256 160a96 96 0 0192.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 00-78.21 14.29l53.11 53.11A95.84 95.84 0 01256 160z" />
    </svg>
  ),
  Spinner: (props: any) => <Loader2 {...props} />,
};
