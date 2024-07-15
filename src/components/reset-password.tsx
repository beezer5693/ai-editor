"use client";

import FormActionButton from "@/components/form/form-action-button";
import FormHeader from "@/components/form/form-header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { FormType } from "@/lib/types/types";
import { resetPasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

type Props = {
  formType: FormType;
};

const ResetPassword = ({ formType }: Props) => {
  // Once form has been submitted successfully, disable input field and button
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = useFormState(form);

  const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    try {
      setFormSubmitted(true);

      form.reset();
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
                    disabled={isSubmitting || formSubmitted}
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

export default ResetPassword;
