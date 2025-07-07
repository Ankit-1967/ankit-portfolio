import React from 'react'
import './Skills.css'
import { sectiondata } from '../../Data/Section Data/Sectiondata'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'

function Skills() {
  return (
    <>
      <section className='skills-wrapper section-container'>
        <div className='container'>
            <SectionHeading
                sectionName={sectiondata.skills.sectionName} 
                sectionDescription = {sectiondata.skills.sectionDescription}/>
            <div className='skills-list-wrapper'>
                <ul className='skill-list'>
                    <li className='skill-type half-width'>
                        <span className="skill half-width">HTML</span>
                        <span className='skill-val half-width'counter-data = "100%">0</span>
                        <span className='skill-counter skill-val-100 full-width' style={{'--scroll-length':"100%"}}></span>
                    </li>
                    <li className='skill-type half-width'>
                        <span className="skill half-width">CSS</span>
                        <span className='skill-val half-width' counter-data = "80%">0</span>
                        <span className='skill-counter skill-val-100 full-width' style={{'--scroll-length':"80%"}}></span>
                    </li>
                    <li className='skill-type half-width'>
                        <span className="skill half-width">Liquid</span>
                        <span className='skill-val half-width' counter-data = "80%">0</span>
                        <span className='skill-counter skill-val-100 full-width' style={{'--scroll-length':"80%"}}></span>
                    </li>
                    <li className='skill-type half-width'>
                        <span className="skill half-width">JavaScript</span>
                        <span className='skill-val half-width' counter-data = "40%">0</span>
                        <span className='skill-counter skill-val-100 full-width' style={{'--scroll-length':"40%"}}></span>
                    </li>
                    <li className='skill-type half-width'>
                        <span className="skill half-width">React</span>
                        <span className='skill-val half-width'counter-data = "40%">0</span>
                        <span className='skill-counter skill-val-100 full-width' style={{'--scroll-length':"40%"}}></span>
                    </li>
                </ul>
            </div>
        </div>
      </section>
    </>
  )
}

export default Skills
