import projectsData from "../../assets/projects.json";
import {useNavigate} from "react-router-dom";

function ProjectsPage () {

    const navigate = useNavigate();

    const handleProjectClick = (id: number) => {
        navigate(`/projects/${id}`);
    };

    return (
        <div className={"projects-list"}>
            {projectsData.projects.map((project) => (
                <div key={project.id} className="project-card" onClick={() => handleProjectClick(project.id)}>
                    <img src={project.img[0].src} alt={project.img[0].title} className="project-img"/>
                    <h2>{project.name}</h2>
        </div>
    ))}
        </div>
    )
}

export default ProjectsPage