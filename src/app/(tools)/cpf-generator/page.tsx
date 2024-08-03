"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { generateCpf } from "@/services/generators/cpf-generator";

const cpfSchema = z.object({
	format: z.boolean()
});

type CpfFormValues = z.infer<typeof cpfSchema>;

export default function CpfGenerator() {
	const form = useForm<CpfFormValues>({
		resolver: zodResolver(cpfSchema),
		defaultValues: {
			format: true,
		},
	});

	const [generatedCpf, setGeneratedCpf] = useState("");

	const { toast } = useToast()

	const onSubmit = (data: CpfFormValues) => {
		console.log("Form submitted");
		console.log(data);
		try {
			const Cpf = generateCpf(data);
			setGeneratedCpf(Cpf); // Exemplo de senha gerada
			handleCopyToClipboard(Cpf);
		} catch (err) {
			toast({
				title: "CPF Generator",
				description: "Error generating CPF"
			});
		}
	};

	const handleCopyToClipboard = (content: string) => {
		copyToClipboard(content);
		toast({
			title: "CPF Generator",
			description: "CPF copied"
		});
	}

	return (
		<main className="flex justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>CPF Generator</CardTitle>
					<CardDescription>Generate a new CPF.</CardDescription>
				</CardHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<CardContent className="space-y-4">
							<div className="grid gap-2">
								<FormLabel>Options</FormLabel>
								<div className="grid grid-cols-2 gap-2">
									<FormField
										control={form.control}
										name="format"
										render={({ field }) => (
											<FormItem className="flex items-center gap-2">
												<FormControl>
													<Checkbox id="format" checked={field.value} onCheckedChange={field.onChange} />
												</FormControl>
												<FormLabel htmlFor="format">Format CPF</FormLabel>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<FormLabel htmlFor="cpf">Generated CPF</FormLabel>
								<div className="flex gap-2">
									<Input id="cpf" type="text" value={generatedCpf} readOnly />
									<Button type="button" onClick={() => handleCopyToClipboard(generatedCpf)}>Copy</Button>
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
