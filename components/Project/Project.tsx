'use client'

import ProjectCarousel  from "./ProjectCarousel.tsx";
import {useState} from "react";
import Image from 'next/image';

import styles from './Project.module.scss';

import github from '../../public/icons/github-mark.png';

// TYPES
export interface TechType {
    id : number;
    name : string;
    src : string;
}
export interface ImageType {
    id: number;
    title : string
    src : string;
}
export interface  ProjectType {
    id : number;
    name : string;
    description : string[];
    technologies : TechType[];
    link : string;
    img : ImageType[];
}
//--------------------------------

export default function Project ({name, description, technologies, link, img} : ProjectType) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % img.length);
    }
    const prevSlide = () => {
        setCurrent((current - 1 + img.length) % img.length);
    }

    return (
        <div className={styles.projectBlock}>
            <div className={styles.projectBlockHeader}>
                <span className={styles.titleLink}>
                <h2>{name}</h2>
                <a href={link} target="_blank" rel="noreferrer">
                    <Image src={github} className={styles.githubLink} alt="Link to github project"/>
                </a>
                </span>
            </div>
            <span className={styles.projectBlockText}>
            <ul className={styles.projectDescList}>
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
            <ul className={styles.projectSkillsList}>
                {technologies.map((tech, index) => (
                    <li key={index} className={styles.skillsItem}>
                        <img src={tech.src} alt={tech.name} width={50} className={styles.skillsIcon}/>
                        <span className={styles.skillsName}>{tech.name}</span>
                    </li>
                ))}
            </ul>
                </span>
            <span className={styles.projectBlockCarousel}><ProjectCarousel images={img[current]} nextSlide={nextSlide}
                                                                      prevSlide={prevSlide}/>
            </span>
        </div>
    )
}

// This file is the Project component.
// It gives the structure of the project details.
