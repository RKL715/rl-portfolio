import Project from "../../components/Project/Project.tsx";
import projectsData from "../../assets/projects.json";
import {useParams} from "react-router-dom";

export default function ProjectDetails() {

    const { id } = useParams<{ id: string }>();
    const project = projectsData.projects.find((project) => project.id === parseInt(id!));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details-page">
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

