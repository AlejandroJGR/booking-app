import React from 'react'
import "./MailList.css"

const MailList = () => {
  return (
    <div className='mail__container'>
      <h1 className='mail__title'>Save Time, Save Money!</h1>
      <span className='mail__description'>Sign up and we'll send the best deals to you</span>
      <div className='mail__input-container'>
        <input type="text" placeholder='Type here your Email!'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList