export enum Route {
  Root = "/",
  Login = "/login",
  Signup = "/signup",
  ForgotPassword = "/forgot-password",
  ResetPassword = "/reset-password",
  Dashboard = "/dashboard",
}

export enum FormType {
  Login = "login",
  SignUp = "signup",
  ForgotPassword = "forgot-password",
  ResetPassword = "reset-password",
}

export const Cookies = {
  PreferredSignInOption: "preferred-signin-option",
};

export const AuthProvider = {
  Google: "google",
  Github: "github",
  Slack: "slack",
};
