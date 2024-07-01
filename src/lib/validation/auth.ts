import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email")
    .transform((value) => value.trim()),
  password: z.string().min(1, "This is a required field"),
});

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email")
    .transform((value) => value.trim()),
  password: z
    .string()
    .min(1, "This is a required field")
    .refine((value) => value.length >= 8, "Must be at least 8 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email")
    .transform((value) => value.trim()),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "This is a required field")
      .refine((value) => value.length >= 8, "Must be at least 8 characters"),
    confirmPassword: z.string().min(1, "This is a required field"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
