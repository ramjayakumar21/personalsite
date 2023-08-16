export default function ExperienceModules(props) {

    let experience = props.exp;

    return (
        <div className="bg-slate-600 p-7 mt-2 w-4/5 flex flex-col md:flex-row">
            <img src={experience.img}></img>
            <div className="ml-5">
                <strong >
                    <h1 className="text-3xl">{experience.name}</h1>
                </strong>
                <div className="pt-2"><em>{experience.position}</em></div>
                <div>{experience.description}</div>
            </div>
            
        </div>
    )
}