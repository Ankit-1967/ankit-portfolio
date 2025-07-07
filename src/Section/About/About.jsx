import React from 'react'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import { sectiondata } from '../../Data/Section Data//Sectiondata'
import ImagewithText from '../../Components/ImagewithText/ImageWithText'
function About() {
  return (
    <>
      <section className='about-wrapper section-container'>
        <div class="container">
            <SectionHeading
             sectionName={sectiondata.about.sectionName} 
             sectionDescription = {sectiondata.about.sectionDescription}/>
             <ImagewithText />
        </div>
      </section>
    </>
  )
}

export default About
