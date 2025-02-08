"use client";

import React, { useState } from "react";
import HeroSection from "./Hero";
import TechStackSection from "./TechStacks";
import ProjectsSection from "./Projects";

const Sections = () => {
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

	return (
		<>
			<HeroSection />
			<TechStackSection onTechSelect={setSelectedTechs} />
			<ProjectsSection selectedTechs={selectedTechs} />
		</>
	);
};

export default Sections;
