import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
  password: z.string().min(1, "Password is a required field"),
});

export interface LoginSchema extends z.infer<typeof loginSchema> {}

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
  password: z
    .string()
    .min(1, "Password is a required field")
    .refine((value) => value.length >= 8, "Password must be at least 8 characters"),
});

export interface SignUpSchema extends z.infer<typeof signUpSchema> {}

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
});

export interface ForgotPasswordSchema extends z.infer<typeof forgotPasswordSchema> {}

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is a required field")
      .refine((value) => value.length >= 8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is a required field"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export interface ResetPasswordSchema extends z.infer<typeof resetPasswordSchema> {}
