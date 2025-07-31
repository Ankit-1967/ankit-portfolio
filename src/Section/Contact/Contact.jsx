import React from 'react'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import { sectiondata } from '../../Data/Section Data/Sectiondata'
import Address from '../../Icons/Address.jsx'
import ContactListItem from './ContactListItem.jsx'
import Phone from "../../Icons/Phone.jsx"
import Mail from "../../Icons/Mail.jsx"
import './Contact.css'
import ContactForm from './ContactForm.jsx'
function Contact() {
  return (
    <>
      <section className='contact-wrapper section-container'>
        <div className='container'>
            < SectionHeading 
                sectionName={sectiondata.contact.sectionName}
                sectionDescription={sectiondata.contact.sectionDescription}
            />
            <div className='contact-items-wrapper flex flex-row-2'>
              <div className='contact-info-wrap flex-item'>
                <ContactListItem Link="facebook.com" Icon={Address} Title="Address" Description="Vill. Athman" />
                <ContactListItem Link="tel:9882170629" Icon={Phone} Title="Call Us" Description="+91 98821 70629" />
                <ContactListItem Link="mailto:at667448@gmail.com" Icon={Mail} Title="Email Us" Description="at667448@gmail.com" />
              </div>
              <div className='contact-form-wrapper flex-item'>
                <ContactForm />
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
