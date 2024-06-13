interface  SkillsType {
    name : string;
    img : string;
    alt : string;
}

interface SkillsListProps {
    skills : SkillsType[];
}

function SkillsList({ skills }: SkillsListProps) {
    return (
        <div>
            <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skills-item">
                            <div className="centered-content">
                                <img src={skill.img} alt={skill.alt} width={30} />
                                <span>{skill.name}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

                export default SkillsList