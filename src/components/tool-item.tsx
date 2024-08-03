import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Tool } from "@/types/tool";
import Link from "next/link";

type ToolItemProps = {
	tool: Tool
}

const ToolItem = ({ tool }: ToolItemProps) => {
	return <Link href={tool.path}><Card>
		<CardHeader>
			<CardTitle>{tool.name}</CardTitle>
			<CardDescription>{tool.description}</CardDescription>
		</CardHeader>
		{/* <CardContent>
			<p>Card Content</p>
		</CardContent>
		<CardFooter>
			<p>Card Footer</p>
		</CardFooter> */}
	</Card></Link>
}

export default ToolItem;