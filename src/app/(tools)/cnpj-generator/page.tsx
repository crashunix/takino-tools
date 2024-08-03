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
import { generateCnpj } from "@/services/generators/cnpj-generator";

const cnpjSchema = z.object({
	format: z.boolean()
});

type CnpjFormValues = z.infer<typeof cnpjSchema>;

export default function CnpjGenerator() {
	const form = useForm<CnpjFormValues>({
		resolver: zodResolver(cnpjSchema),
		defaultValues: {
			format: true,
		},
	});

	const [generatedCnpj, setGeneratedCnpj] = useState("");

	const { toast } = useToast()

	const onSubmit = (data: CnpjFormValues) => {
		console.log("Form submitted");
		console.log(data);
		try {
			const Cnpj = generateCnpj(data);
			setGeneratedCnpj(Cnpj); // Exemplo de senha gerada
			handleCopyToClipboard(Cnpj);
		} catch (err) {
			toast({
				title: "CNPJ Generator",
				description: "Error generating CNPJ"
			});
		}
	};

	const handleCopyToClipboard = (content: string) => {
		copyToClipboard(content);
		toast({
			title: "CNPJ Generator",
			description: "CNPJ copied"
		});
	}

	return (
		<main className="flex justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>CNPJ Generator</CardTitle>
					<CardDescription>Generate a new CNPJ.</CardDescription>
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
												<FormLabel htmlFor="format">Format CNPJ</FormLabel>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<FormLabel htmlFor="cnpj">Generated CNPJ</FormLabel>
								<div className="flex gap-2">
									<Input id="cnpj" type="text" value={generatedCnpj} readOnly />
									<Button type="button" onClick={() => handleCopyToClipboard(generatedCnpj)}>Copy</Button>
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
