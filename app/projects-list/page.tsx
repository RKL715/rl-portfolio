'use client';

import Link from 'next/link'

import projectsData from "../public/assets/projects.json";

import styles from './ProjectsList.module.scss'


type Project = {
    id: number;
    name: string;
    description: string[];
    technologies: { id: number; name: string; src: string; }[];
    img: { id: number; title: string; src: string; }[];
};

function Page() {

    return (
        <div className={styles.projectsListPage}>
            <div className={styles.projectsListContent}>
                {projectsData.projects.en.map((project: Project) => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
                    <div className={styles.projectsListCards}>
                        <img src={project.img[0].src} alt={project.img[0].title} className={styles.projectImg} />
                        <h2 className={styles.projectsListTitle}>{project.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

console.log("Name:", projectsData.projects.en);

export default Page;