import Project, {ProjectType} from "../../components/Project/Project.tsx";
import projectsData from "../../assets/projects.json";
import { useNavigate } from "react-router-dom";



function ProjectsPage () {

    const Navigate = useNavigate();
    const handleClose = () => {
        Navigate('/');
    }

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
            <button className='close-page-project' onClick={handleClose}>CLOSE</button>
        </div>
    )
}

export default ProjectsPage