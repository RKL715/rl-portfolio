'use client';

import styles from './home/Home.module.scss';
import {useState} from "react";


function Page () {

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className={styles.home} >
            <div className={styles.homeContent} id="draggable">
                <div className={styles.homeContentHeader}>
                <h3 className={styles.homeContentTitle}>A propos</h3>
                <div className={styles.homeNavigation}>
                    <div className={styles.bullet}>
                        <button onClick={() => setCurrentPage(1)}>
                            <span className={currentPage === 1 ? styles.active : ""}></span>
                        </button>
                        <button onClick={() => setCurrentPage(2)}>
                            <span className={currentPage === 2 ? styles.active : ""}></span>
                        </button>
                        <button onClick={() => setCurrentPage(3)}>
                            <span className={currentPage === 3 ? styles.active : ""}></span>
                        </button>
                    </div>
                </div>
                </div>
                {currentPage === 1 && (
                    <p className={styles.homeText} aria-label="Compétences">
                        Bonjour, je suis <strong>Rémy</strong>, <strong>développeur web front-end</strong>.
                        <br/>
                        Amateur de <strong>React</strong> et <strong>SASS</strong>, j'ai également travaillé
                        avec <strong>Redux Toolkit</strong>.
                        <br/>
                        Actuellement, j'apprends <strong>TypeScript</strong> pour enrichir mes compétences
                        en <strong>JavaScript</strong>.
                        <br/>
                        Je travaille principalement sur <strong>WebStorm</strong>.
                        <br/>
                        Amateur de <strong>photographie</strong> et de <strong>cinéma</strong> j'utilise aussi <strong>Affinity
                        Photo</strong>, <strong>Affinity Designer</strong> et <strong>Premiere Pro</strong>.
                    </p>
                )}
                {currentPage === 2 && (
                    <p className={styles.homeText} aria-label="Parcours profesionnel">
                        <strong>Animateur Socioculturel</strong> pendant <strong>10 ans</strong>, j'ai conclu ma
                        carrière en menant des <strong>formations </strong> pour des personnes en
                        situation <strong>d'illectronisme</strong>.
                        <br/>
                        J'ai également animé des <strong>projets multimédia</strong> pour <strong>l'inclusion
                        d'adultes</strong> en situation de <strong>handicap</strong> par le <strong>cinéma</strong> et
                        le <strong>numérique</strong>.
                    </p>
                )}
                {currentPage === 3 && (
                    <p className={styles.homeText} aria-label="Parcours professionel deuxième partie">
                        Suite à la <strong>restructuration</strong> de mon <strong>association</strong>,
                        j'ai <strong>quitté</strong> ma <strong>carrière</strong> pour me <strong>reconvertir </strong>
                        dans le <strong>développement</strong>, en espérant rendre
                        le <strong>web</strong> plus <strong>accessible</strong> et <strong>inclusif</strong>.
                        <br/>
                        Après 9 mois de formation et plusieurs projets, j'ai obtenu un titre <strong>Développeur
                        Intégrateur
                        Web</strong> (RNCP-5, Bac+2) auprès d'<strong>OpenClassrooms</strong>.
                        <br/>
                        En recherche d'<strong>Alternance</strong> pour un nouveau titre RNCP-5,
                        orienté <strong>full-stack</strong>
                        avec <strong>2I Academy</strong>.
                    </p>
                )}
            </div>
        </div>
    )
}

export default Page
