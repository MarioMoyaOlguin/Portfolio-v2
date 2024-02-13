import React, { useContext } from 'react'
import { themeContext } from '../pages/_app';
import ProjectItem from './subComponents/ProjectItem'
import Image from 'next/image';


const Projects = () => {

    const context = useContext(themeContext);
    const dark = context?.dark;

    const bg = dark ? 'bg-slate-800/90' : 'bg-gray-200/90';
    const title = dark ? 'text-white' : 'text-slate-900';
    const bar = dark ? 'bg-orange-500' : 'bg-red-800';
    const degreeText = dark ? 'text-orange-300' : 'text-orange-800';

  return (

    <div id='projects' className={`w-full backdrop-blur-lg ${bg}`}>

        <div className='px-6 pt-16 pb-20 sm:px-8 lg:pt-32 lg:pb-32 lg:ml-52'>
            <div className='mb-14'>
                <h2 className={`fade sec-animation -translate-y-4 opacity-0 text-5xl mb-1 mx-auto w-fit  serif-pro ${title} text-shadow-sm` }>PROJECTS</h2>
                <div className={`bar transition-all duration-700 h-1 w-0 mx-auto rounded-full ${bar} `}></div>
            </div>

            {/* <div className='projects grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] sm:grid-cols-2 sm:mx-4 md:mx-12 lg:mx-auto
            w-fit lg:grid-cols-3 sm:p-px 2xl:grid-cols-4 3xl:grid-cols-5 gap-4'>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/weatherappss.png'
                        appName="Forecast"
                        tecs="React JS / Tailwindcss"
                        description="Simple forecast app, my first experience requesting API data"
                        webPage='https://mmolguin.betawebdeveloper.net/'
                        gitUrl='https://github.com/MarioMoyaOlguin/Forecast'
                        
                    />
                </div>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/salem-theme.png'
                        appName="Web Theme"
                        tecs="Next JS / Tailwindcss"
                        description='Fully responsive Web Theme with several functionalities, inspired by a WordPress theme'
                        webPage='https://nextjs-salem-theme.vercel.app/'
                        gitUrl='https://github.com/MarioMoyaOlguin/Web-theme'
                    />
                </div>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/movies-app.png'
                        appName="Movie App"
                        tecs="Next JS / Tailwindcss / Firebase"
                        description='Movie Web Application with a design similar to Netflix, fetches data from The Movie Data Base'
                        webPage='https://netflix-design.vercel.app/'
                        gitUrl='https://github.com/MarioMoyaOlguin/Movies-App'
                    />
                </div>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/portfolio.png'
                        appName="Certification Portfolio"
                        tecs="HTML / CSS"
                        description='Portfolio designed as part of FreeCodeCamp HTML / CSS certification'
                        webPage='https://codepen.io/SSMoya/full/oNwqJYK'
                    />
                </div>
            </div> */}
            <div className={`spartan relative sm:text-xl bg-contain bg-no-repeat bg-center bg-white rounded overflow-hidden max-w-6xl mx-auto`}>
                <div className={`w-full h-32 bg-[url('/survey.jpg')] bg-cover bg-center border-b-4 border-orange-500 flex items-end bg-orange-600`}>
                    <h2 className={`text-white text-3xl font-light pl-4 py-1 bg-black/50 w-full serif-pro`}>Surveys</h2>
                </div>

                <div className={`p-4 flex flex-col gap-4 tracking-tight font-normal leading-tight`}>
                    <p className=''>Demo application with minimum features to create simple surveys using 5 types of questions.</p>
                    <p>Questions are displayed one at a time and information is stored and retrieved from firestore cloud services (NoSQL database).</p>
                    <div className=''>
                        <p className='mb-1 text-orange-500 font-semibold'>Features:</p>
                        <ul className='list-disc list-inside'>
                            <li>Results updated in real time.</li>
                            <li>Generates a QR code that can be downloaded as a png image.</li>
                            <li>Generates a basic report with answers provided each time a survey is answered.</li>
                            <li>Results can be visualized using graphs.</li>
                            <li>Allows previewing a survey.</li>
                            <li>Fully responsive.</li>
                        </ul>
                    </div>
                    <p className='w-full flex gap-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                        </span>
                        Users can see and delete other user´s surveys.
                    </p>
                </div>

                <div className='flex w-full justify-between p-2 bg-orange-600/40'>
                    <div className='flex'>
                        <a className='px-4 py-2 bg-white  rounded-sm hover:text-white  hover:bg-red-700 transition cursor-pointer'
                        href='https://encuestaswebapp.web.app/' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <div className='flex gap-2'>
                        <img src="Angular_logo.png" alt="angular logo" className='w-auto h-10 shrink-0'/>
                        <img src="firebase-logo.png" alt="firebase logo" className='w-auto h-10 shrink-0'/>
                        <img src="charts-js.png" alt="charts-js logo" className='w-auto h-10 shrink-0 bg-white rounded-sm'/>
                        <img src="Typescript_logo.png" alt="Typescript logo" className='w-auto h-10 shrink-0'/>
                    </div>
                </div>
            </div>

            <div className={`spartan relative sm:text-xl bg-contain bg-no-repeat bg-center bg-white rounded overflow-hidden mt-20 max-w-6xl mx-auto`}>

                <div className={`relative w-full h-32 bg-[url('/infra-nodes.jpeg')] bg-cover bg-center border-b-4 border-orange-500 flex items-end bg-orange-600`}>
                    <div className={`w-full h-full bg-[url('/logo_conittec.png')] bg-contain bg-center bg-no-repeat `}></div>
                    <h2 className={`absolute bottom-0 text-white text-3xl font-light pl-4 py-1 bg-black/50 w-full serif-pro`}>Coninttec.com</h2>
                </div>

                <div className={`p-4 flex flex-col gap-4 tracking-tight font-normal leading-tight`}>
                    <p className=''>Landing page.</p>
                    <p>Shows contact information and services of the company Coninttec. Fully responsive</p>
                    <p></p>
                </div>

                <div className='flex w-full justify-between p-2 bg-orange-600/40'>
                    <div className='flex'>
                        <a className='px-4 py-2 bg-white  rounded-sm hover:text-white  hover:bg-red-700 transition cursor-pointer'
                        href='https://coninttec.com/' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <div className='flex gap-2'>
                        <img src="Angular_logo.png" alt="angular logo" className='w-auto h-10 shrink-0'/>
                        <img src="Typescript_logo.png" alt="Typescript logo" className='w-auto h-10 shrink-0'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects