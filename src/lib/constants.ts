export type Routes = {
  Home: string;
  Login: string;
  Signup: string;
  Dashboard: string;
};

export const Route: Routes = {
  Home: "/",
  Login: "/login",
  Signup: "/sign-up",
  Dashboard: "/dashboard",
};

export type FormType = {
  Login: string;
  SignUp: string;
  ForgotPassword: string;
  ResetPassword: string;
};

export const FormType: FormType = {
  Login: "login",
  SignUp: "sign-up",
  ForgotPassword: "forgot-password",
  ResetPassword: "reset-password",
};
