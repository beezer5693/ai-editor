"use client";

import { signUpAction } from "@/actions/auth/sign-up-action";
import CollapsibleSection from "@/components/collapsible-section";
import FormActionButton from "@/components/form/form-action-button";
import FormHeader from "@/components/form/form-header";
import PasswordValidation from "@/components/form/password-validation";
import PasswordVisibilityToggle from "@/components/form/password-visibility-toggle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePasswordValidation } from "@/hooks/use-password-validation";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { GENERIC_SERVER_ERROR_MESSAGE } from "@/lib/constants/constants";
import { displayValidationErrors } from "@/lib/helpers/form-helpers";
import { FormType, ServerError } from "@/lib/types/types";
import { signUpSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import ErrorMessageCard from "./form/error-message-card";

type Props = {
  formType: FormType;
};

export const EmailSignUp = ({ formType }: Props) => {
  const [serverError, setServerError] = useState<ServerError | null>(null);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    passwordValidation,
    showValidation,
    setShowValidation,
    handlePasswordValidation,
  } = usePasswordValidation();

  const { isSubmitting } = useFormState(form);

  const { visible, toggleVisibility } = usePasswordVisibility();

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      const result = await signUpAction(values);

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
          className="space-y-3.5 w-full"
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
          <div>
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
                        placeholder="Create a password"
                        onFocus={() => setShowValidation(true)}
                        type={visible ? "text" : "password"}
                        disabled={isSubmitting}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handlePasswordValidation(e.target.value);
                        }}
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
            <CollapsibleSection isOpen={showValidation}>
              <div className="py-2">
                <PasswordValidation passwordValidation={passwordValidation} />
              </div>
            </CollapsibleSection>
          </div>
          <div className="pt-2">
            <FormActionButton formType={formType} isSubmitting={isSubmitting} />
          </div>
        </form>
      </Form>
    </>
  );
};

export default EmailSignUp;
