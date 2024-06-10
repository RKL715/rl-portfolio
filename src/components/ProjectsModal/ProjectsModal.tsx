import React, {useEffect, useRef, useState} from "react";
import Project from "../Project/Project.tsx";
import projectsData from "../../assets/projects.json";

interface ImageType {
id: number;
title : string
url : string; //replace with src
}

interface  ProjectType {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    link : string;
    img : ImageType[];
} // for TScript

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



// TO open a Project
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const openProject = (project: ProjectType) => {
        setSelectedProject(project);
    }
    const closeProject = () => {
        setSelectedProject(null);
    }

    return (
        <div className={`projects-modal ${isVisible ? "fade-in" : "fade-out"}`} ref={modalRef}>
            {projectsData.projects.map((project: ProjectType) => (
                <button
                    key={project.id}
                    onClick={() => openProject(project)}
                >
                    {project.name}
                </button>
            ))}
            {selectedProject && (
                <Project
                    onClose={closeProject}
                    title={selectedProject.name}
                    img={selectedProject.img[0].url}
                    description={selectedProject.description}
                >
                </Project>
            )}
        </div>
    )
}


export default ProjectsModal