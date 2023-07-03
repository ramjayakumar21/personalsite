import React from "react";
import { useState } from "react";

import Projects from "./Projects"
import "../index.css"

export default function Info() {
    
    return (
        <div className="">
            <div className="info text-slate-100 bg-gradient-to-r p-10 from-purple-500  via-red-600 background-animate to-blue-500  gap-10">
                
                <div className="md:flex items-center gap-10 transition-transform ease-in duration-300">
                    <img className='drop-shadow-2xl mb-5 max-w-sm ' src="/Ram-headshot.png"></img>
                    <div>
                        <h1 className="text-6xl md:text-5xl object-cover mb-2 drop-shadow-2xl">:// Hi! I'm <span className="text-6xl font-semibold hover:underline hover:decoration-solid">Ram Jayakumar</span></h1>
                        <p className="text-xl">3rd Year Computer Science student @ UBC</p>
                        <div className="buttons flex gap-2 mt-2 flex-wrap">
                            <div className="flex items-center p-2 bg-stone-800 w-fit">
                                <i class="fa-solid fa-envelope fa-lg"></i>
                                <p className="text-lg">ramjayakumar21@gmail.com</p>
                            </div>
                            <div className="buttons--social flex flex-wrap items-center gap-2">
                                <a href="https://github.com/ramjayakumar21" className="bg-slate-900 p-3 hover:bg-slate-600 rounded-md">
                                    <i class="fa-brands fa-github fa-xl "></i>
                                </a>
                                <a href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/" className="bg-blue-600 p-3 hover:bg-blue-700 rounded-md mr-5">
                                    <i class="fa-brands fa-linkedin fa-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-xl mt-5 rounded-lg p-5">
                    I am a third year CPSC student at the University of British Columbia with a passion for software development and data science. 
                    I have multiple projects ranging from full stack web development to data analysis that you can visit on the projects page. 
                    Feel free to contact me through my email for any opportunities or questions!
                </div>

                
            </div>
            
                
        </div>

        
    )
}