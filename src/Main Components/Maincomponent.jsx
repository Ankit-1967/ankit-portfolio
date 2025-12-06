import React, {useState} from 'react'
import MainBanner from '../Components/HeroBanner/HeroBanner.jsx'
import About from '../Section/About/About.jsx';
import './Maincomponent.css';
import Skills from '../Section/Skills/Skills.jsx';
import Counter from '../Section/Counter/Counter.jsx';
import Resume from '../Section/Resume/Resume.jsx';
import Testimonials from '../Section/Testimonials/Testimonials.jsx';
import Services from '../Section/Services/Services.jsx';
import Contact from '../Section/Contact/Contact.jsx'
import Popup from '../Section//PopUp/Popup.jsx';
import Review from '../Section/Review/Review.jsx';
function Maincomponent() {

const [review, SetReview] = useState('')
const OpenReview = () => {
  SetReview( (prev) =>  prev === '' ? 'active' :'' )
  const bodyClass = document.body.classList;
 if (bodyClass.contains ('overflow-hidden')){
    bodyClass.remove('overflow-hidden')
 }
 else {
  bodyClass.add('overflow-hidden')
 }

}
  return (
    <>
      <div className='main-component'>
        <Popup Class={review} PopUpFunc={OpenReview}/>
        <MainBanner/>
        <About />
        <Counter />
        <Skills />
        <Resume/>
        <Services />
        <Testimonials />
        <Review PopUpFunc= {OpenReview}/>
        <Contact />
      </div>
    </>
  )
}

export default Maincomponent
