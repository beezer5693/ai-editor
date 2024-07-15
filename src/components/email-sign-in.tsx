"use client";

import { signInAction } from "@/actions/auth/sign-in-action";
import FormActionButton from "@/components/form/form-action-button";
import FormHeader from "@/components/form/form-header";
import PasswordVisibilityToggle from "@/components/form/password-visibility-toggle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { GENERIC_SERVER_ERROR_MESSAGE } from "@/lib/constants/constants";
import { displayValidationErrors } from "@/lib/helpers/form-helpers";
import { FormType, ServerError } from "@/lib/types/types";
import { loginSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import ErrorMessageCard from "./form/error-message-card";

type Props = {
  formType: FormType;
};

const EmailSignIn = ({ formType }: Props) => {
  const [serverError, setServerError] = useState<ServerError | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = useFormState(form);

  const { visible, toggleVisibility } = usePasswordVisibility();

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const result = await signInAction(values);

      if (result?.validationErrors) {
        displayValidationErrors(result.validationErrors, form);
      }
      if (result?.serverErrors) {
        setServerError({
          message: result.serverErrors.message,
        });
      }
    } catch (error: any) {
      setServerError({
        message: GENERIC_SERVER_ERROR_MESSAGE,
      });
    }
  };

  return (
    <>
      <FormHeader formType={formType} />
      {serverError && (
        <ErrorMessageCard className="mb-7" errorMessage={serverError.message} />
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive focus:border-destructive"
                    }
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      className={
                        form.getFieldState(field.name).error &&
                        "border-destructive focus:border-destructive"
                      }
                      placeholder="Enter your password"
                      type={visible ? "text" : "password"}
                      disabled={isSubmitting}
                      {...field}
                    />
                    <PasswordVisibilityToggle
                      visible={visible}
                      toggleVisibility={toggleVisibility}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Link
              href="/reset-password"
              className="text-sm hover:underline text-foreground font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <div className="pt-3">
            <FormActionButton formType={formType} isSubmitting={isSubmitting} />
          </div>
        </form>
      </Form>
    </>
  );
};

export default EmailSignIn;
