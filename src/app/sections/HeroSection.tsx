"use client";

import React from "react";
import { Terminal, Database, Server, Cloud } from "lucide-react";

const HeroSection = () => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gray-950">
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTIxMjEyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-[pulse_8s_ease-in-out_infinite]" />
			</div>

			{/* Animated circles background */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-[blob_7s_infinite]" />
				<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-[blob_8s_infinite]" />
				<div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-[blob_9s_infinite]" />
			</div>

			{/* Portrait/Bust Background */}
			<div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5">
				<div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10" />
				<div
					className="absolute inset-0 bg-[url('/api/placeholder/800/1200')] bg-right bg-no-repeat bg-contain opacity-50"
					style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Main content */}
					<div className="relative z-20 max-w-3xl">
						<div className="flex items-center space-x-2 text-green-500 mb-4">
							<Terminal size={24} />
							<code className="text-sm font-mono">
								~/trosa-backend-portfolio $
							</code>
						</div>

						<h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl font-mono">
							<span className="block text-green-500  mb-3 text-lg sm:text-2xl md:text-3xl">{`{ `}</span>
							<span className="block whitespace-nowrap pl-4 text-lg sm:text-3xl md:text-4xl lg:text-6xl">
								"name": "Thiago Rosa",
							</span>
							<span className="block whitespace-nowrap pl-4 text-lg sm:text-3xl md:text-4xl lg:text-6xl">
								"role": "Backend Developer",
							</span>
							<span className="block whitespace-nowrap pl-4 text-lg sm:text-3xl md:text-4xl lg:text-6xl">
								"status": "Available for Projects"
							</span>
							<span className="block text-green-500 text-lg sm:text-2xl md:text-3xl">{` }`}</span>
						</h1>

						<p className="mt-6 max-w-2xl text-gray-400 text-base sm:text-lg font-mono">
							Specializing in scalable microservices, database optimization, and
							high-performance API development.
						</p>

						{/* Tech Stack */}
						<div className="mt-8 flex flex-wrap gap-3">
							{["Node.js", "PostgreSQL", "Docker"].map((tech) => (
								<span
									key={tech}
									className="px-3 py-1.5 rounded-md bg-gray-900/80 text-gray-300 font-mono text-sm border border-gray-800 hover:border-green-500 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>

						{/* CTA Section */}
						<div className="mt-10 flex flex-col sm:flex-row gap-4">
							<button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-mono rounded hover:bg-green-700 transition-colors">
								<Terminal className="mr-2" size={20} />
								View Projects
							</button>
							<button className="inline-flex items-center px-6 py-3 bg-gray-900/80 border border-green-500 text-green-500 font-mono rounded hover:bg-green-500/10 transition-colors">
								<Cloud className="mr-2" size={20} />
								API Docs
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Add keyframes for blob animation */}
			<style jsx>{`
				@keyframes blob {
					0% {
						transform: translate(0, 0) scale(1);
					}
					33% {
						transform: translate(30px, -50px) scale(1.1);
					}
					66% {
						transform: translate(-20px, 20px) scale(0.9);
					}
					100% {
						transform: translate(0, 0) scale(1);
					}
				}
			`}</style>
		</div>
	);
};

export default HeroSection;
