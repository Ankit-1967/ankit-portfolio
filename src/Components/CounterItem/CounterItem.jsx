import React, { useEffect } from 'react'
import './CounterItem.css'
import Smile from '../../Icons/Smile.jsx';
import Dairy from '../../Icons/Dairy.jsx';
import Headset from '../../Icons/Headset.jsx';
import People from '../../Icons/People.jsx';

function CounterItem() {
    useEffect(() =>{
    let CounterNumber = document.querySelectorAll('[counter-data]');
    CounterNumber.forEach((i) => {
        let counterContent = i.getAttribute('counter-data');
        let Number = parseFloat(counterContent);
        let Suffix = counterContent.replace(Number,"");
        console.log(Number);

        let CurrentNumber = 0;
        const Duration = 4000;
        const Steps = Duration / 30;
        const Increment = Math.ceil(Number / Steps) ;
        const interval = setInterval(() => {
            CurrentNumber += Increment;
            if(CurrentNumber >= Number){
                i.textContent = Number + Suffix;
                clearInterval(interval); 
            }
            else{
                i.innerHTML = CurrentNumber + Suffix;
            }
        }, 40);
       
        });
    console.log(document.querySelectorAll('[counter-data]').length);
},[]);
  return (
    <>
        <li className="counter-item">
            <div className="counter-icon">
                <Smile/>
            </div>
            <div className='counter-details'>
                <span className='counter' counter-data="232">0</span>
                <p className='counter-title'><strong>Happy Clients</strong> consequuntur quae</p>
            </div>
        </li>
        <li className="counter-item">
            <div className="counter-icon">
                <Dairy/>
            </div>
            <div className='counter-details'>
                <span className='counter' counter-data="521">0</span>
                <p className='counter-title'><strong>Projects</strong>  adipisci atque cum quia aut</p>
            </div>
        </li>
        <li className="counter-item">
            <div className="counter-icon">
                <Headset/>
            </div>
            <div className='counter-details'>
                <span className='counter' counter-data="1453">0</span>
                <p className='counter-title'><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>
        </li>
        <li className="counter-item">
            <div className="counter-icon">
                <People/>
            </div>
            <div className='counter-details'>
                <span className='counter' counter-data="32">0</span>
                <p className='counter-title'><strong>Hard Workers</strong>  rerum asperiores dolor</p>
            </div>
        </li>
    </>
  )
}

export default CounterItem
