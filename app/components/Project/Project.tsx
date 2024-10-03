'use client'

import ProjectCarousel  from "./ProjectCarousel.tsx";
import {useState} from "react";
import { useTranslation} from "react-i18next";
import Image from 'next/image';

import styles from './Project.module.scss';

import github from '../../public/icons/github-mark.png';

export interface  ProjectType {
    id : number;
    name : string;
    description : string[];
    technologies : TechType[];
    link : string;
    img : ImageType[];
}

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


function Project ({name, description, technologies, link, img} : ProjectType) {
    const {t} = useTranslation();
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
                <a href={link} className={styles.githubLink} target="_blank" rel="noreferrer">
                    <img src={github} alt="Link to github project"/>
                </a>
                </span>
            </div>
            <span className={styles.projectBlockText}>
            <ul className={styles.projectDescList}>
                {description.map((desc, index) => (
                    <li key={index}>{t(desc)}</li>
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

export default Project