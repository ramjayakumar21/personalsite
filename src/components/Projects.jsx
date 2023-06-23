import Window from "./Window";
import About from "./About";

export default function Projects() {

    let element = (
        <div>
            <h1>Projects</h1>
            <h3>"Get Stuff Done" Task Manager</h3>
            <p>
                As a personal project, I developed a “Get Stuff Done” task manager web app using React. This dynamic website allows users to add, modify and edit tasks according to the GTD task methodology. 
                I used React for this project to both challenge myself with new technology and also take advantage of its declarative programming style with abilities like hooks and props. 
                You can visit the live deployment here and the github repository here.
            </p>

            <h3>myGarden Plant Manager</h3>
            <p>For CPSC 210 Software Construction, I developed a desktop application to manage a virtual Garden. The application was made using Java, and the Swing and JUnit libraries. 
                It allowed users to add, remove, and water plants as well as classify them on different attributes. You can visit the github repository here.
            </p>
                



        </div>
    )

    return (
        <Window 
            title="Projects"
            child={element}
        />
        
    )
}