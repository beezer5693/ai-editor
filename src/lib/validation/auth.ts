import * as z from "zod";
import { capitalizeFirstLetterInName } from "../utils";

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
  firstName: z
    .string()
    .min(1, "First name is a required field")
    .transform((value) => capitalizeFirstLetterInName(value).trim()),
  lastName: z
    .string()
    .min(1, "Last name is a required field")
    .transform((value) => capitalizeFirstLetterInName(value).trim()),
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
