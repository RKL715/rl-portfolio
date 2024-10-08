import ProjectCarousel  from "./ProjectCarousel.tsx";
import {useState} from "react";
import { useTranslation} from "react-i18next";


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
        <div className="project-block">
            <div className="project-block-header">
                <span className="title-link">
                <h2>{name}</h2>
                <a href={link} className="github-link" target="_blank" rel="noreferrer">
                    <img src="/icons/github-mark.png" width={40} alt="Link to github project"/>
                </a>
                </span>
            </div>
                <span className="project-block-text">
            <ul className="project-desc-list">
                {description.map((desc, index) => (
                    <li key={index}>{t(desc)}</li>
                ))}
            </ul>
            <ul className="project-skills-list no-transition">
                {technologies.map((tech, index) => (
                    <li key={index} className="skills-item">
                        <img src={tech.src} alt={tech.name} width={50} className="skills-icon"/>
                        <span className="skills-name">{tech.name}</span>
                    </li>
                ))}
            </ul>
                </span>
                <span className="project-block-carousel"><ProjectCarousel images={img[current]} nextSlide={nextSlide}
                                                                          prevSlide={prevSlide}/>
            </span>
            </div>
            )
            }

            export default Project