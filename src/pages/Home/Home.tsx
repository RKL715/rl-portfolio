import {useState} from "react";

function Home () {

    const [currentPage, setCurrentPage] = useState(1);

    const handleButtonClick = () => {
        setCurrentPage(currentPage % 3 + 1)
    };

    return (
        <div className="home">
            {currentPage === 1 && (
            <p className="home-text" aria-label ="Compétences">
                Amateur de <b>React</b> et <b>SASS</b>, j'ai également travaillé avec <b>Redux Toolkit</b>,
                évidemment <b>Git</b> et <b>GitHub</b>.
                <br/>Actuellement, j'apprends <b>TypeScript</b> pour enrichir mes
                compétences en <b>JavaScript</b>.
                <br/><span> J'ai pu travailler sur <b>VSCode</b>, mais <b>WebStorm</b> reste mon favori</span>
            </p>
            )}
            {currentPage === 2 && (
            <p className="home-text bio" aria-label="Parcours profesionnel">
                <b>Animateur Socioculturel</b> pendant <b>10 ans</b>, j'ai conclu ma carrière en menant des <b>formations</b>
                pour des personnes en situation <b>d'illectronisme</b> et des <b>projets multimédia</b> pour <b>l'inclusion
                    d'adultes</b> en situation de <b>handicap</b> par le <b>cinéma</b> et le <b>numérique</b>.
            </p>
            )}
            {currentPage === 3 && (
                <p className="home-text bio" aria-label="Parcours professionel deuxième partie">
                    Suite à la <b>restructuration</b> de mon <b>association</b>, j'ai <b>quitté</b> ma <b>carrière</b> pour me <b>reconvertir</b>
                    dans le <b>développement</b>, dans le but de rendre le <b>web</b> plus <b>accessible</b> et <b>inclusif</b>.
                        <br/>
                    J'ai donc suivi une <b>formation</b> <b>Développeur Intégrateur Web</b> (RNCP 5) auprès d'<b>OpenClassrooms</b>.
                </p>
            )}
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
