import Project, {ProjectType} from "../../components/Project/Project.tsx";
import projectsData from "../../assets/projects.json";

function ProjectsPage () {

    return (
        <div className={"projects-pages"}>
            {projectsData.projects.map((project: ProjectType) => (
                <Project
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    img={project.img}
                />
            ))}
        </div>
    )
}

export default ProjectsPage