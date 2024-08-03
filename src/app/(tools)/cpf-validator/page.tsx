"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { isValidCPF } from "@/services/validators/cpf-validator";

const cpfSchema = z.object({
  cpf: z.string().min(11, "CPF must be at least 11 characters long").max(14, "CPF must be at most 14 characters long"),
});

type CPFFormValues = z.infer<typeof cpfSchema>;

export default function CPFValidator() {
  const form = useForm<CPFFormValues>({
    resolver: zodResolver(cpfSchema),
    defaultValues: {
      cpf: '',
    },
  });

  const [validationResult, setValidationResult] = useState<boolean | null>(null);

  const handleChange = (value: string) => {
    form.setValue("cpf", value);
    if (value.length >= 11) {
      setValidationResult(isValidCPF(value));
    } else {
      setValidationResult(null);
    }
  };

  return (
    <main className="flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>CPF Validator</CardTitle>
          <CardDescription>Enter a CPF to validate.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form className="space-y-4">
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="cpf">CPF</FormLabel>
                    <FormControl>
                      <Input
                        id="cpf"
                        type="text"
                        {...field}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Enter CPF"
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="mt-2 text-sm">
                      {validationResult != null && (
                        <span className={validationResult ? "text-success" : "text-error"}>
                          {validationResult ? '✅ CPF is valid' : '❌ CPF is invalid'}
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
