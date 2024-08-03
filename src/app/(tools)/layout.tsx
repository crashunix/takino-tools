import { Button } from "@/components/ui/button";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div className="container mx-auto px-4">
				{children}
			</div>
		</div>
	);
}
