"use client";

import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { confirmnews, newslettermail } from "@/actions/email";
import { IconSpinner } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewsletterSchema } from "@/schemas";

type Inputs = z.infer<typeof NewsletterSchema>;

export function NewsletterForm() {
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewsletterSchema>) => {
    startTransition(() => {
      newslettermail(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            toast.error("Jokin meni pieleen. Yritä myöhemmin uudelleen.");
          }

          if (data?.success) {
            form.reset();
            toast.success("Kiitos! Olet tilannut uutiskirjeemme.");
          }
        })
        .catch(() => toast.error("Jokin meni pieleen. Yritä myöhemmin uudelleen."));
    });
    confirmnews(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex"
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="on"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Sähköposti" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-icon"
          type="submit"
          disabled={isPending}
        >
          {isPending
            ? (
                <IconSpinner
                  className="h-3 w-3 animate-spin"
                  aria-hidden="true"
                />
              )
            : (
                <PaperPlaneIcon className="h-3 w-3" aria-hidden="true" />
              )}
          <span className="sr-only">Lähetä</span>
        </Button>
      </form>
    </Form>
  );
}
