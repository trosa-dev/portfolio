"use client";

import React, { ReactNode } from "react";
import CTAs from "./components/CTAs";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

interface BodyProps {
	children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
	return (
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
			<CTAs />
			{children}
		</body>
	);
};

export default Body;
