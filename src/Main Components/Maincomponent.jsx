import React from 'react'
import MainBanner from '../Components/HeroBanner/HeroBanner.jsx'
import About from '../Section/About/About.jsx';
import './Maincomponent.css';
function Maincomponent() {
  return (
    <>
      <div className='main-component'>
        <MainBanner/>
        <About/>
      </div>
    </>
  )
}

export default Maincomponent
