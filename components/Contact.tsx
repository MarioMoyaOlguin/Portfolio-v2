import React, { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser';

import { themeContext } from '../pages/_app';


const Contact = () => {

  const context = useContext(themeContext);
  const dark = context?.dark;

  const bg = dark ? 'bg-slate-900/90' : 'bg-slate-300/90';
  const title = dark ? 'text-slate-200' : 'text-slate-800';
  const bar = dark ? 'bg-orange-500' : 'bg-red-800';
  const input = dark ? 'bg-slate-600 focus:bg-slate-500 text-white ' : 'bg-gray-200 focus:bg-white text-black placeholder-slate-800';
  const footer = dark ? 'bg-slate-900' : 'bg-slate-500';
  const question = dark ? 'text-sky-400' : 'text-blue-800';

  const handleScrollTop = () => {
    const top = document.getElementById('about-me');
    top?.scrollIntoView();
  }


  return (

    <div className={`w-full pt-24 box bottom-container lg:bottom-container-lg backdrop-blur-xl ${bg} `} id="contact">
        <div className='flex flex-col lg:pl-52 pb-8'>
          <div>
            <h2 className={`fade sec-animation -translate-y-4 opacity-0 text-5xl mb-1 mx-auto w-fit serif-pro ${title}
            text-shadow-sm` }>CONTACT</h2>
            <div className={`bar transition-all duration-700 h-1 w-0 mx-auto rounded-full ${bar} `}></div>
          </div>

          <p className={`text-center text-2xl font-medium py-8 ${question} `}>Have a question or message?</p>

          {/* Inputs */}
          <form action="https://formsubmit.co/mariomoyaolguin@gmail.com" method="POST"
          className='flex fade translate-y-6 opacity-0 flex-col w-full max-w-3xl mx-auto px-2 sm:px-6 transition-all duration-700'>

            <input type="text" name="name" placeholder='Name' className={`contact-input ${input}`} required/>
          
            <input type="email" name="email" placeholder='Email' className={`contact-input my-4 ${input}`} required/>

            <textarea name="message" id="" cols={40} rows={5} placeholder="Leave a message..."
              className={`contact-input h-32 ${input}`} required >
            </textarea>
            
            <button type="submit" value="send" className='w-full bg-slate-700 text-white py-2 px-4 hover:bg-sky-700 transition-all ease-in-out mt-3'>
              <span>SUBMIT</span>
            </button>
          </form>

          {/* go top */}
          <div className='w-12 h-12 mt-8 mx-auto relative bg-slate-600 hover:bg-sky-700 transition-colors ease-in-out rounded-full overflow-hidden'
          onClick={handleScrollTop}>
            <div className='w-12 absolute hover:animate-slide-up-chevron transition-all ease-linear'>
              <div className='w-12 h-12 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
              </div>
              <div className='w-12 h-12 flex justify-center items-center mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Contact icons */}
        <div className={`flex flex-col justify-center py-6 lg:pl-52 ${footer}`}>
          <div className='flex justify-center'>
            <a className='w-12 h-12 mr-5 bg-slate-600 flex justify-center items-center group hover:bg-red-800 transition-all ease-in-out'
            href="mailto:mariomoyaolguin@gmail.com" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"
              className="h-7 w-7 fill-slate-300 group-hover:-translate-y-1 transition ease-in-out">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>

            <a className='w-12 h-12 bg-slate-600 flex justify-center items-center group hover:bg-red-800 transition-all ease-in-out'
            href='https://www.linkedin.com/in/mario-moya-olguin-93ab13188/' target='_blank' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-linkedin fill-slate-300 group-hover:-translate-y-1 transition ease-in-out">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>

          <p className={`text-center mt-4 font-mono ` + (dark ? "text-slate-500" : "text-slate-900")}>MARIO MOYA <span>2024</span></p>
        </div>

    </div>
  )
}

export default Contact