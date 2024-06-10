import React, {useEffect, useRef,} from "react";
import Project from "../Project/Project.tsx";
import projectsData from "../../assets/projects.json";
import {ProjectType} from "../Project/Project.tsx";


// TS for modal
interface ProjectsModalProps {
    closeProjectsModal : () => void;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


function ProjectsModal ({ closeProjectsModal, isVisible, setIsVisible }: ProjectsModalProps) {

    // TO Create a reference to the modal
    const modalRef = useRef<HTMLDivElement>(null);

    // TO Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsVisible(false);
                setTimeout(() => {
                    closeProjectsModal();
                }, 500);
            }
        }
        // TO Close modal when pressing escape key
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsVisible(false);
                setTimeout(() => {
                    closeProjectsModal();
                }, 500);
            }
        }
        // Event listeners for click outside and escape key
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapePress);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapePress);
        }
    }, [closeProjectsModal]);


    return (
        <div className={`projects-modal ${isVisible ? "fade-in" : "fade-out"}`} ref={modalRef}>
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


export default ProjectsModal