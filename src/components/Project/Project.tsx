import ProjectCarousel  from "./ProjectCarousel.tsx";
import {useState} from "react";

export interface  ProjectType {
    id : number;
    name : string;
    description : string[];
    technologies : string[];
    link : string;
    img : ImageType[];
}

export interface ImageType {
    id: number;
    title : string
    src : string;
}


function Project ({name, description, technologies, link, img} : ProjectType) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % img.length);
    }
    const prevSlide = () => {
        setCurrent((current - 1 + img.length) % img.length);
    }

    return (
        <div className="project-block">
            <span className="project-block-text">
            <h2>{name}</h2>
            <ul className="project-desc-list">
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
            <ul className="project-tech-list">
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noreferrer"><img src="/icons/github-mark.png" width={20} alt="Link to github project"/></a>
                </span>
            <span className="project-block-carousel"><ProjectCarousel images={img[current]} nextSlide={nextSlide} prevSlide={prevSlide}/>
            </span>
        </div>
    )
}

export default Project