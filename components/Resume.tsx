import React, { useContext } from 'react'
import { themeContext } from '../pages/_app';
import ResumeItem from './subComponents/ResumeItem'


const Resume = () => {

  const context = useContext(themeContext);
  const dark = context?.dark;

  const bg = dark ? 'bg-slate-900/90' : 'bg-white/90';
  const title = dark ? 'text-slate-200' : 'text-slate-900';
  const border = dark ? 'border-orange-500' : 'border-red-800';
  const bar = dark ? 'bg-orange-500' : 'bg-red-800';


  return (

    <div id='resume' className={`px-8 lg:pl-64 lg:pr-16 pb-28 pt-20 z-10 ${title} ${bg} backdrop-blur-xl w-full`}>

        <div className='mb-8 w-full'>
          <h2 className={`fade sec-animation -translate-y-4 opacity-0 text-5xl mb-1  mx-auto w-fit serif-pro ${title} text-shadow-sm` }>
            RESUME
          </h2>
          <div className={`bar transition-all duration-700 h-1 w-0 mx-auto rounded-full ${bar} `}></div>
        </div>

        <div className=''>
          <div className='my-8 sm:pl-4'>
            <span className={`text-3xl border-b-2 ${border} text-shadow-sm`}>Experience</span>
          </div>

          <ResumeItem
            year="Now"
            college=""
            degree="Freelance Front End Web Development"
            details="For the last one and a halve year I've been developing my web programming skills, dabbling in react and angular, polishing my skills with different
              projects among which includes a surveys app, finding out in the process that writting code is quite gratifying for me and that overall
              I´m passionate for web development."
            // projects="See my progress"
          />

          <ResumeItem
            year="2016 - 2017"
            college="NUVO Systems"
            collegeDetails="NUVO Systems, Monterrey N. L. Mexico."
            degree="Technical Support"
            details="As an employee, I was trained to provide technical support to OXXO Company and to install sales outlet software for the same company in several states in Mexico"
          />

          <ResumeItem
            year="2014 - 2016"
            college="Universo Computacional"
            collegeDetails="Universo Computacional, Ciudad Valles S. L. P. Mexico."
            degree="Technical Support"
            details="During this time I provided hardware and software solutions to clients regarding computer hardware, software and
              Windows OS and maintenence on the aforementioned"
          />

          <div className=''>
            <div className='mb-8 sm:pl-4'>
              <span className={`text-3xl border-b-2 ${border} text-shadow-sm`}>Education</span>
            </div>

            <ResumeItem
              year="2021"
              college="Tangamanga University"
              degree="Computer Networks Bachelor's Degree"
              collegeDetails='Tangamanga University, Axtla de Terrazas, S.L.P. Mexico'
              link="https://www.utan.edu.mx/campus/huasteca"
              docTitle='Degree'
            />
          </div>
        </div>
    </div>
  )
}

export default Resume