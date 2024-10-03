'use client'

import Project from "../components/Project/Project.tsx";
import projectsData from "../public/assets/projects.json";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

import styles from "./ProjectDetails.module.scss";

type ProjectType = {
    id: number;
    name: string;
    description: string[];
    technologies: { id: number; name: string; src: string }[];
    link: string;
    img: { id: number; title: string; src: string }[];
};

type ProjectsDataType = {
    projects: {
        [key: string]: ProjectType[];
    };
};

const typedProjectsData: ProjectsDataType = projectsData;

export default function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const project = typedProjectsData.projects[currentLanguage].find((project: ProjectType) => project.id === parseInt(id!));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.projectDetailsPage}>
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

