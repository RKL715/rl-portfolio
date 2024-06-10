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
        <div className="inner-modal">
            <span className="inner-modal-text">
            <h2>{name}</h2>
            <p>{description}</p>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noreferrer">Visit the project</a>
                </span>
            <span className="inner-modal-carousel"><ProjectCarousel images={img[current]}/>
            <button className="prev" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </button>
            <button className="next" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>


            </button>
            </span>
        </div>
    )
}

export default Project