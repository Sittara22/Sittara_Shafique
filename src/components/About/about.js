import React from "react";
import "./about.css";
import js from "../../assets/js.png";
import CSS from "../../assets/css3-alt.png";
import HTML from "../../assets/html5.png";
import react from "../../assets/react.png";
import git from "../../assets/git-alt.png";
import tailwind from "../../assets/tailwind.png";
function About() {
  return (
    <div>
      <section id="about">
        <div className="aboutMe">
          <span className="title">What I do?</span>
          <br />
          <span className="introDesc">
            Hello,My name is <span className="focu">Sittara Shafique</span>, and
            I currently reside in London. I did my{" "}
            <span className="focus">
              Master's degree in computer science in 2018
            </span>{" "}
            and worked as a{" "}
            <span className="focus">
              Computer Science Lecturer from 2018 to 2021.
            </span>{" "}
            I then pursued a second{" "}
            <span className="focus">
              Master's degree in project management from the University of the
              West of Scotland's London campus in 2021–2022
            </span>
            , immediately after which I learned new web development concepts.{" "}
          </span>
          <br />{" "}
          <span className="introDesc">
            Hi,here are the set of skills that helps me to develope a website.{" "}
          </span>
          <div className="skillsIcon">
            <div className="IconDiv">
              <span className="imgFrame">
                <img src={js} alt="" className="Icon" />
              </span>
              <h2 className="text">Javascript</h2>
            </div>
            <div className="IconDiv">
              {" "}
              <span className="imgFrame">
                <img src={CSS} alt="" className="Icon" />
              </span>
              <h2 className="text">CSS</h2>
            </div>
            <div className="IconDiv">
              <span className="imgFrame">
                <img src={HTML} alt="" className="Icon" />
              </span>
              <h2 className="text">HTML</h2>
            </div>
            <div className="IconDiv">
              <span className="imgFrame">
                <img src={react} alt="" className="Icon" />
              </span>
              <h2 className="text">React</h2>
            </div>
            <div className="IconDiv">
              <span className="imgFrame">
                <img src={tailwind} alt="" className="Icon" />
              </span>
              <h2 className="text">Tailwind CSS</h2>
            </div>

            <div>
              <span className="imgFrame">
                <img src={git} alt="" className="Icon" />
              </span>
              <h2 className="text">Git</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
