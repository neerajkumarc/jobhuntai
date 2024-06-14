import Header from "@/components/Header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="relative h-screen w-full flex">
			<Header />
			<div className="h-screen lg:w-[80vw] overflow-scroll">
				{children}
			</div>
		</main>
	);
}
