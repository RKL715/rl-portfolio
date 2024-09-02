import {useState} from "react";
import SwipeEvents from "../../components/MobileControl/SwipeEvents.tsx";

function Home () {

    const [currentPage, setCurrentPage] = useState(1);
    const swipeHandlers = SwipeEvents({
        onSwipedLeft: () => setCurrentPage((currentPage % 3) + 1),
        onSwipedRight: () => setCurrentPage((currentPage === 1 ? 3 : currentPage - 1)) });

    return (
        <div className="home" {...swipeHandlers}>
            <div className="home-content" id="draggable">
                <div className="home-content-header">
                <h3 className="home-content-title">A propos</h3>
                <div className="home-navigation">
                    <div className="bullet">
                        <button onClick={() => setCurrentPage(1)}>
                            <span className={currentPage === 1 ? "active" : ""}></span>
                        </button>
                        <button onClick={() => setCurrentPage(2)}>
                            <span className={currentPage === 2 ? "active" : ""}></span>
                        </button>
                        <button onClick={() => setCurrentPage(3)}>
                            <span className={currentPage === 3 ? "active" : ""}></span>
                        </button>
                    </div>
                </div>
                </div>
                {currentPage === 1 && (
                    <p className="home-text" aria-label="Compétences">
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
                    <p className="home-text bio" aria-label="Parcours profesionnel">
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
                    <p className="home-text bio" aria-label="Parcours professionel deuxième partie">
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

export default Home
