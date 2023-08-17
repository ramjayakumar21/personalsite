import React from "react";

export default function Contact(props) {
    return (
        <div className="about p-10 dark:text-white text-black">
            
            <div className="flex flex-col md:flex-row gap-8">
                <p className=""><span className="text-blue-400">Hey there!</span> My name is Ram Jayakumar and I am a third year
                Computer Science and Statistics student at the University of British Columbia.
                I have completed multiple CS courses including CPSC 210 - Software Construction and
                have a thorough understanding of Java and C++, and am currently working on the MERN stack with React.
                <br></br>
                <br></br>
                <p>Feel free to contact me through my email or use the form!</p>
                </p>
                
                
                <img src="/Ram-headshot.png" className="w-72 h-72"></img>
            </div>
            
        
            
        </div>
    )
}