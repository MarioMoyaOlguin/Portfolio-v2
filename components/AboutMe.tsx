import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { themeContext } from '../pages/_app';

const AboutMe = () => {

  const context = useContext(themeContext);
  const dark = context?.dark;
  
  const [loading, setLoading] = useState(true)

  const background = dark ? "bg-slate-900/70 " : "text-slate-900 bg-white/80";
  const chevron = dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900';
  const position = loading ? '' : 'animate-slide-text';
  const delayedPosition = loading ? '' : 'animate-slide-text-delayd';
  const cardBg = dark ? 'bg-violet-600/20' : 'bg-violet-900/70';


  const handleScrollToResume = () => {
    const resume = document.getElementById('resume');
    resume?.scrollIntoView();
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  return (

    
      (loading)

        ? <div className='w-screen h-screen flex relative bg-slate-900 justify-center items-center'>
            <div className='absolute w-[200px] h-[200px] bg-1 rounded-full animate-[spin_10s_linear_infinite] blur-3xl'></div>
            <div className='absolute w-[164px] h-[164px] bg-1 rounded-full animate-[spin_10s_linear_infinite] blur-sm'></div>
            <div className='absolute w-[160px] h-[160px] bg-1 rounded-full animate-[spin_10s_linear_infinite] '></div>
            <div className='absolute w-[150px] h-[150px] bg-slate-900 rounded-full blur'></div>
          </div>

        : <div id="about-me" className={`flex justify-center items-center w-full h-screen text-white backdrop-blur-xl ${background} ts
          px-3 pt-11 sm:px-0 lg:pt-0 lg:pl-52 relative`}>

            {/* <div className='absolute top-0 bottom-0 left-0 right-0 '>
              <Image
                src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                layout="fill"
                objectFit='cover'
                className='-z-0'
                alt='starry_sky'
              />
            </div> */}
    
            <div className={`relative flex flex-col w-screen text-center p-4 sm:p-8 rounded-lg justify-center items-center outline outline-1 outline-offset-[-10px]
            outline-yellow-600 bg-[url('https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg')] bg-cover shadow-md shadow-black/30
            lg:w-fit max-w-[420px] md:max-w-[600px] backdrop-blur-sm `}>
      
              <div className='absolute w-[250px] h-[250px] bg-1 rounded-full animate-[spin_10s_linear_infinite] blur-3xl'></div>
              <div className='absolute w-[214px] h-[214px] bg-1 rounded-full animate-[spin_10s_linear_infinite] blur-sm'></div>
              <div className='absolute w-[210px] h-[210px] bg-1 rounded-full animate-[spin_10s_linear_infinite] '></div>
              <div className='absolute w-[200px] h-[200px] bg-slate-900 rounded-full blur'></div>
      
              {/* portrait */}
              <div className='relative mx-auto mb-5 lg:hidden'>
                <Image
                  src={"/profile.jpg"}
                  width={150}
                  height={150}
                  className='rounded-full transition ease-in-out shadow'
                  alt='portrait'
                />
              </div>
              
              {/* Text */}
              <div className={`text-white z-10 `}>
                <h1 className={`transition-all ${position} text-3xl md:text-5xl lg:text-7xl lg:w-full `} >Greetings, I'm
                  <span className="text-red-500" > Mario Moya</span>
                </h1>
                <h2 className={`transition-all ${delayedPosition} text-md md:text-3xl lg:text-4xl lg:w-full font-light lg:my-10
                serif-pro md:my-4 `}>
                  Freelance front-end web developer.
                </h2>
              </div>
      
              {/* Go down */}
              <div className={`w-16 h-16 mx-auto overflow-hidden relative transition-all ease-in-out rounded-full hover:animate-none
              cursor-pointer group mt-2 scale-[.8] shadow sm:scale-100 ${chevron} shadow shadow-black`}
              onClick={ handleScrollToResume } >
                <div className='w-16 absolute group-hover:animate-slide-chevron transition-transform ease-linear -translate-y-16'>
                  <div className='w-16 h-16 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className='w-16 h-16 flex justify-center items-center animate-pulse group-hover:animate-none !duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
    

    
  )
}

export default AboutMe