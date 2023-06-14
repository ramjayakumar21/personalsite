import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";

export default function Desktop(props) {
    return (
        <div className='1s ease-in-out delay-150 bg-blue-500
        m-auto rounded-lg w-5/6 max-w-screen-xl h-fit bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-xl'>
            <div className="bg-gray-900 text-slate-100 rounded-t-md p-2 gap-1 flex items-center">
                <div className="bg-red-400 rounded-full w-3 h-3"></div>
                <div className="bg-yellow-400 rounded-full w-3 h-3"></div>
                <div className="bg-green-400 rounded-full w-3 h-3"></div>
                Ram's Desktop
            </div>
            <Info setProjectsVisible={props.setProjectsVisible}/>
            {/* <About darkMode={props.darkMode}/>
            <Footer /> */}
        </div>
    )
}