import React from 'react'
import AboutImage from '../../Images/portfolio_image1.png';
function ImagewithText() {
  return (
    <>
      <div className='imagw-with-text-wrapper'>
        <div className="image-wrapper">
          <img src={AboutImage}  alt="About Image"/>
        </div>
        <div className="text-wrapper">
          <h3 className="heading">UI/UX Designer & Web Developer.</h3>
          <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="about-list-wrapper">
            <ul className="about-list">
              <li className="about-list-item"><span className="bold-text">Birthday:</span><span className="text-details">04Sept1998</span></li>
              <li className="about-list-item"><span className="bold-text">Age:</span><span className="text-details">28</span></li>
              <li className="about-list-item"><span className="bold-text">Website:</span><span className="text-details">www.example.com</span></li>
              <li className="about-list-item"><span className="bold-text">Degree:</span><span className="text-details">Polytechnic</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagewithText

