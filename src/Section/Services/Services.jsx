import React from 'react'
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import { sectiondata } from '../../Data/Section Data/Sectiondata';
import ServiceItem from '../../Components/ServiceItem/ServiceItem';
function Services() {
  return (
    <>
        <section className='services-wrapper section-container pt-0'>
            <div className='container'>
                <div className="services-heading">
                    <SectionHeading 
                        sectionName={sectiondata.services.sectionName}
                        sectionDescription={sectiondata.services.sectionDescription} />
                </div>
                <div className="service-list-wrapper">
                    <div className="service-list flex flex-row-3">
                        < ServiceItem />
                        < ServiceItem />
                        < ServiceItem />
                        < ServiceItem />
                        < ServiceItem />
                        < ServiceItem />
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Services
