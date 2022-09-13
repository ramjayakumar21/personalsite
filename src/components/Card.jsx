import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";

export default function Card(props) {
    return (
        <div className={`card ${props.darkMode ? "dark" : ""}`}>
            <Info darkMode={props.darkMode}/>
            <About darkMode={props.darkMode}/>
            <Footer />
        </div>
    )
}