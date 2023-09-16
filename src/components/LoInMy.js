import React, { useState } from 'react'
import './Login.css'
import user_img from './image/person.png'
import pass_img from './image/password.png'
import email_img from './image/email.png'

const LoInMy = () => {
  const [action,setAction]=useState('Sign Up');
  return (
    <>
    <div className='container-login'>
      <div className='header-login'>
        <div className='text-login'> {action}</div>
        <div className='underline'>

        </div>
        <div className='inputs-login'>
          {action==='Login'?<div></div>:<div className='input-login'>
            <img src={user_img} alt=''/>
            <input type='text' placeholder='Name'/>
          </div>}
          
          <div className='input-login'>
            <img src={pass_img} alt=''/>
            <input type='email' placeholder='Email'/>
          </div>
          <div className='input-login'>
            <img src={email_img} alt=''/>
            <input type='password' placeholder='Password'/>
          </div>
        </div>
      </div>
      {action==='Sign Up'?<div></div>: <div className='forgot-password'> Lost password? <span> click here!</span></div>}
     
      <div className='submit-container'>

        <div className={action=="Login"?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action=="Sign Up"?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Log In </div>
      </div>
    </div>

    </>
  )
}
export default LoInMy;
