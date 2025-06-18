import React from 'react'
import './SocialLinks.css'
import {SocialData} from "../../Data/Social Links/social_links.js"
function SocialLinks() {
  return (
    <div>
      <div className='social_links_wrapper'>
        <ul className='social_links'>
            {SocialData.map((item, index) => (
                <li key={index} className='social_link-wrapper'>
                    <a className='social_link' href={item.Address} title={item.Type}>
                      <span className='social_link_icon' style={{width:"30px", height:"30px"}}> {item.Symbol}</span>  
                    </a>
                </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default SocialLinks
