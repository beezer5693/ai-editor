"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import Editor from "./editor";
import { Button } from "../ui/button";

const editorSchema = z.object({
  content: z.string(),
});

const EditorForm = () => {
  const form = useForm<z.infer<typeof editorSchema>>({
    resolver: zodResolver(editorSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (content: z.infer<typeof editorSchema>) => {
    console.log(content);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Editor onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EditorForm;
