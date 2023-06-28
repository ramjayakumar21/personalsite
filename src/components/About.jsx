import React from "react";

export default function About(props) {
    return (
        <div className="about">
            <h1>About</h1>
            <p><span className={`${props.darkMode ? "orange" : "purple"}`}>Hey there!</span> My name is Ram Jayakumar and I am a third year
            Computer Science student at the University of British Columbia.
            I have completed multiple projects ranging from web development to data analysis</p>
            <p>Feel free to contact me through my email for any opportunities or questions!</p>
        </div>
    )
}