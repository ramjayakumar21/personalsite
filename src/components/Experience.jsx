import ExperienceModules from "../modules/ExperienceModules";
import experienceList from "../assets/experience.json"

export default function Experience() {
    return (
        <div className="p-10 flex flex-col items-center">
            {experienceList.map(exp => {
                return <ExperienceModules exp={exp} />
            })}
        </div>
    )
}