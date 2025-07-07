import React from 'react'
import CounterItem from '../../Components/CounterItem/CounterItem';
import './Counter.css';

function Counter() {
  return (
    <>
        <section className='counter-wrapper section-container'>
            <div className='container'>
                <ol className='counter-list'>
                    <CounterItem />
                </ol>
            </div>
        </section>
    </>
  )
}

export default Counter
