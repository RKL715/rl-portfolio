import SkillsList from "./SkillsList.tsx";
import skillsData from "../../assets/skills.json";

function Infos () {
    return (
        <div className="infos">
            <div className="infos-content">
            <h3 className="skills-title">Compétences</h3>
            <SkillsList skills={skillsData.skills} />
                </div>
            {/*<h3 className="skills-title">Expériences</h3>*/}
            {/*<p className="home-text">*/}
            {/*    Animateur Socioculturel pendant 10 ans, j'ai conclu ma carrière avec des projets d'inclusion numérique pour des personnes en situation d'illectronisme, des projets multimédia pour l'inclusion d'adultes en situation de handicap par le cinéma et le numérique.*/}
            {/*    <br/>*/}
            {/*    Confronté aux difficultés des publics rencontrés pour manipuler le web et les outils numériques, et poussé par une restructuration drastique de mon association, j'ai décidé de quitter ma carrière afin de suivre une formation de développeur web pour comprendre l'autre côté du web, en espérant le rendre plus accessible et plus inclusif.*/}
            {/*    <br/>*/}
            {/*    J'ai donc suivi une formation Développeur Intégrateur Web auprès d'OpenClassrooms.*/}
            {/*</p>*/}
        </div>
    )
}

export default Infos
