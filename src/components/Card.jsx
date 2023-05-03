import {React, useState} from "react";
import About from "./About";
import Projects from "./Projects";
import Info from "./Info";

export default function Card(props) {
    const [visibleContent, setVisibleContent] = useState("About")


    return (
        <div className={`card ${props.darkMode ? "dark" : ""}`}>
             <div className="card-content">
                <div className="card-content--links">
                    <div className="about-icon">
                        <button onClick={() => {setVisibleContent("About")}} className="about-icon--button"></button>
                        <div>About</div>
                    </div>
                    <div className="project-icon">
                        <button onClick={() => {setVisibleContent("Projects")}} className="project-icon--button"></button>
                        <div>Projects</div>
                    </div>
                    <div className="contacts-icon">
                        <button onClick={() => {setVisibleContent("Contacts")}} className="contacts-icon--button"></button>
                        <div>Contacts</div> 
                    </div>
                </div>
                <div className="card-content--window">
                    <div className="card-content--text">
                        
                        <About visibility={visibleContent}/>
                        <Projects visibility={visibleContent}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}