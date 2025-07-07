import React from 'react'
import MainBanner from '../Components/HeroBanner/HeroBanner.jsx'
import About from '../Section/About/About.jsx';
import './Maincomponent.css';
import Skills from '../Section/Skills/Skills.jsx';
import Counter from '../Section/Counter/Counter.jsx';
function Maincomponent() {
  return (
    <>
      <div className='main-component'>
        <MainBanner/>
        <About/>
        <Counter />
        <Skills />
      </div>
    </>
  )
}

export default Maincomponent
