import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import projectsObserver, { barObserver, fadeObserver } from "../hooks/useObserver";
import Image from 'next/image'


const Home: NextPage = () => {

  useRef(projectsObserver());
  useRef(fadeObserver());
  useRef(barObserver());
  
  useEffect(() => {

  }, []);
  

  return (

    <div className="">

      <Head>
        <title>Mario Moya, freelance front-end web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          
      <main className="w-full relative overflow-hidden spartan antialiased mx-auto max-w-[1920px] bg-slate-900">

        <div className='w-full h-screen fixed'>
          {/* <video autoPlay loop muted height="360" width='640'  poster='https://drive.google.com/uc?id=1ff4CUftSxCoEetzx-I-RMXJ0O-kBpQBe'
          className='fixed h-full w-full object-cover max-w-[1920px] '>
              <source src="https://drive.google.com/uc?id=1JbqMmevdIDIi0PGOuI5ebIPwbsSQ5ZR9" type="video/mp4" />
          </video> */}
            <Image
              src="/bg.webp"
              layout="fill"
              objectFit='cover'
              className='-z-10'
              alt='web-background'
            />
        </div>

        <Header />

        <AboutMe />

        <Projects />

        <Resume />

        <Contact />

      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}





export default Home
