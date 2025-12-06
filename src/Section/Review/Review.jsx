import React from 'react'
import './Review.css'
function Review({PopUpFunc}) {
  return (
    <>
      <section className='review-container section-container pb-0'>
        <div className='container'>
            <div className='review-form-wrapper text-center'>
                <h2 className='form-heading section-heading '>Share Your Feedback</h2>
                <p className='review-description'>Was this portfolio inspiring, helpful, or just cool? Let me know what you think!</p>
                <button className='review-btn' onClick={PopUpFunc}>Tell Me What You Think</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Review
