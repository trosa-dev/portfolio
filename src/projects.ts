import { Project } from "./types";

export const projects: Project[] = [
	{
		id: 1,
		title: "E-commerce API",
		description: "Scalable REST API for e-commerce platform",
		techs: ["Node.js", "Express", "PostgreSQL", "Redis"],
		github: "https://github.com/example/ecommerce-api",
		live: "https://api.example.com",
		image: "/api/placeholder/400/300",
	},
	{
		id: 2,
		title: "Microservices Platform",
		description: "Distributed system with message queues",
		techs: ["NestJS", "MongoDB", "Docker", "Kubernetes"],
		github: "https://github.com/example/microservices",
		live: "https://services.example.com",
		image: "/api/placeholder/400/300",
	},
	{
		id: 3,
		title: "Real-time Analytics",
		description: "Data processing pipeline for analytics",
		techs: ["Python", "PostgreSQL", "ElasticSearch", "AWS"],
		github: "https://github.com/example/analytics",
		live: "https://analytics.example.com",
		image: "/api/placeholder/400/300",
	},
];
