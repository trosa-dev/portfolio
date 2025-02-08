"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
	const phone = "5551991525157";
	const message = "Hello! I'm interested in your work.";
	const whatsAppUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
		message
	)}`;

	return (
		<footer className="bg-gray-950 text-gray-300">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-white mb-4">My Links</h3>

						<div className="flex space-x-4">
							<a
								href="https://github.com/trosa-dev"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Github"
							>
								<Github size={20} />
							</a>
							<a
								href="https://www.linkedin.com/in/rosa-thiago/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{["Hero", "TechStacks", "Projects"].map((link) => {
								const href = `#${link}`; // cria o id correto para cada seção
								return (
									<li key={link}>
										<a
											href={href}
											className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
										>
											<ArrowRight
												size={16}
												className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
											/>
											{link}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-white font-semibold mb-4">Contact</h3>
						<ul className="space-y-3">
							<li className="flex items-center">
								<Mail size={16} className="mr-2" />
								<a
									href="mailto:thiagosrosa@gmail.com"
									className="text-gray-400 hover:text-white transition-colors"
								>
									thiagosrosa@gmail.com
								</a>
							</li>
							<li className="flex items-center">
								<FaWhatsapp size={16} className="mr-2 text-green-500" />{" "}
								{/* Ícone do WhatsApp colorido */}
								<a
									href={whatsAppUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors"
								>
									WhatsApp
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex justify-center items-center">
						<p className="text-sm text-gray-400">
							© {new Date().getFullYear()} TRosa Portfolio. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
