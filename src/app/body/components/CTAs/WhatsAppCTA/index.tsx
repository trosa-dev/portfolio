"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
	const phone = "5551991525157";
	const message = "Hello! I'm interested in your work.";
	const whatsAppUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
		message
	)}`;

	return (
		<a
			href={whatsAppUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
			aria-label="Contact on WhatsApp"
		>
			<MessageCircle size={24} />
		</a>
	);
};

export default WhatsAppCTA;
