import React from "react";

export default function Contact(props) {
    return (
        <div className="about">
            <h1>About</h1>
            <p><span className={`${props.darkMode ? "orange" : "purple"}`}>Hey there!</span> My name is Ram Jayakumar and I am a second year
            Computer Science and Statistics student at the University of British Columbia.
            I have completed multiple CS courses including CPSC 210 - Software Construction and 
            have a thorough understanding of Java and C++, and am currently working on the MERN stack with React.</p>
            <p>Feel free to contact me through my email for any opportunities or questions!</p>
        </div>
    )
}