import React from 'react'
import MainBanner from '../Components/HeroBanner/HeroBanner.jsx'
import About from '../Section/About/About.jsx';
import './Maincomponent.css';
import Skills from '../Section/Skills/Skills.jsx';
import Counter from '../Section/Counter/Counter.jsx';
import Resume from '../Section/Resume/Resume.jsx';
import Testimonials from '../Section/Testimonials/Testimonials.jsx';
import Services from '../Section/Services/Services.jsx';
import Contact from '../Section/Contact/Contact.jsx'
function Maincomponent() {


  return (
    <>
      <div className='main-component'>
        <MainBanner/>
        <About/>
        <Counter />
        <Skills />
        <Resume/>
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  )
}

export default Maincomponent
