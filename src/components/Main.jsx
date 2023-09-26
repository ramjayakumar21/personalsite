import React from "react";
import { useState } from "react";

import Projects from "./Projects"
import "../index.css"

export default function Main() {
    
    return (
        <div className="">
            <div className="info text-slate-100 bg-gradient-to-r p-10 dark:from-purple-500 dark:via-red-600 dark:to-blue-500 from-orange-600  via-yellow-500 to-emerald-500 background-animate  md:h-screen gap-10 ">
                
                <div className="flex md:flex-row flex-col justify-center items-center gap-10 transition-transform ease-in duration-300 ">
                    <img className='animate-fade_grow_in drop-shadow-2xl w-72 h-72 transition-all hover:scale-105 ease-in-out' src="/Ram-headshot.png"></img>
                    <div className="animate-fade_grow_in flex flex-col items-center">
                        <h1 className="text-5xl md:text-5xl object-cover mb-2 drop-shadow-2xl">:// Hi! I'm <span className="text-5xl md:text-7xl font-semibold hover:underline hover:decoration-solid">Ram Jayakumar</span></h1>
                        <p className="text-l md:text-2xl">3rd Year Computer Science student @ UBC</p>
                        <div className="buttons flex md:flex-row flex-col gap-2 mt-6 flex-wrap items-center">
                            <div className="flex items-center p-2 bg-stone-800 w-fit rounded-md">
                                <i class="fa-solid fa-envelope fa-lg"></i>
                                <p className="text-lg ml-2 p-1">ramjayakumar21@gmail.com</p>
                            </div>
                            <div className="buttons--social flex items-center  flex-wrap gap-2">
                                <a href="https://github.com/ramjayakumar21" className="bg-slate-900 p-3 hover:bg-slate-600 rounded-md">
                                    <i class="fa-brands fa-github fa-xl mr-1"></i> Github
                                </a>
                                <a href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/" className="bg-blue-600 p-3 hover:bg-blue-700 rounded-md">
                                    <i class="fa-brands fa-linkedin fa-xl mr-1"></i> Linkedin
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center animate-fade_grow_in" style={{animationDuration:"1.2s"}} >
                    <div className="text-xl mt-8 rounded-lg p-5 max-w-6xl  bg-slate-100 text-cyan-700 dark:text-slate-100 dark:bg-slate-800 dark:bg-opacity-70 bg-opacity-70">
                        I am a third year CPSC student at the University of British Columbia with a passion for software development and data science.
                        <br></br>
                        <br></br>
                        I have multiple projects ranging from full stack web development to data analysis that you can visit on the projects page.
                        <br></br>
                        <br></br>
                        Feel free to contact me through my email for any opportunities or questions!
                    </div>
                </div>

                
            </div>
            
                
        </div>

        
    )
}