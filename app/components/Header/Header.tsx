'use client';

import Link from 'next/link'
import Image from 'next/image'

import { useState} from "react";
import ContactModal from "../Contact/Contact.tsx";

import styles from './Header.module.scss'
import github from '../../public/icons/github-mark.png'
import linkedin from '../../public/icons/linkedin.png'

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


    return (
        <header className={styles.header}>
            <div className={styles.headerTopBlock}>
                <h1>
                    <Link href="/home" className={styles.headerTitle}>
                    RÉMY LAFAYE
                    </Link></h1>
                <p>Développeur intégrateur web</p>
                <span className={styles.lngSwitcher}>

                </span>
            </div>

            <div className={styles.headerMiddleBlock}>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/projects-list"}
                                className={styles.headerLink}>
                                Projets
                            </Link>
                        </li>
                        <li>
                            <button
                                className={styles.buttonContactModal}
                                onClick={openContactModal} tabIndex={0}>
                                Contact
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.buttonExt}
                                onClick={() => window.open("https://github.com/RKL715", "_blank", "noopener noreferrer")}
                                tabIndex={0}>
                                <Image src={github} alt="Bouton Page Github" className={styles.headerImg}/>
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.buttonExt}
                                onClick={() => window.open("https://www.linkedin.com/in/remylafaye/", "_blank", "noopener noreferrer")}
                                tabIndex={0}>
                                <Image src={linkedin} alt="Bouton Page Linkedin" className={styles.headerImg}/>
                            </button>
                        </li>
                    </ul>
                </nav>
                {showContactModal && <ContactModal closeContactModal={closeContactModal} isVisible={isVisible}
                                                   setIsVisible={setIsVisible}/>}
            </div>
            <div className={styles.headerBottomBlock}>
                <Link href={"/legal"}
                        className={styles.PrivacyPolicy}>
                        Mentions Légales
                    </Link>
            </div>
        </header>
    )
}

export default Header