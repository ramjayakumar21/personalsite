import React from "react";
import { useState } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import Projects from "./Projects";
import "../index.css";

export default function Main() {
  return (
    <div className="">
      <div className="info flex flex-col gap-10 items-center ">
        <div className="card mt-4 bg-base-100 w-5/6 shadow-xl p-10 animate-fade_grow_in dark:bg-slate-700">
          <div className="flex md:flex-row flex-col justify-center items-center gap-10 transition-transform ease-in duration-300 text-bla">
            <img
              className="w-5/6 md:w-72 transition-all hover:scale-105 ease-in-out"
              src="/Ram-headshot.png"
            ></img>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-7xl object-cover mb-2 text-black dark:text-white text-center">
                Hi! I'm{" "}
                <span className="gradient-text text-4xl md:text-7xl font-semibold whitespace-nowrap">
                  Ram Jayakumar
                </span>
              </h1>
              <p className="text-m md:text-2xl text-black dark:text-white">
                4th Year Computer Science Student @ UBC
              </p>
              <div className="buttons flex md:flex-row flex-col gap-2 mt-6 flex-wrap items-center">
                <div className="flex items-center p-2 bg-stone-800 w-fit rounded-md">
                  <i className="fa-solid fa-envelope fa-lg"></i>
                  <p className="text-lg ml-2 p-1">ramjayakumar21@gmail.com</p>
                </div>
                <div className="buttons--social flex items-center  flex-wrap gap-2">
                  <a
                    href="https://github.com/ramjayakumar21"
                    className="bg-slate-900 p-3 hover:bg-slate-600 rounded-md"
                  >
                    <i className="fa-brands fa-github fa-xl mr-1"></i> Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/"
                    className="bg-blue-600 p-3 hover:bg-blue-700 rounded-md"
                  >
                    <i className="fa-brands fa-linkedin fa-xl mr-1"></i>{" "}
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center animate-fade_grow_in"
          style={{ animationDuration: "1.2s" }}
        >
          <div className="text-xl mt-8 rounded-lg p-5 max-w-6xl w-5/6 bg-slate-200 text-cyan-700 dark:text-slate-100 dark:bg-cyan-800 bg-opacity-60">
            As a fourth year Computer Science student with experience at
            companies{" "}
            <a
              href="/experience"
              className="underline decoration-dotted decoration-2 font-bold hover:text-cyan-600"
            >
              large and small,
            </a>{" "}
            I always strive to better myself as both a software engineer and
            student.
            <br></br>
            <br></br>I am always ready to learn and venture out of my comfort
            zone, whether that's{" "}
            <a
              href="/projects"
              className="underline decoration-dotted decoration-2 font-bold hover:text-cyan-600"
            >
              winning a hackathon
            </a>{" "}
            or{" "}
            <a
              href="/experience"
              className="underline decoration-dotted decoration-2 font-bold hover:text-cyan-600"
            >
              becoming the software team lead on a drone engineering design team
            </a>
            .<br></br>
            <br></br>I have experience with web development, data science, and
            devops, but am currently focused on developing my skills in embedded
            development.
            <br></br>
            <br></br>
            Scroll down to see my experience and projects.
            <ArrowDownIcon boxSize="1.5em" className="animate-bounce mt-1" />
          </div>
        </div>
        <div className="text-black md:flex md:space-x-16">
          <a href="./experience">
            <div className="card bg-base-100 bg-slate-200 w-96 shadow-xl mb-10 hover:scale-105 transition-all">
              <figure>
                <img src="./sap_logo.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Work Experience</h2>
                <p>Learn more about the places I've worked at.</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </a>

          <a href="./projects">
            <div className="card bg-base-100 bg-slate-200 w-96 shadow-xl mb-10 hover:scale-105 transition-all">
              <figure>
                <img
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/730/170/datas/gallery.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Project Work</h2>
                <p>Learn more about the projects I've worked on.</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
