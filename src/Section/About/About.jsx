import React from 'react'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import { sectiondata } from '../../Data/Section Data//Sectiondata'
import ImagewithText from '../../Components/ImagewithText/ImageWithText'
function About({PopUpFunc}) {
  return (
    <>
      <section className='about-wrapper section-container'>
        <div class="container">
            <SectionHeading
             sectionName={sectiondata.about.sectionName} 
             sectionDescription = {sectiondata.about.sectionDescription}/>
             <ImagewithText />
             <btn className="btn" onClick={PopUpFunc}>test</btn>
        </div>
      </section>
    </>
  )
}

export default About
