import Window from "./Window";
import Contact from "./About";
import { Tag, Card, CardHeader, CardBody, CardFooter, Image, Button, ButtonGroup, Stack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Projects() {
  let toolsArray = ["React", "Express", "Node", "MongoDB", "R", "Java"];

  let projectsArray = [
    {
        name: "Ensemble",
        image: "https://i.imgur.com/2Z2Z3ZM.png",
        date: "Jan 2023 - Present",
        description: "A web app to share music reviews with friends",
        tools: ["React", "Express", "Node", "MongoDB", "Spotify API"],
        id: 1
    },
    {
        name: "Regression",
        image: "https://i.imgur.com/2Z2Z3ZM.png",
        date: "Oct 2023 - Dec 2023",
        description: "A desktop application to manage a virtual garden",
        tools: ["R", "Statistics", "Classification"],
        id: 2
    },
    {
        name: "Get Stuff Done",
        image: "https://i.imgur.com/2Z2Z3ZM.png",
        date: "Mar 2022 - Jul 2022",
        description: "A task manager web app built using React",
        tools: ["React", "HTML", "CSS", "npm"],
        id: 3
    },
    {
        name: "myGarden Plant Manager",
        image: "https://i.imgur.com/2Z2Z3ZM.png",
        date: "Jan 2022 - Apr 2022",
        description: "A desktop application to manage a virtual garden",
        tools: ["Java", "JUnit", "Swing"],
        id: 4
    }

]

  return (
    <div className="p-10">
      <div className="tools mb-2">
        <h1 className="text-2xl text-center mb-1">TOOLS</h1>
        {toolsArray.map((tool) => {
          return (
            <Tag className="m-1" size="lg" variant="solid" colorScheme="blue">
              {tool}
            </Tag>
          );
        })}
        
      </div>
      
    <div className="my-2"><Divider /></div>

    
    <div className="flex flex-col flex-wrap">
        {projectsArray.map((project) => {
            return (
            <Link to={`./${project.id}`}>
                <Card maxW="md" mt={6}>
                <CardBody>
                  <Image
                    src={project.image}
                    alt={project.name + " image"}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <h1 className="text-3xl">{project.name}</h1>
                    <div className="date text-purple-700">{project.date}</div>
                    <div>{project.description}</div>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                {project.tools.map((tool) => {
                  return (
                    <Tag className="p-2 mr-2" size="md" variant="solid" colorScheme="blue">
                      {tool}
                    </Tag>
                  );
                })}
                </CardFooter>
                      </Card>
            </Link>
            )
        })}
    </div>

<a href="#" class="group text-sky-600 transition duration-300">
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
      </p>
    </div>
  );
}
