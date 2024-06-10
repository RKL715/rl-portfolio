import ProjectCarousel  from "./ProjectCarousel.tsx";
import {useState} from "react";

export interface  ProjectType {
    id : number;
    name : string;
    description : string;
    technologies : string[];
    link : string;
    img : ImageType[];
}

export interface ImageType {
    id: number;
    title : string
    url : string; //replace with src
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
        <div>
            <h2>{name}</h2>
            <ProjectCarousel images={img[current]} />
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
            <p>{description}</p>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noreferrer">Visit the project</a>
        </div>
    )
}

export default Project