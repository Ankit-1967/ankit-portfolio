import React from 'react'
import "./MainLinks.css"
import MainLinkList from '../../Data/LinksLists/MainLinks.js'


function MainLinks() {
  return (
    <>
      <div className='main-link-list-wraapper'>
        <ul className='main-link-list'>
            {MainLinkList.map((item, index) => (
                <li Key={`index-${index}`} className='link-item'><span className='link_icon'>{item.Icon}</span><span className='link_title'>{item.Title}</span></li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default MainLinks
