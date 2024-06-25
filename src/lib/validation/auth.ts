import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
  password: z.string().min(1, "Password is a required field"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
  password: z
    .string()
    .min(1, "Password is a required field")
    .refine(
      (value) => value.length >= 8,
      "Password must be at least 8 characters"
    ),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is a required field")
      .refine(
        (value) => value.length >= 8,
        "Password must be at least 8 characters"
      ),
    confirmPassword: z.string().min(1, "Confirm password is a required field"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
