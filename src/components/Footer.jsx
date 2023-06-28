import React from "react";

export default function Footer() {
    return (
        <div>
            <h1>Technical Projects</h1>
            <h2>Ensemble</h2>
            <p>As someone who listens to a ton of music, I've always wanted a platform to share my opinions with my friends in an easy way. Ensemble was made to fulfill that need! It allows users to create reviews for albums, choose their top songs and see listening info based on their Spotify Account. I used Typescript in React, Node, Express, and MongoDB to create this app. 
            <a className="footer-link" href="https://ensemble-sbdx.onrender.com/">You can visit the live deployment here</a> and <a className="footer-link" href="https://github.com/ramjayakumar21/Ensemble">the github repository here.</a></p>
            <h2>Predicting Heart Disease Classification Model</h2>
            <p>For DSCI 100, we developed a classification model to predict whether a patient has heart disease or not. It was built in R, and used the KNN (K-nearest neighbours) classification algorithm with forward selection to pick the best predictors.
            You can visit <a className="footer-link" href="https://github.com/ramjayakumar21/group-project-dsci100">the github repository here.</a></p>
            <h2>"Get Stuff Done" Task Manager</h2>
            <p>As a personal project, I am developing a “Get Stuff Done” task manager web app using React. This dynamic website allows users to add, modify and edit tasks according to the GTD task methodology. 
                I used React for this project to both challenge myself with new technology and also take advantage of its declarative programming style with abilities like hooks and props. <a className="footer-link" href="https://simplegtd-nnshudw4j-ramjayakumar21.vercel.app/">You can visit the live deployment here</a> and <a className="footer-link" href="https://github.com/ramjayakumar21/simplegtd">the github repository here.</a></p>
            <h2>myGarden Plant Manager</h2>
            <p> For CPSC 210 Software Construction, I developed a desktop application to manage a virtual Garden. 
                The application was made using Java, and the Swing and JUnit libraries. It allowed users to add, remove, and water plants as well as classify them on different attributes. <a className="footer-link" href="https://github.com/ramjayakumar21/GardenManager">You can visit the github repository here.</a></p>
                &nbsp;
        </div>
    )
}