import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";

export default function Card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Footer />
        </div>
    )
}