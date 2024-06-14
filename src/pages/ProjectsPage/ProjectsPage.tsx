import Project, {ProjectType} from "../../components/Project/Project.tsx";
import projectsData from "../../assets/projects.json";
import {useEffect, useState} from "react";


function ProjectsPage () {

    // TO adjust position of the projects page with the header, depending on the screen width
    const  [marginTop, setMarginTop] = useState("5rem");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 600) {
                setMarginTop("20rem"); // 20rem to avoid the header, more = less near the header
            } else {
                setMarginTop("5rem"); // default value
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); // cleanup
        }
    }, []);

    return (
        <div className={"projects-pages"} style={{ marginTop }}>
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