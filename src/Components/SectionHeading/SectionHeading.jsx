import React from 'react'
import "./SectionHeading.css"
function SectionHeading({sectionName = "Heading Title", sectionDescription="write description here"}) {
  return (
    <>
      <div className='section-text-wrapper'>
        <div className='section-heading-wrapper'>
            <h2 className='section-heading'>{sectionName}</h2>
        </div>
        <div className='section-description-wrapper'>
            <p className='section-description'>
                {sectionDescription}
            </p>
        </div>
      </div>
    </>
  )
}

export default SectionHeading;
