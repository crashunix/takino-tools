'use client'

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

const DefaultHeader = () => {

	const pathname = usePathname()

	return <header>
		<div className="container mx-auto px-auto flex flex-col items-center py-10 relative">
			{
				pathname != '/' ?
					<Link href={'/'}>
						<Button variant={'ghost'} size={'icon'} className="absolute left-4"><ArrowLeftIcon /></Button>
					</Link>
					: null
			}
			<h1 className="text-3xl font-semibold">takino.</h1>
			<p>useful tools</p>
		</div>
	</header>;
}

export default DefaultHeader;