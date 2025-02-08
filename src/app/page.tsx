"use client";

import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechStackSection from "./sections/TechStackSection";
import { useState } from "react";

export default function Home() {
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

	return (
		<>
			<main>
				<HeroSection />
				<TechStackSection onTechSelect={setSelectedTechs} />
				<ProjectsSection selectedTechs={selectedTechs} />
			</main>
			<FooterSection />
		</>
	);
}
