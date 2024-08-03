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
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { generateRg } from "@/services/rg-generator";

const rgSchema = z.object({
	format: z.boolean()
});

type RgFormValues = z.infer<typeof rgSchema>;

export default function RgGenerator() {
	const form = useForm<RgFormValues>({
		resolver: zodResolver(rgSchema),
		defaultValues: {
			format: true,
		},
	});

	const [generatedRg, setGeneratedRg] = useState("");

	const { toast } = useToast()

	const onSubmit = (data: RgFormValues) => {
		console.log("Form submitted");
		console.log(data);
		try {
			const Rg = generateRg(data);
			setGeneratedRg(Rg); // Exemplo de senha gerada
			handleCopyToClipboard(Rg);
		} catch (err) {
			toast({
				title: "RG Generator",
				description: "Error generating RG"
			});
		}
	};

	const handleCopyToClipboard = (content: string) => {
		copyToClipboard(content);
		toast({
			title: "RG Generator",
			description: "RG copied"
		});
	}

	return (
		<main className="flex justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>RG Generator</CardTitle>
					<CardDescription>Generate a new RG.</CardDescription>
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
												<FormLabel htmlFor="format">Format RG</FormLabel>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<FormLabel htmlFor="rg">Generated RG</FormLabel>
								<div className="flex gap-2">
									<Input id="rg" type="text" value={generatedRg} readOnly />
									<Button type="button" onClick={() => handleCopyToClipboard(generatedRg)}>Copy</Button>
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
