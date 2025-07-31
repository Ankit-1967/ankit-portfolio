import React, { useEffect } from 'react'
import './CounterItem.css'
import Smile from '../../Icons/Smile.jsx';
import Dairy from '../../Icons/Dairy.jsx';
import Headset from '../../Icons/Headset.jsx';
import People from '../../Icons/People.jsx';

function CounterItem() {
    useEffect(() =>{
    const Duration = 4000; // total duration in ms
  const Steps = Duration / 40; // number of animation steps (100 updates if 40ms interval)
  const CounterNumber = document.querySelectorAll('[counter-data]');

  CounterNumber.forEach((i) => {
    const counterContent = i.getAttribute('counter-data');
    const Number = parseFloat(counterContent);
    const Suffix = counterContent.replace(Number, '');
    let CurrentNumber = 0;

    const Increment = Number / Steps;

    const interval = setInterval(() => {
      CurrentNumber += Increment;
      if (CurrentNumber >= Number) {
        i.textContent = Number + Suffix;
        clearInterval(interval);
      } else {
        i.innerHTML = Math.floor(CurrentNumber) + Suffix;
      }
    }, 40); // update every 40ms
  });
}, []);

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
