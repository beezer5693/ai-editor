export enum Route {
  Root = "/",
  Login = "/login",
  Signup = "/signup",
  Dashboard = "/dashboard",
}

export enum FormType {
  Login = "login",
  Signup = "signup",
}

export const Cookies = {
  PreferredSignInOption: "preferred-signin-option",
};

export const AuthProvider = {
  Otp: "otp",
  Google: "google",
  Github: "github",
  Discord: "discord",
  Slack: "slack",
};
