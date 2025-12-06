import React from 'react'
import './ServiceItem.css'
import Smile from '../../Icons/Smile'
function ServiceItem() {
  return (
    <>
      <div className="service-item-wrappper flex-item">
        <div className="service-item">
          <span className="service-icon">
            <Smile/>
          </span>
          <div className="service-content">
              <h4 className="service-title"><a href="/">Lorem Ipsum</a></h4>
              <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceItem
