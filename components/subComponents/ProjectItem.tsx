import Image from 'next/image'
import React, { useContext } from 'react'
import { themeContext } from '../../pages/_app';

interface ProjectData {
    bgUrl:string,
    appName:string,
    tecs:string,
    description:string,
    webPage:string,
    gitUrl?:string,
}


const ProjectItem = ( {bgUrl, appName, tecs, description, webPage, gitUrl}:ProjectData ) => {

    const context = useContext(themeContext);
    const dark = context?.dark;

    const bg = dark ? 'bg-orange-500/70' : 'bg-sky-900/70';
    const tecsText = dark ? 'text-sky-300' : 'text-sky-300';

  return (

    <div className='relative group w-full h-72 justify-center items-center text-white text-center'>
        <Image
            src={bgUrl}
            layout="fill"
            objectFit='cover'
            className='-z-0'
            alt='project-image'
        />

        <div className={`z-10 h-full w-full ${bg} flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all ease-in-out backdrop-blur p-3 overflow-hidden ts`}>
            <div className='w-full -translate-y-6 transition ease-in-out group-hover:-translate-y-0 scale-125 group-hover:scale-100'>
                <p className='text-center text-3xl'>{appName}</p>
                <p className={`text-lg ${tecsText}`}>{tecs}</p>
                <p className='serif-pro font-extralight mt-4 scale-125 group-hover:scale-100 transition-all ease-in-out'>{description}</p>
            </div>
            <div className='flex w-full transition ease-in-out scale-125 group-hover:scale-100 translate-y-6 group-hover:translate-y-0
            justify-center mt-4'>
                <a className='px-4 py-2 border hover:bg-[rgba(145,13,13,.8)] transition ease-in-out pointer-events-none group-hover:pointer-events-auto' href={webPage} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                {
                gitUrl && <a className='px-4 py-2 ml-4 border hover:bg-[rgba(145,13,13,.8)] transition ease-in-out pointer-events-none group-hover:pointer-events-auto' href={gitUrl} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectItem