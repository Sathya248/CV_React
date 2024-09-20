import React from 'react'
import { Element } from "react-scroll"
import skillImg from "../../src/Images/images1.jpg"
import LinearProgress from "@mui/material/LinearProgress"
import "./SkillContainer.css"


const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className='skillContainer__image'>
        <img src={skillImg} alt="" />
      </div>
      <div className='skillContainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillSet'>
          <h5>React</h5>
          <div className='skillContainer__slider skillContainer__slider1'>
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div >

        <div className='skillContainer__skillSet'>
          <h5>Javascript</h5>
          <div className='skillContainer__slider skillContainer__slider2'>
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div >

        <div className='skillContainer__skillSet'>
          <h5>Css</h5>
          <div className='skillContainer__slider skillContainer__slider3'>
            <LinearProgress variant="determinate" value={65} />
          </div>
        </div >

        <div className='skillContainer__skillSet'>
          <h5>Html</h5>
          <div className='skillContainer__slider skillContainer__slider4'>
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div >

      </div>
    </Element>
  )
}

export default SkillContainer