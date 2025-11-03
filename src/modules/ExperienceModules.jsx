import { Tag } from "@chakra-ui/react";

export default function ExperienceModules(props) {
  let experience = props.exp;

  return (
    <div             
      style={{ animationDuration: 1 + 0.2 * props.i + "s"  }}
      className="animate-fade_grow_in a ease-linear hover:cursor-pointer transition-all first:mt-0 hover:outline hover:outline-4 outline-[#9ec3f6]  bg-slate-600
         p-6 mt-4 w-11/12 flex flex-col items-center md:flex-row rounded-md gap-3 justify-between"
    >
      <img width="200px" height="200px" src={experience.img}></img>
      <div className="w-3/4 ">
        <strong>
          <h1 className="text-3xl md:text-left text-center">
            {experience.name}
          </h1>
        </strong>
        <div className="pt-2">
          <em>{experience.position}</em> <br></br>{" "}
          <em>{experience.daterange}</em>
        </div>
        <div className="pt-2"></div>
        <div>{experience.description}</div>
        <br></br>
        {experience.skills.map((element) => {
          return (
            <Tag className="m-1" size="lg" variant="solid" colorScheme="blue">
              {element}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
