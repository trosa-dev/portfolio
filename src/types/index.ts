export interface Technology {
	category: string;
	icon: React.ReactNode;
	techs: string[];
}

export interface Project {
	id: number;
	title: string;
	description: string;
	techs: string[];
	github: string;
	live: string;
	image: string;
}

export interface TechStackProps {
	onTechSelect: (selectedTechs: string[]) => void;
}

export interface ProjectsSectionProps {
	selectedTechs: string[];
}
