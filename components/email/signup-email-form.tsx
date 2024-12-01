"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { confirmmail, signupmail } from "@/actions/email";
import { CardWrapper } from "@/components/email/card-wrapper";
import { FormError } from "@/components/email/form-error";
import { FormSuccess } from "@/components/email/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SignUpSchema } from "@/schemas";

export function SignUpForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      telephone: "",
      message: "",

    },
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      signupmail(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
    confirmmail(values);
  };

  return (
    <CardWrapper
      header="Ilmoittautuminen"
      headerLabel="Parisuhdetangokurssille"
      headerDates="La 26.10 ja su 27.10.2024 klo 13-15"
      headerTeachers="Opettajat: Minna Tuovinen ja Martin Heslop"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Etunimi</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Morgan"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sukunimi</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Smith"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="morgansmith@mail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Puhelin</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="0458889911"
                      type=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="block mb-3"
                  >
                    Lisätiedot
                    <span className="text-sm">&#40; esim. kumppanisi nimi &#41;</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder="Lisätiedot"
                    />
                  </FormControl>
                  <FormDescription>
                    <p className=" font-bold text-sm mt-4">
                      Laskutustapa:
                      <span className="text-sm"> Sähköpostilla</span>
                    </p>
                    <p className="font-bold text-sm">
                      Kurssin hinta:
                      <span className="text-sm">120€/pariskunta</span>
                    </p>
                    <p className="text-sm mt-4">
                      HUOM! Kurssille ilmoittaudutaan lähettämällä tämä ilmoittautumislomake. Lähetämme maksutiedot antamaasi sähköpostiosoitteeseen. Kurssille osallistuminen varmistuu kun kurssimaksu on maksettu.
                    </p>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            <PaperPlaneIcon className="h-4 w-4 mr-2" aria-hidden="true" />
            Ilmoittaudu
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
