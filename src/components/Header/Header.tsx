import { useState} from "react";
import ContactModal from "../Contact/Contact.tsx";
import {Link, useNavigate} from "react-router-dom";


function Header () {
const navigate = useNavigate();
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

    return (
        <header>
            <div className="header-top-block">
                <h1>
                    <Link to="/" className="header-link">
                    RÉMY LAFAYE
                    </Link></h1>
                <p>Développeur intégrateur web</p>
            </div>

            <div className="header-middle-block">
                <nav>
                    <ul>
                        <li>
                            <button
                                className="button-project-page"
                                onClick={() => navigate("/infos")} tabIndex={0}>
                                Infos
                            </button>
                        </li>
                        <li>
                            <button
                                className="button-project-page"
                                onClick={() => navigate("/projects")} tabIndex={0}>
                                Projets
                            </button>
                        </li>
                        <li>
                            <a href="https://github.com/RKL715" target="_blank" rel="noopener noreferrer" tabIndex={0}>Github</a>
                        </li>
                        <li>
                            <button
                                className="button-contact-modal"
                                onClick={openContactModal} tabIndex={0}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
                {showContactModal && <ContactModal closeContactModal={closeContactModal} isVisible={isVisible}
                                                   setIsVisible={setIsVisible}/>}
            </div>
            <div className="header-bottom-block">
            <p>GPL-3.0 License 2024 - Rémy LAFAYE</p>
            </div>
        </header>
    )
}

export default Header