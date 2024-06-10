export interface  ProjectType {
    id : number;
    name : string;
    description : string;
    technologies : string[];
    link : string;
    img : ImageType[];
}

interface ImageType {
    id: number;
    title : string
    url : string; //replace with src
}

function Project ({name, description, technologies, link, img} : ProjectType) {


    return (
        <div>
            <h2>{name}</h2>
            {img.map ((img, index) => (
                <img key={index} src={img.url} alt={img.title} />
            ))}
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