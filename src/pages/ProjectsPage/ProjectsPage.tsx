import projectsData from "../../assets/projects.json";
import { useNavigate } from "react-router-dom";

type Project = {
    id: number;
    name: string;
    description: string[];
    technologies: { id: number; name: string; src: string; }[];
    link: string;
    img: { id: number; title: string; src: string; }[];
};

function ProjectsPage() {
    const navigate = useNavigate();

    const handleProjectClick = (id: number) => {
        navigate(`/projects/${id}`);
    };

    return (
        <div className="projects-list-page">
            <div className={"projects-list-content"}>
                {projectsData.projects.en.map((project: Project) => (
                    <div key={project.id} className="projects-list-cards" onClick={() => handleProjectClick(project.id)}>
                        <img src={project.img[0].src} alt={project.img[0].title} className="project-img" />
                        <h2>{project.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

console.log("Name:", projectsData.projects.en);

export default ProjectsPage;