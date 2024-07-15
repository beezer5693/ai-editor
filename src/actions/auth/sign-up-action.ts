"use server";

import { generateResponse } from "@/lib/helpers/api-helpers";
import { lucia } from "@/lib/session/auth";
import { signUpSchema } from "@/lib/validation/auth";
import { registerUserUseCase } from "@/use-cases/users";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const signUpAction = async (formData: z.infer<typeof signUpSchema>) => {
  const parsed = signUpSchema.safeParse(formData);
  if (!parsed.success) {
    return generateResponse({
      validationErrors: parsed.error.flatten().fieldErrors,
    });
  }

  const user = await registerUserUseCase(formData.email, formData.password);
  if (!user) {
    return generateResponse({
      serverErrors: {
        message: "A user with the email you provided already exists.",
      },
    });
  }

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
};
