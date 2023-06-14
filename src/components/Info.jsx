import React from "react";
import { useState } from "react";

import Projects from "./Projects"
import "../index.css"

export default function Info(props) {
    console.log(props)
    
    return (
        <div className="text-slate-100">
            <div className="info font-sans p-10 md:flex justify-center items-center gap-10 h-1/4">
                <img className='sm:ml-10 max-w-xs w-1/2 drop-shadow-2xl' src="/Ram-headshot.png"></img>
                <div className="p-5">
                    <h1 className="text-6xl mb-2 drop-shadow-2xl">Hi! I'm <span className="text-6xl text-purple-700 hover:underline hover:decoration-solid">Ram Jayakumar</span></h1>
                    <p>Third year Computer Science student @ UBC</p>
                    <div className="buttons flex gap-2 mt-2">
                        <div className="flex items-center p-2 bg-stone-800 w-fit">
                            <i class="fa-solid fa-envelope fa-lg"></i>
                            <p className="ml-2 text-lg">ramjayakumar21@gmail.com</p>
                        </div>
                        <div className="buttons--social flex items-center gap-2">
                            <a href="https://github.com/ramjayakumar21" className="info--github">
                                <i class="fa-brands fa-github fa-xl "></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/" className="info--linkedin">
                                <i class="fa-brands fa-linkedin fa-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apps mt-2">
                <div className="flex p-5">
                    <div className="p-2 flex flex-col items-center text-3xl hover:text-purple-700 hover:bg-slate-100 hover:cursor-pointer" 
                        onClick={() => {props.setProjectsVisible((old) => !old)}}>
                       <img src="icons/Drive.png" className="w-32"></img>
                        Projects
    
                    </div>
                </div>
            </div>
        </div>

        
    )
}