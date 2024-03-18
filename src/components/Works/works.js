import React from 'react'
import './works.css'
import musicApp from '../../assets/musicApp.png'
import currencyApp from '../../assets/currencyApp.png'
import todoApp from '../../assets/todoApp.png'
function Works() {
  return (
    <div>
        <section id="works">
            <h2 className="workTitle">
                My Portfolio
            </h2>
            <span className="workDesc">
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help business achieve their goals and create a stron online presence.
            </span>
            <div className="workImgs">
            <div className='pFrame'><a href="https://steady-monstera-91b0eb.netlify.app/" target="_blank" rel="noreferrer"><img src={musicApp} alt="" className="workImg"/></a><span className='pTitle'>Music App</span></div>
            <div className='pFrame'><a href="https://resilient-flan-f09e1c.netlify.app/" target="_blank" rel="noreferrer"><img src={currencyApp} alt="" className="workImg"/></a><span className='pTitle'>Currency Converter</span></div>
            <div className='pFrame'> <a href="https://visionary-cajeta-31f4df.netlify.app/" target="_blank" rel="noreferrer"><img src={todoApp} alt="" className="workImg"/></a><span className='pTitle'>Todo App</span></div>
            </div>
            <button className="workBtn">See More</button>
        </section>
    </div>
  )
}

export default Works
