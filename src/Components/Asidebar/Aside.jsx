import React from 'react'
import './Aside.css';
import Image from '../../Images/portfolio_image1.png';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import MainLinks from '../NavigationLinks/MainLinks.jsx';
// import Linkedin from '../../Icons/Linkdin'
function Aside() {
  return (
    <>
     <>
      <div className="sidebar_wrapper">
        <div className="sidebar">
          <div className="aside_image-wrapper">
            <div className="aside_image">
              <img src={Image} alt="aside_image"/>
            </div>
          </div>
          <h2 className='asideName'>Ankit Thakur</h2>
          <SocialLinks/>
          <MainLinks/>
        </div>
      </div>    
    </> 
    </>
  )
}

export default Aside
