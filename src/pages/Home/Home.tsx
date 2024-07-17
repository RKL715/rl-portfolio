import {useState} from "react";
import SwipeEvents from "../../components/MobileControl/SwipeEvents.tsx";

function Home () {

    const [currentPage, setCurrentPage] = useState(1);
    const swipeHandlers = SwipeEvents({
        onSwipedLeft: () => setCurrentPage((currentPage % 3) + 1),
        onSwipedRight: () => setCurrentPage((currentPage === 1 ? 3 : currentPage - 1)) });

    const handleButtonClick = () => {
        setCurrentPage(currentPage % 3 + 1)
    };

    return (
        <div className="home" {...swipeHandlers}>
            <div className="home-content">
            {currentPage === 1 && (
                <p className="home-text" aria-label="Compétences">
                    Bonjour, je suis <strong>Rémy</strong>, <strong>développeur web front-end</strong>.
                    <br/>
                    Amateur de <strong>React</strong> et <strong>SASS</strong>, j'ai également travaillé avec <strong>Redux Toolkit</strong>.
                    <br/>
                    Actuellement, j'apprends <strong>TypeScript</strong> pour enrichir mes compétences en <strong>JavaScript</strong>.
                    <br/>
                    J'utilise <strong>WebStorm</strong> pour coder avec <strong>efficacité </strong> et j'intègre l'<strong>IA générative</strong> dans mon flux de travail pour <strong>optimiser </strong> mes projets.
                    <br/>
                    Amateur de <strong>photographie</strong> et de <strong>cinéma</strong>  j'utilise également <strong>Affinity Photo</strong>, <strong>Affinity Designer</strong> et <strong>Premiere Pro</strong>.
                </p>
            )}
            {currentPage === 2 && (
                <p className="home-text bio" aria-label="Parcours profesionnel">
                <strong>Animateur Socioculturel</strong> pendant <strong>10 ans</strong>, j'ai conclu ma carrière en menant des <strong>formations </strong> pour des personnes en situation <strong>d'illectronisme</strong>.
                    <br/>
                    J'ai également animé des <strong>projets multimédia</strong> pour <strong>l'inclusion d'adultes</strong> en situation de <strong>handicap</strong> par le <strong>cinéma</strong> et le <strong>numérique</strong>.
            </p>
            )}
            {currentPage === 3 && (
                <p className="home-text bio" aria-label="Parcours professionel deuxième partie">
                    Suite à la <strong>restructuration</strong> de mon <strong>association</strong>, j'ai <strong>quitté</strong> ma <strong>carrière</strong> pour me <strong>reconvertir </strong>
                    dans le <strong>développement</strong>, dans le but de rendre le <strong>web</strong> plus <strong>accessible</strong> et <strong>inclusif</strong>.
                        <br/>
                    J'ai donc suivi une formation <strong>Développeur Intégrateur Web</strong> (RNCP-5) auprès d'<strong>OpenClassrooms</strong>.
                </p>
            )}
            </div>
            <div className="home-navigation">
            <button className="home-button" onClick={handleButtonClick}>
                {currentPage === 1 || currentPage ===2 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                }
                    </button>
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
    )
}

export default Home
