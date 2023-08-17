import { Tag } from "@chakra-ui/react";

export default function ExperienceModules(props) {

    let experience = props.exp;

    return (
        <div style={{animationDuration:"0.5s"}} className=" ease-linear hover:cursor-pointer transition-all first:mt-0 hover:border-4 border-[#9ec3f6]  bg-slate-600
         p-7 mt-4 w-4/5 flex flex-col md:flex-row rounded-md gap-3 justify-center">
            <img width="200px" height="200px" src={experience.img}></img>
            <div className="ml-5">
                <strong >
                    <h1 className="text-3xl">{experience.name}</h1>
                </strong>
                <div className="pt-2"><em>{experience.position}</em> <br></br> <em>{experience.daterange}</em></div>
                <div className="pt-2"></div>
                <div>{experience.description}</div>
                <br></br>
                {experience.skills.map(element => {
                    return <Tag className="m-1" size="lg" variant="solid" colorScheme="blue">
                    {element}
                  </Tag>
                })
                }
            </div>
        </div>
    )
}