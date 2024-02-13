import Image from 'next/image';
import React, { useContext } from 'react'
import { themeContext } from '../../pages/_app';

interface ResumeData {
    year?:string,
    college?:string,
    degree?:string,
    collegeDetails?:string,
    link?:string,
    details?:string,
    projects?:string,
    docTitle?:string,
    docTitle2?:string,
}


const ResumeItem = (
  {
    year, college, degree, collegeDetails, link, details, projects, docTitle, docTitle2
  }:ResumeData ) => {
  
  const context = useContext(themeContext);
  const dark = context?.dark;

  const degreeText = dark ? 'text-orange-300' : 'text-orange-800';
  const projectsLinkText = dark ? 'text-cyan-400' : 'text-cyan-600';
  const docTextBg = dark ? 'bg-slate-500/80' : 'bg-gray-400/90';

  const handleScrollToProjects = () => {
    const projects = document.getElementById('projects');
    projects?.scrollIntoView();
  }


  return (

    <div className='border-l border-sky-400 px-4 text-sm relative sm:border-none sm:flex fade opacity-0 translate-x-8 transition ease-in-out
    !duration-500'>

        <div className='sm:text-right relative sm:border-r border-cyan-500 sm:pr-4 sm:w-40'>
            <div className='h-3 w-3 bg-white border-2 border-cyan-500 absolute -left-[23px] top-2 sm:hidden rotate-45'></div>
            <div className='h-3 w-3 hidden sm:block bg-white border-2 border-cyan-500 absolute -right-0 top-[6px] rotate-45 translate-x-1/2'></div>
            <p className='font-semibold text-lg'>{year}</p>
            <p className='hidden sm:block'>{college}</p>
        </div>

        <div className='mt-0 sm:mt-0 sm:px-5 w-full text-lg leading-5'>
            <p className={`font-semibold text-xl mb-2 ${degreeText} `}>{degree}</p>
            <p className='sm:mb-2 serif-pro mb-2 flex'>
              {collegeDetails}
              {
                link && <span className='inline-block ml-2'>
                  <a href={link} target="_blank" className="w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </span>
              }
            </p>
            {
              docTitle && <div className='w-full flex items-center justify-center mt-8 gap-12 flex-wrap sm:flex-row'>
                <a className='w-40 h-40 sm:h-60 relative flex items-end shadow-md shadow-black/40' target='_blanck'
                href='https://drive.google.com/file/d/1xWv5fTGL9mzDJQStM0psxl4JG_DucG2n/view?usp=sharing'>
                  <Image
                    src='/eTitulo-sm.png'
                    layout="fill"
                    objectFit='cover'
                    className=''
                    alt='degree'
                  />
                  <p className={`w-full px-1 py-2 z-10 text-center ${docTextBg} `}>{docTitle}</p>
                </a>
                
                
              </div>
            }
            <p className=' serif-pro'>
                {details} <span className={` font-semibold text-lg hover:cursor-pointer ${projectsLinkText} leading-5`}
                onClick={handleScrollToProjects}>
                  {projects}
                </span>
            </p>
            <div className='h-8'></div>
        </div>

    </div>
  )
}

export default ResumeItem