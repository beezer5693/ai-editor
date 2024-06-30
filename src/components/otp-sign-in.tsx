"use client";

import { otpAction } from "@/actions/auth/otp-action";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { displayFormErrors } from "@/utils/helpers/form-helpers";
import { cn } from "@/utils/utils";
import { otpSchema } from "@/utils/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

const OtpSignIn = () => {
  const [otpSent, setOtpSent] = useState(false);

  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  const { toast } = useToast();
  const { isSubmitting } = useFormState(form);

  const onSubmit = async (values: z.infer<typeof otpSchema>) => {
    try {
      const result = await otpAction(values, otpSent);

      if (result?.errors) {
        displayFormErrors(result.errors, form);
      }

      setOtpSent(true);
    } catch (error: any) {
      toast({
        title: "There was a problem!",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <div
          className={cn({
            hidden: otpSent,
            block: !otpSent,
          })}
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
        </div>
        <div
          className={cn({
            hidden: !otpSent,
            block: otpSent,
          })}
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.getFieldState(field.name).error &&
                      "border-destructive focus:border-destructive"
                    }
                    placeholder="Enter code"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription>We sent a code to your inbox.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-1">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Icons.Spinner className="h-4 w-4 animate-spin" />
            ) : (
              <span>Continue</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OtpSignIn;
