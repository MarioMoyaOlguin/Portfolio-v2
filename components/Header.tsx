import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { themeContext } from '../pages/_app';
import NavLinks from './subComponents/NavLinks';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    
    const navRef = useRef<HTMLDivElement>(null);
    

    const context = useContext(themeContext);
    const handleTheme = context?.handleDark;
    const dark = context?.dark;

    const position = dark ? '-translate-x-12' : 'translate-x-0';
    
    useEffect(() => {

        const handleWindowResize = () => {
            setMenuOpened(false);
        }
    
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    const handleDarkMode = () => {
        handleTheme?.()
    }

    const handleMenu = () => {
        setMenuOpened(!menuOpened)
    }

    const handleScrollTop = () => {
        const top = document.getElementById('about-me');
        top?.scrollIntoView();
    }
    const handleScrollResume = () => {
        const resume = document.getElementById('resume');
        resume?.scrollIntoView();
    }
    const handleScrollProjects = () => {
        const projects = document.getElementById('projects');
        projects?.scrollIntoView();
    }
    const handleScrollContact = () => {
        const contact = document.getElementById('contact');
        contact?.scrollIntoView();
    }
    
    
  return (
    
  <div className=''>

    {/* theme icon */}
    <div className='fixed lg:top-2 right-2 bottom-2 z-20 shadow-md shadow-black/60 w-12 h-12 overflow-hidden rounded-full transition-all
    hover:scale-105'>

        <div className={`flex w-fit ${position} transition-all`}>
            <svg onClick={handleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"
            className="h-12 w-12 p-1 bg-yellow-500 rounded-full transition ease-in-out stroke-slate-900"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <svg onClick={handleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"
            className="h-12 w-12 p-1 bg-blue-700 rounded-full stroke-white transition ease-in-out"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </div>
    </div>

    <div ref={navRef} className='fixed w-full z-20 lg:h-screen lg:w-52 shadow-md shadow-black/30 '>

        <div className="flex lg:flex-col relative h-full items-center justify-between py-1 px-6 text-white  backdrop-blur
        lg:justify-start lg:items-center lg:p-5 overflow-scroll scrollbar-thin scrollbar-thumb-orange-700 scrollbar-track-red-300
        bg-[rgba(145,13,13,.8)] shadow-md">

            {/* Portrait */}
            <div className=' sm:h-32 hidden lg:block'>
                <div className='relative sm:w-32 sm:h-32 mx-auto'>
                    <Image
                        src={"/profile.jpg"}
                        layout="fill"
                        objectFit='cover'
                        className='rounded-full'
                        alt='portrait'
                    />
                </div>
            </div>

            <div className='flex justify-center lg:my-3'>
                <span className='font-script text-3xl mr-3 hidden lg:block'>Mario</span> <span className='font-script text-3xl '>Moya</span>
            </div>
            
            <p className='uppercase text-lg text-center hidden lg:block serif-pro'>front end web developer</p>

            <div className='font-extralight text-xl hidden lg:flex flex-col mt-7'>
                <NavLinks
                    scrollTop={handleScrollTop}
                    scrollResume={handleScrollResume}
                    scrollProjects={handleScrollProjects}
                    scrollContact={handleScrollContact}
                />
            </div>

            {/* Menu button */}
            <div onClick={handleMenu} className='w-7 h-7 relative justify-center lg:hidden group hover:scale-110 transition-all '>
                <div onClick={handleMenu}
                className={`w-6 h-[2px] absolute top-[5px] left-[2px] bg-white transition ease-in-out origin-right rounded-full `
                    + (menuOpened ? "-rotate-45 w-[23px]" : "rotate-0") }
                >
                </div>
                <div onClick={handleMenu}
                className={`w-6 h-[2px] absolute top-[13px]  left-[2px] bg-white  transition ease-in-out rounded-full `
                    + (menuOpened ? "opacity-0" : "opacity-100") }
                >
                </div>
                <div onClick={handleMenu}
                className={`w-6 h-[2px] absolute top-[21px]  left-[2px] bg-white transition ease-in-out origin-right rounded-full `
                    + (menuOpened ? "rotate-45 w-[23px]" : "rotate-0") }
                >
                </div>
            </div>
        </div>

        {/* Floating menu items */}
        <div className={`flex text-white font-light flex-col absolute top-16 transition ease-in-out text-lg p-2 items-center right-6
        rounded w-52 bg-[rgba(145,13,13,.9)] backdrop-blur-sm shadow-md shadow-black/30 `
        + (menuOpened ? "opacity-100 -translate-y-4" : "opacity-0 pointer-events-none") }
        >
            <NavLinks
                scrollTop={handleScrollTop}
                scrollResume={handleScrollResume}
                scrollProjects={handleScrollProjects}
                scrollContact={handleScrollContact}
                menuOpened={handleMenu}
            />
        </div>
    </div>
  </div>
  )

}



export default Header