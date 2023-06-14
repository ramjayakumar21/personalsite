import Window from "./Window";
import About from "./About";

export default function Projects() {

    let element = (
        <About></About>
    )

    return (
        <Window 
            child={element}
        />
        
    )
}