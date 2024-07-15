export enum FormType {
  Login = "login",
  SignUp = "signup",
  ResetPassword = "reset-password",
  UpdatePassword = "update-password",
}

export enum AccountType {
  Email = "email",
  Google = "google",
  Github = "github",
  Slack = "slack",
}

export interface User {
  id: string;
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  account_type: AccountType;
  google_id?: string;
  github_id?: string;
  slack_id?: string;
  avatar?: string;
}

export type ServerError = {
  message: string;
};

export interface APIResponse<T> {
  serverErrors?: ServerError | null;
  validationErrors?: Record<string, string[]> | null;
  data?: T | null;
}
