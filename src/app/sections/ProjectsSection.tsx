"use client";

import React, { useMemo } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectsSectionProps } from "../../types";
import { projects } from "../../projects";

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
	selectedTechs = [],
}) => {
	const filteredProjects = useMemo((): Project[] => {
		if (selectedTechs.length === 0) return projects;
		return projects.filter((project) =>
			selectedTechs.some((tech) => project.techs.includes(tech))
		);
	}, [selectedTechs]);

	return (
		<div className="bg-gray-950 py-16" id="Projects">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold text-white font-mono mb-4">
						Projects
					</h2>
					<p className="text-gray-400 font-mono">
						{selectedTechs.length > 0
							? `Showing projects using: ${selectedTechs.join(", ")}`
							: "All projects"}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: "easeOut",
								}}
								layout
								className="bg-gray-900/80 rounded-lg overflow-hidden border border-gray-800 hover:border-green-500 transition-all duration-300"
							>
								<motion.img
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.1 + 0.2 }}
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-white font-mono mb-2">
										{project.title}
									</h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.techs.map((tech) => (
											<motion.span
												key={tech}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{
													delay: index * 0.1 + 0.3,
													duration: 0.2,
												}}
												className="px-2 py-1 text-xs font-mono rounded-md bg-gray-800 text-gray-300"
											>
												{tech}
											</motion.span>
										))}
									</div>
									<div className="flex gap-4">
										<motion.a
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-green-500 hover:text-green-400 transition-colors"
										>
											<Github size={20} className="mr-1" />
											Code
										</motion.a>
										<motion.a
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-green-500 hover:text-green-400 transition-colors"
										>
											<ExternalLink size={20} className="mr-1" />
											Live
										</motion.a>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
