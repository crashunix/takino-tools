"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

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
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePassword } from "@/services/password-generator/password-generator";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const passwordSchema = z.object({
  length: z.number().min(8, "Password length must be at least 8").max(64, "Password length must be at most 64"),
  lowercase: z.boolean(),
  uppercase: z.boolean(),
  numbers: z.boolean(),
  symbols: z.boolean(),
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function PasswordGenerator() {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      length: 8,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
    },
  });

  const [generatedPassword, setGeneratedPassword] = useState("");

	const { toast } = useToast()

  const onSubmit = (data: PasswordFormValues) => {
    console.log("Form submitted");
    console.log(data);
		try {
			const password = generatePassword(data);
			setGeneratedPassword(password); // Exemplo de senha gerada
			handleCopyToClipboard(password);
		} catch(err) {
			toast({
				title: "Password Generator",
				description: "Erro ao gerar senha"
			});
		}
  };

	const handleCopyToClipboard = (content: string) => {
		copyToClipboard(content);
		toast({
			title: "Password Generator",
			description: "Senha copiada"
		});
	}

  return (
    <main className="flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Password Generator</CardTitle>
          <CardDescription>Create a secure password.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="length">Password Length</FormLabel>
                    <FormControl>
                      <Input id="length" type="number" min="8" max="64" {...field} className="w-full max-w-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-2">
                <FormLabel>Character Types</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="lowercase"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox id="lowercase" checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel htmlFor="lowercase">Lowercase</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="uppercase"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox id="uppercase" checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel htmlFor="uppercase">Uppercase</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numbers"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox id="numbers" checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel htmlFor="numbers">Numbers</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="symbols"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox id="symbols" checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel htmlFor="symbols">Symbols</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <FormLabel htmlFor="password">Generated Password</FormLabel>
                <div className="flex gap-2">
                  <Input id="password" type="text" value={generatedPassword} readOnly />
                  <Button type="button" onClick={() => handleCopyToClipboard(generatedPassword)}>Copy</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Generate</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
