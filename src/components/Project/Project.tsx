import ProjectCarousel  from "./ProjectCarousel.tsx";
import type { ImageType } from "./ProjectCarousel.tsx";

export interface  ProjectType {
    id : number;
    name : string;
    description : string;
    technologies : string[];
    link : string;
    img : ImageType[];
}



function Project ({name, description, technologies, link, img} : ProjectType) {


    return (
        <div>
            <h2>{name}</h2>
            <ProjectCarousel images={img} />
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