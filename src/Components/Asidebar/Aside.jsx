import React from 'react'
import './Aside.css';
import Image from '../../Images/portfolio_image1.png';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import MainLinks from '../NavigationLinks/MainLinks.jsx';
// import Linkedin from '../../Icons/Linkdin'
function Aside({Class}) {
  return (
    <>
      <aside className={`sidebar_wrapper ${Class}`}>
        <div className="sidebar">
          <div className="aside_image-wrapper">
            <div className="aside_image">
              <img src={Image} alt="aside_image"/>
            </div>
          </div>
          <h3 className='asideName text-center'>Ankit Thakur</h3>
          <SocialLinks/>
          <MainLinks/>
        </div>
      </aside>    
    </>
  )
}

export default Aside
