import React, { useState } from 'react'
import style from './Contact.module.css'

export default function Contact() {
  let [isName,setIsName]=useState(false);
  let [isAge,setIsAge]=useState(false);
  let [isEmail,setIsEmail]=useState(false);
  let [isPassword,setIsPassword]=useState(false);

  function transitionName(e) {
    const value = e.target.value;
    setIsName(value !== ""); 
  }
  function transitionAge(e) {
    const value = e.target.value;
    setIsAge(value !== ""); 
  }
  function transitionEmail(e) {
    const value = e.target.value;
    setIsEmail(value !== ""); 
  }function transitionPassword(e) {
    const value = e.target.value;
    setIsPassword(value !== ""); 
  }
  return<>
     <div className=" h-lvh flex flex-col mt-10 items-center text-co ">
        <div className="contact">
          <h1 className="mb-5  text-5xl font-extrabold uppercase" to="">
          conatct section
          </h1>
        </div>
        <div className='style'> 
          <div className="flex flex-row justify-center items-center">
            <div className="line1 mx-3"></div>
            <p >
              <i class="fa-solid fa-star"></i>
            </p>
            <div className="line1  mx-3"></div>
          </div>
        </div>
        <div className='mt-10 w-1/2'>
             <form action="">
             <div>
                  <div className='relative mb-12 '>
                    <input type="text" placeholder='user name'  className='w-full shadow-md py-3 rounded-lg outline-none ps-2 mt-2' id='name'name='name' onInput={transitionName}/>
                    <label htmlFor="" className={`${style.label} ${isName?style.labelAp:''}`} >user Name:</label>
                  </div>
                  <div className='relative mb-12 '>
                    <input type="text" placeholder='user age'  className='w-full shadow-md py-3 rounded-lg outline-none ps-2 mt-2' id='age'name='age' onInput={transitionAge}/>
                    <label htmlFor="" className={`${style.label} ${isAge?style.labelAp:''}`} >user age:</label>
                  </div>
                  <div className='relative mb-12 '>
                    <input type="email" placeholder='user Email'  className='w-full shadow-md py-3 rounded-lg outline-none ps-2 mt-2' id='email'name='email' onInput={transitionEmail}/>
                    <label htmlFor="" className={`${style.label} ${isEmail?style.labelAp:''}`} >user Email:</label>
                  </div>
                  <div className='relative mb-12 '>
                    <input type="text" placeholder='user Password'  className='w-full shadow-md py-3 rounded-lg outline-none ps-2 mt-2' id='Password'name='Password' onInput={transitionPassword}/>
                    <label htmlFor="" className={`${style.label} ${isPassword?style.labelAp:''}`} >user Password:</label>
                  </div>
                 
                  <button className='text-white bg-green-750 px-2 py-2 rounded-lg  ' onClick={(e)=>e.preventDefault()}>send Message</button>
                </div>
                
             </form>


        </div>
      </div>
  </>
}
