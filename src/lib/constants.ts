export enum Route {
  Root = "/",
  Login = "/login",
  Signup = "/sign-up",
  ForgotPassword = "/forgot-password",
  ResetPassword = "/reset-password",
  Dashboard = "/dashboard",
}

export enum FormType {
  Login = "login",
  SignUp = "sign-up",
  ForgotPassword = "forgot-password",
  ResetPassword = "reset-password",
}

export const formTitles = {
  login: {
    title: "Login to KeyQuill.",
    subtitle:
      "Optimize your content, enhance writing quality, and boost visibility with tailored keywords.",
  },
  "sign-up": {
    title: "Sign up for KeyQuill.",
    subtitle:
      "Optimize your content, enhance writing quality, and boost visibility with tailored keywords.",
  },
  "forgot-password": {
    title: "Forgot your password.",
    subtitle:
      "Enter your email address and we'll send you a link to reset your password.",
  },
  "reset-password": {
    title: "Reset your password.",
    subtitle: "Create a new password for your account.",
  },
};
