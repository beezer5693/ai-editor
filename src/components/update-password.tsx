"use client";

import { updatePasswordAction } from "@/actions/auth/update-password-action";
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
import { useToast } from "@/components/ui/use-toast";
import { usePasswordValidation } from "@/hooks/use-password-validation";
import { usePasswordVisibility } from "@/hooks/use-password-visibility";
import { FormType } from "@/lib/types/types";
import { updatePasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

type Props = {
  formType: FormType;
  code: string;
};

const UpdatePassword = ({ formType, code }: Props) => {
  const [showValidation, setShowValidation] = useState(false);

  const { visible, toggleVisibility } = usePasswordVisibility();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof updatePasswordSchema>>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { isSubmitting } = useFormState(form);
  const { passwordValidation, handlePasswordValidation } =
    usePasswordValidation();

  const onSubmit = async (values: z.infer<typeof updatePasswordSchema>) => {
    try {
      const result = await updatePasswordAction(values, code);

      toast({
        title: "Password reset successful!",
        description: "You can now login with your new password.",
        variant: "success",
      });
    } catch (error: any) {
      toast({
        title: "There was a problem!",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <FormHeader formType={formType} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3.5 w-full"
        >
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
                        placeholder="Create a new password"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive focus:border-destructive"
                    }
                    placeholder="Re-enter password"
                    type={visible ? "text" : "password"}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-2">
            <FormActionButton formType={formType} isSubmitting={isSubmitting} />
          </div>
        </form>
      </Form>
    </>
  );
};

export default UpdatePassword;
