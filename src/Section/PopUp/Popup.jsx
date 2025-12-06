import React from 'react'
import './PopUp.css'
import CloseBtn from '../../Icons//CloseMenu'
function Popup( { Class, PopUpFunc } ) {
  return (
    <>
    <div className={`popup-wrapper ${Class}`}>
        <div class="popup-container">
            <div className='popup'>
              <button className='close-btn' onClick ={PopUpFunc}><CloseBtn /></button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Popup
