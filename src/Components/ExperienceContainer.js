import React from 'react'
import { Element } from "react-scroll"
import ExperienceBox from "./ExperienceBox"
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" id="exp">
            <h1>Experience</h1>
            <div className='experienceContainer__info'>
                <ExperienceBox number="0" title="Experience" />
                <ExperienceBox number="0" title="Clients" />
                <ExperienceBox number="11" title="Projects" style={{backgroundColor:"#f64c08"}}/>
                {/* <ExperienceBox number="0" title="Years Technician" /> */}
            </div>

        </Element>
    )
}

export default ExperienceContainer
