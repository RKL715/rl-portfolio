import SkillsList from "./SkillsList.tsx";
import skillsData from "../../assets/skills.json";

function Infos () {
    return (
        <div className="infos-page">
            <div className="infos-content-skills">
            <h3 className="infos-titles">Compétences</h3>
            <SkillsList skills={skillsData.skills} />
            </div>

            <div className="infos-content-others">
                <h3 className="infos-titles">Autres</h3>
                <SkillsList skills={skillsData.othersSkills} />
            </div>
        </div>
    )
}

export default Infos
