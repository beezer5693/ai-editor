"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForgotPasswordForm } from "@/hooks/use-forgotpassword-form";

export default function AuthForgotPasswordForm() {
  const { form, handleSubmit, onSubmit, isSuccess, isSubmitting } = useForgotPasswordForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
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
                    disabled={isSubmitting || isSuccess}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? <Icons.Spinner className="h-4 w-4 animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
