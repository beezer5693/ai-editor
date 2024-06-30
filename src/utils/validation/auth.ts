import * as z from "zod";

export const otpSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address")
    .transform((value) => value.trim()),
  otp: z.string().optional(),
});
