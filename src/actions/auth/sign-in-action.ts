"use server";

import { generateResponse } from "@/lib/helpers/api-helpers";
import { lucia } from "@/lib/session/auth";
import { loginSchema } from "@/lib/validation/auth";
import { loginUserUseCase } from "@/use-cases/users";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const signInAction = async (formData: z.infer<typeof loginSchema>) => {
  const parsed = loginSchema.safeParse(formData);
  if (!parsed.success) {
    return generateResponse({
      validationErrors: parsed.error.flatten().fieldErrors,
    });
  }

  const user = await loginUserUseCase(formData.email, formData.password);
  if (!user) {
    return generateResponse({
      serverErrors: {
        message: "Incorrect email or password.",
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
