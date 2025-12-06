import React from 'react'
import AboutImage from '../../Images/portfolio_image1.png'
import './ImageWithText.css'
import ChevronRight from '../../Icons/ChevronRight'
function ImageWithText() {
  let Age = 0;
  let CurrentDate = new Date();
  let CurrentYear = CurrentDate.getFullYear();
  let Birthyear = 1998;
   Age = CurrentYear - Birthyear;
  return (
    <>
      <div className='image-with-text-wrapper'>
        <div className="image-wrapper">
          <img src={ AboutImage }  alt="About"/>
        </div>
        <div className="text-wrapper">
          <h3 className="heading">UI/UX Designer & Web Developer.</h3>
          <p className="about-description fs-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="about-list-wrapper">
            <ul className="about-list">
              <li className="about-list-item"><span className='list-icon'>< ChevronRight/></span><span className="bold-text">Birthday:</span><span className="text-details">04 Sept 1998</span></li>
              <li className="about-list-item"><span className='list-icon'>< ChevronRight/></span><span className="bold-text">Age:</span><span className="text-details">{Age}</span></li>
              <li className="about-list-item"><span className='list-icon'>< ChevronRight/></span><span className="bold-text">Website:</span><span className="text-details">www.example.com</span></li>
              <li className="about-list-item"><span className='list-icon'>< ChevronRight/></span><span className="bold-text">Degree:</span><span className="text-details">Polytechnic</span></li>
            </ul>
          </div>
          <p class="about-description about-description-2">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
        </div>
      </div>
    </>
  )
}

export default ImageWithText
