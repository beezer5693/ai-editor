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
  Signup = "signup",
  ForgotPassword = "forgot-password",
  ResetPassword = "reset-password",
}

export const formTitles = {
  login: {
    title: "Login to keyword.",
    subtitle:
      "Optimize your content, enhance writing quality, and boost visibility.",
  },
  signup: {
    title: "Sign up for keyword.",
    subtitle:
      "Optimize your content, enhance writing quality, and boost visibility.",
  },
  "forgot-password": {
    title: "Forgot your password?",
    subtitle:
      "Enter your email address and we'll send you a link to reset your password.",
  },
  "reset-password": {
    title: "Reset your password.",
    subtitle: "Create a new password for your account.",
  },
};

export const Cookies = {
  PreferredSignInOption: "preferred-signin-option",
};

export const AuthProvider = {
  Email: "email",
  Google: "google",
  Github: "github",
  Discord: "discord",
  Slack: "slack",
};
