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
                <span className="lng-switcher">

                </span>
            </div>

            <div className="header-middle-block">
                <nav>
                    <ul>
                        <li>
                            <button
                                className="button-project-page"
                                onClick={() => navigate("/projects")} tabIndex={0}>
                                Projets
                            </button>
                        </li>
                        <li>
                            <button
                                className="button-contact-modal"
                                onClick={openContactModal} tabIndex={0}>
                                Contact
                            </button>
                        </li>
                        <li>
                            <button
                                className="button-project-page"
                                onClick={() => window.open("https://github.com/RKL715", "_blank", "noopener noreferrer")}
                                tabIndex={0}>
                                <img src="/icons/github-mark.png" alt="Bouton Page Github" width={30}/>
                            </button>
                        </li>
                        <li>
                            <button
                                className="button-project-page"
                                onClick={() => window.open("https://www.linkedin.com/in/remylafaye/", "_blank", "noopener noreferrer")}
                                tabIndex={0}>
                                <img src="/icons/linkedin.png" alt="Bouton Page Linkedin" width={30}/>
                            </button>
                        </li>
                    </ul>
                </nav>
                {showContactModal && <ContactModal closeContactModal={closeContactModal} isVisible={isVisible}
                                                   setIsVisible={setIsVisible}/>}
            </div>
            <div className="header-bottom-block">
                <button
                        className="button-privacy-policy"
                        onClick={() => navigate("/legalterms")} tabIndex={0}>
                        Mentions Légales
                    </button>
            </div>
        </header>
    )
}

export default Header