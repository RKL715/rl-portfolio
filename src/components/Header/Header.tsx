import { useState} from "react";
import ContactModal from "../Contact/Contact.tsx";
import ProjectsModal from "../ProjectsModal/ProjectsModal.tsx";


function Header () {
const [isVisible, setIsVisible] = useState(true);
    // Modal for contact form
    const [showContactModal, setShowContactModal] = useState(false);
    const openContactModal = () => {
        setIsVisible(true);
        setShowContactModal(true);
    }
    const closeContactModal = () => {
        setIsVisible(false);
        setShowContactModal(false);
    }
    // Modal for project list
    const [showProjectsModal, setShowProjectsModal] = useState(false);
    const openProjectsModal = () => {
        setIsVisible(true);
        setShowProjectsModal(true);
    }
    const closeProjectsModal = () => {
        setIsVisible(false);
        setShowProjectsModal(false);
    }


    return (
        <header>
            <a className="header-logo" href="/">
                <img src="https://via.placeholder.com/150" alt="Logo du site de Rémy LAFAYE"/>
            </a>

            <div className="header-top-block">
                <h1>Rémy LAFAYE.</h1>
                <p>Développeur intégrateur web</p>
            </div>

            <div className="header_middle_block">
                <nav>
                    <ul>
                        <li>
                          <button
                              className="button-project-modal"
                              onClick={openProjectsModal}>
                              Projets
                          </button>
                        </li>
                        <li>
                            <a href="https://github.com/RKL715" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="header_bottom_block">
                <button
                    className="button-contact-modal"
                    onClick={openContactModal}>
                    Contact
                </button>
                {showContactModal && <ContactModal closeContactModal={closeContactModal} isVisible={isVisible} setIsVisible={setIsVisible} />}
            </div>
            {showProjectsModal && <ProjectsModal closeProjectsModal={closeProjectsModal} isVisible={isVisible} setIsVisible={setIsVisible}/>}
        </header>
    )
}

export default Header