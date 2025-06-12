import React from 'react'
import './Aside.css';
import Image from '../../Images/portfolio_image1.png';
// import Linkedin from '../../Icons/Linkdin'
function Aside() {
  return (
    <>
     <div>
      <div className="sidebar_wrapper">
        <div className="sidebar">
          <div className="aside_image-wrapper">
            <div className="aside_image">
              <img src={Image} alt="aside_image"/>
            </div>
          </div>
          <h2 className='asideName'>Ankit Thakur</h2>
          <div className='aside-social_links_wrapper'>
            <ul class="aside-social_links">
              Ankit Thakur
            </ul>
          </div>
        </div>
      </div>    
    </div> 
    </>
  )
}

export default Aside
