import {useState} from "react";

function Home () {

    const [currentPage, setCurrentPage] = useState(1)

    const handleButtonClick = () => {
        setCurrentPage(currentPage % 2 + 1)
    };

    return (
        <div className="home">
            {currentPage === 1 && (
            <p className="home-text">
                Amateur de <b>React</b> et <b>SASS</b>, j'ai également travaillé avec <b>Redux Toolkit</b>,
                évidemment <b>Git</b> et <b>GitHub</b>.
                <br/>Actuellement, j'apprends <b>TypeScript</b> pour enrichir mes
                compétences en <b>JavaScript</b>.
                <br/><span> J'ai pu travailler sur <b>VSCode</b>, mais <b>WebStorm</b> reste mon favori</span>
            </p>
            )}
            {currentPage === 2 && (
            <p className="home-text bio">
                Animateur Socioculturel pendant 10 ans, j'ai conclu ma carrière avec des projets d'inclusion numérique
                pour des personnes en situation d'illectronisme, des projets multimédia pour l'inclusion d'adultes en
                situation de handicap par le cinéma et le numérique.
                <br/>
                Confronté aux difficultés des publics rencontrés pour manipuler le web et les outils numériques et
                poussé par une restructuration drastique de mon association, j'ai décidé de quitter ma carrière afin de
                suivre une formation de développeur web pour comprendre l'autre côté du web, en espérant le rendre plus
                accessible et plus inclusif.
                <br/>
                J'ai donc suivi une formation Développeur Intégrateur Web auprès d'OpenClassrooms.
            </p>
            )}
            <button className="home-button" onClick={handleButtonClick}>
                {currentPage === 1 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                }
                    </button>
            <div className="bullet">
                <span className={currentPage === 1 ? "active" : ""}></span>
                <span className={currentPage === 2 ? "active" : ""}></span>
             </div>
                    </div>
                    )
                }

export default Home
