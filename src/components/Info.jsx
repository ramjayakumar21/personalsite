import React from "react";

export default function Info(props) {
    return (
        <div className="info">
            <img className='info--headshot' src="/Ram-headshot.png"></img>
            <div className={`info--text ${props.darkMode ? "dark" : ""}`}>
                <h1>Ram Jayakumar</h1>
                <p>Computer Science Third Year @ UBC</p>
                <div className="buttons">
                    <div className="info--email">
                        <i class="fa-solid fa-envelope fa-lg"></i>
                        <p>ramjayakumar21@gmail.com</p>
                    </div>
                    <div className="buttons--social">
                        <a href="https://github.com/ramjayakumar21" className="info--github">
                            <i class="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/" className="info--linkedin">
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}