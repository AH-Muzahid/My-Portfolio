import React from "react";
import { projects } from "../../../Data/projects";
import ProjectDetailsView from "./ProjectDetailsView";

export async function generateMetadata({ params }) {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    const project = projects.find(p => p.id === id) || projects[0];

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Muzahid`,
            description: project.description,
            images: [project.images[0]],
        },
    };
}

export default async function ProjectDetailsPage({ params }) {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    
    // Find current project
    const projectIndex = projects.findIndex(p => p.id === id);
    const project = projectIndex !== -1 ? projects[projectIndex] : projects[0];
    
    // Find next project 
    const nextIndex = (projectIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];

    return <ProjectDetailsView project={project} nextProject={nextProject} />;
}
