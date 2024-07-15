import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email")
    .transform((value) => value.trim().toLowerCase()),
  password: z.string().min(1, "This field is required"),
});

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email")
    .transform((value) => value.trim().toLowerCase()),
  password: z
    .string()
    .min(1, "This field is required")
    .refine((value) => value.length >= 8, "Invalid password")
    .refine((val) => /[A-Z]/.test(val), "Invalid password")
    .refine((val) => /[a-z]/.test(val), "Invalid password")
    .refine((val) => /[0-9]/.test(val), "Invalid password")
    .refine((val) => /[^A-Za-z0-9]/.test(val), "Invalid password"),
});

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email")
    .transform((value) => value.trim().toLowerCase()),
});

export const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "This field is required")
      .refine((value) => value.length >= 8, "Invalid password")
      .refine((val) => /[A-Z]/.test(val), "Invalid password")
      .refine((val) => /[a-z]/.test(val), "Invalid password")
      .refine((val) => /[0-9]/.test(val), "Invalid password")
      .refine((val) => /[^A-Za-z0-9]/.test(val), "Invalid password"),
    confirmPassword: z.string().min(1, "This field is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
