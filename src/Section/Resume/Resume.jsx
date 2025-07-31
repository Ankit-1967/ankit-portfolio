import React from 'react'
import './Resume.css'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import { sectiondata } from '../../Data/Section Data/Sectiondata'
import ResumeList from '../../Components/ResumeList/ResumeList'

function Resume() {
  return (
        <>
            <section className='resume-wrapper section-container'>
            <div className='container'>
                <div className='resume-tiile'>
                    <SectionHeading sectionName={sectiondata.resume.sectionName}
                        sectionDescription={sectiondata.resume.sectionDescription}/>
                </div>
                <div className='resume-list-wrapper'>
                    <div className='half-width'>
                        <ResumeList/>
                        <ResumeList/>
                        <ResumeList/>
                    </div>
                    <div className='half-width'>
                        <ResumeList/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Resume
