"use client";

import React from "react";
import { Linkedin } from "lucide-react";

const LinkedInCTA = () => {
	const linkedinUrl = "https://www.linkedin.com/in/rosa-thiago/";

	return (
		<a
			href={linkedinUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
			aria-label="Connect on LinkedIn"
		>
			<Linkedin size={24} />
		</a>
	);
};

export default LinkedInCTA;
