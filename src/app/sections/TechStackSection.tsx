// TechStack.tsx
import React, { useState } from "react";
import { Terminal, Database, Server } from "lucide-react";
import { Technology, TechStackProps } from "../../types";

const TechStackSection: React.FC<TechStackProps> = ({ onTechSelect }) => {
	const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set());

	const technologies: Technology[] = [
		{
			category: "Backend",
			icon: <Server className="text-green-500" size={24} />,
			techs: ["Node.js", "Express", "NestJS", "Python", "Django"],
		},
		{
			category: "Database",
			icon: <Database className="text-green-500" size={24} />,
			techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ElasticSearch"],
		},
		{
			category: "DevOps",
			icon: <Terminal className="text-green-500" size={24} />,
			techs: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
		},
	];

	const handleTechClick = (tech: string): void => {
		const newSelected = new Set(selectedTechs);
		if (newSelected.has(tech)) {
			newSelected.delete(tech);
		} else {
			newSelected.add(tech);
		}
		setSelectedTechs(newSelected);
		onTechSelect(Array.from(newSelected));
	};

	return (
		<div className="bg-gray-950 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-white font-mono mb-4">
						Tech Stack
					</h2>
					<p className="text-gray-400 font-mono">
						Select technologies to filter projects
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{technologies.map((tech) => (
						<div
							key={tech.category}
							className="p-6 rounded-lg bg-gray-900/80 border border-gray-800 hover:border-green-500 transition-all duration-300"
						>
							<div className="flex items-center mb-4">
								{tech.icon}
								<h3 className="text-xl font-mono text-white ml-2">
									{tech.category}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{tech.techs.map((item) => (
									<button
										key={item}
										onClick={() => handleTechClick(item)}
										className={`px-3 py-1.5 rounded-md font-mono text-sm border transition-colors ${
											selectedTechs.has(item)
												? "bg-green-500/20 text-green-400 border-green-500"
												: "bg-gray-800/80 text-gray-300 border-gray-700 hover:border-green-500"
										}`}
									>
										{item}
									</button>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStackSection;
