import React, { useState, useEffect } from 'react'
import Banner_Image from '../../Images/Banner_image.png';
import './HeroBanner.css'
function MainBanner({Image, Name = "Ankit Thakur" , text=["Ankit Thakur", "Frontend Developer", "Shopify Developer"]} ) {
  
// const Text = "Hi i am a";
const [displayText, setDisplayText] = useState('');

const Text = text;
const TextLen = Text.length;
const TypingSpeed = 2; // in sec
useEffect(()=>{
  let CurrentIndex = 0;
  let StrIndex = 0;
  let CurrentText ="";
  let reverse = false;
  const TypingText = () => {
  
    const word = Text[CurrentIndex];

    if (!reverse){
      CurrentText += word[StrIndex];
      StrIndex++;
    }
    else{
      CurrentText = CurrentText.slice(0, -1);
      StrIndex--;
    }

    setDisplayText(CurrentText);

    if ( !reverse && StrIndex === word.length){
      reverse = true;
      setTimeout(TypingText, TypingSpeed * 1000);
      return;
    }

    if(reverse && StrIndex === 0){
      reverse = false;
      CurrentIndex = (CurrentIndex + 1 ) % TextLen;
    }

    setTimeout(TypingText, TypingSpeed * 100);
  };
  
  TypingText();

}, TypingSpeed * 1000);
  

  return (
    <>
      <section className='main-banner-wrapper'>
          <div className='main-banner'>
              <img src={Image || Banner_Image} alt="Banner_Image"/>
          </div>

          <div className="banner-text-wrapper">
            <div className='baner_text'>
              <h1 className="author_name">
                {Name}
              </h1>
              <p className='author_details'>I am <span className='typing_text'>{displayText}</span><span className='blinker'></span></p>
            </div>
          </div>
      </section>
    </>
  )
}

export default MainBanner
