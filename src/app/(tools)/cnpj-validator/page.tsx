"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { isValidCNPJ } from "@/services/validators/cnpj-validator/cnpj-validator";

const cnpjSchema = z.object({
  cnpj: z.string().min(11, "CNPJ must be at least 11 characters long").max(14, "CNPJ must be at most 14 characters long"),
});

type CNPJFormValues = z.infer<typeof cnpjSchema>;

export default function CNPJValidator() {
  const form = useForm<CNPJFormValues>({
    resolver: zodResolver(cnpjSchema),
    defaultValues: {
      cnpj: '',
    },
  });

  const [validationResult, setValidationResult] = useState<boolean | null>(null);

  const handleChange = (value: string) => {
    form.setValue("cnpj", value);
    if (value.length >= 11) {
      setValidationResult(isValidCNPJ(value));
    } else {
      setValidationResult(null);
    }
  };

  return (
    <main className="flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>CNPJ Validator</CardTitle>
          <CardDescription>Enter a CNPJ to validate.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form className="space-y-4">
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
                    <FormControl>
                      <Input
                        id="cnpj"
                        type="text"
                        {...field}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Enter CNPJ"
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="mt-2 text-sm">
                      {validationResult != null && (
                        <span className={validationResult ? "text-success" : "text-error"}>
                          {validationResult ? '✅ CNPJ is valid' : '❌ CNPJ is invalid'}
                        </span>
                      )}
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </form>
        </Form>
      </Card>
    </main>
  );
}
