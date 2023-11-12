import Window from "./Window";
import Contact from "./About";
import { Tag, Card, CardHeader, CardBody, CardFooter, Image, Button, ButtonGroup, Stack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import projectsArray from "../assets/projects.json"

export default function Projects() {
  let langArray = ["Javascript", "Typescript","R", "Java", "Python", "C++", "HTML", "CSS"];
  let toolsArray = ["React.js", "Express.js", "Node.js", "MongoDB", "Django", "TailwindCSS", "Docker", "Github Actions", "Jest", "Azure Console"];


  return (
    <div className="px-20 text-black mt-6 mb-7">
      <div className="flex justify-center flex-wrap gap-5">
        <div className="tools mb-2 max-w-xl">
          <h1 className="text-2xl text-center mb-1 dark:text-white">LANGUAGES</h1>
          {langArray.map((tool) => {
            return (
              <Tag className="m-1" _hover={{colorScheme:"purple"}} size="lg" variant="solid" colorScheme="blue">
                {tool}
              </Tag>
            );
          })}
          </div>
          
          <div className="tools mb-2 max-w-xl">
            <h1 className="text-2xl text-center mb-1 dark:text-white">TOOLS & FRAMEWORKS</h1>
            {toolsArray.map((tool) => {
              return (
                <Tag className="m-1" size="lg" variant="solid" colorScheme="blue">
                  {tool}
                </Tag>
              );
            })}
        
          </div>
      
        
      </div>
      
    <div className="my-2"><Divider /></div>

    
    <div className="flex gap-10 flex-wrap mt-10 justify-center">
        {projectsArray.map((project, i) => {
            return (
            
                <div className="animate-fade_grow_in" style={{ "animation-duration": 1 + (0.2 * i) + "s" }}>
                  <Card maxW="md" width={"400px"} className="hover:scale-105 transition-all">
                  <Link to={project.link}>
                  <CardBody>
                    <Image
                      src={project.image}
                      alt={project.name + " image"}
                      borderRadius="lg"
                      fit={"cover"}
                      height={"300px"}
                      width={"500px"}
                      loading="eager"
                    />
                    <Stack mt="6" spacing="3">
                      <h1 className="text-3xl">{project.name}</h1>
                      <div className="date text-purple-700">{project.date}</div>
                      <div>{project.description}</div>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                  <div className="">
                    {project.tools.map((tool) => {
                      return (
                        <Tag className="p-2 m-1" size="md" variant="solid" colorScheme="blue">
                          {tool}
                        </Tag>
                      );
                    })}
                  </div>
                  </CardFooter>
                  </Link>
                  </Card>
                </div>
            )
        })}
    </div>

{/* <a href="#" class="group text-sky-600 transition duration-300">
Link

</a>
      
      <h3>"Get Stuff Done" Task Manager</h3>
      <p>
        As a personal project, I developed a “Get Stuff Done” task manager web
        app using React. This dynamic website allows users to add, modify and
        edit tasks according to the GTD task methodology. I used React for this
        project to both challenge myself with new technology and also take
        advantage of its declarative programming style with abilities like hooks
        and props. You can visit the live deployment here and the github
        repository here.
      </p>

      <h3>myGarden Plant Manager</h3>
      <p>
        For CPSC 210 Software Construction, I developed a desktop application to
        manage a virtual Garden. The application was made using Java, and the
        Swing and JUnit libraries. It allowed users to add, remove, and water
        plants as well as classify them on different attributes. You can visit
        the github repository here.
      </p> */}
    </div>
  );
}
