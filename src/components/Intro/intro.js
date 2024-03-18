import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm
             <span className='introName'> Sittara</span></span>
            <span>Front-end web designer</span>
            <div className="skillDesc">
            <p className="introPara">I am a skilled web designer who creates visually appealing and user friendly wesbsites.I enjoy writing code, and can at least translate my ideas into code :-).<span className="skillPara2">I know how to use <span className="lite">Python</span> and <span className="lite">C++</span> and I am fairly proficient in <span className="strong">JavaScript</span>.<br/>
        My field of interest is to develope websites by applying JavaScript Library<span className="strong"> React Js</span></span> </p>
        </div>
            <Link><button className="btn">
  <a href="./resume/Sittara_Shafique.pdf" download>
    <img className='btnImg' src={btnImg} alt="Hire me" />
    <span>Hire me</span>
  </a>
</button>
</Link>            
        </div>
    </section>
  )
}

export default Intro
