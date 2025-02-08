import type { Metadata } from "next";
import Body from "./body";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Thiago Rosa - Portfolio",
	description:
		"Personal portfolio of Thiago Rosa, showcasing skills and projects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Body>{children}</Body>
		</html>
	);
}
