'use client'

import { useParams } from 'next/navigation'
import NotFound from "../../not-found";
import Project from "../../../components/Project/Project.tsx";
import projectsData from "../../../public/assets/projects.json";
import styles from './ProjectDetails.module.scss';

type ProjectType = {
    key: number;
    id: number;
    name: string;
    description: string[];
    technologies: { id: number; name: string; src: string }[];
    link: string;
    img: { id: number; title: string; src: string }[];
};

export default function ProjectDetails() {
    const { projectId } = useParams();
    const projectData = projectsData.projects.en.find((proj) => proj.id.toString() === projectId );

    if (!projectData) {
        return (
            <NotFound />
        );
    }

    const project: ProjectType = {...projectData, key: projectData.id};

    return (
        <div className={styles.projectDetailsPages}>
            <Project
                id={project.id}
                    name={project.name}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    img={project.img}
                />
        </div>
    );
}

// This file give the details of the project selected by the user.
// It's the page.
// It uses the Project component to display the project details.
// It also uses the projects.json file to get the project data.