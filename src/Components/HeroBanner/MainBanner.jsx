import React, { useState, useEffect } from 'react'
import Banner_Image from '../../Images/Banner_image.png';
import './MainBanner.css'
function MainBanner({Image, Name = "Ankit Thakur" , text=["Ankit Thaur", "Frontend Developer", "Shopify Developer"]} ) {
  
// const Text = "Hi i am a";
const Text = text;
const TextLen = Text.length;
const TypingSpeed = .5; // in sec
const [displayText, setDisplayText] = useState('');
 
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

    setTimeout(TypingText, TypingSpeed * 1000);

  //   let word = Text[CurrentIndex];
  //   CurrentText += word[StrIndex];
  //   setDisplayText(CurrentText);
  //   StrIndex++
  //   if(StrIndex === word.length){
  //     setTimeout(()=>{
  //     CurrentIndex = (CurrentIndex + 1) % TextLen;
  //     StrIndex = 0;
  //     CurrentText = '';
  //     TypingText();
  //     }, TypingSpeed * 1000); 
  //   }
  //   else{
  //     setTimeout(TypingText, TypingSpeed * 1000);
  //   }
    };
  TypingText();
},TypingSpeed * 1000);
  

  return (
    <>
      <div className='main-banner-wrapper'>
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
      </div>
    </>
  )
}

export default MainBanner
