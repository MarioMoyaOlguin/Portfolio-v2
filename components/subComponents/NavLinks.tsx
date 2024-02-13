import React from 'react'


interface NavLinksData {
    scrollTop():void;
    scrollResume():void;
    scrollProjects():void;
    scrollContact():void;
    menuOpened?():void;
}


const NavLinks = ( {scrollTop, scrollResume, scrollProjects, scrollContact, menuOpened}:NavLinksData ) => {

    const handleScrollTop = () => {
        scrollTop()
        menuOpened && menuOpened()
    }
    const handleScrollResume = () => {
        scrollResume()
        menuOpened && menuOpened()
    }
    const handleScrollProjects = () => {
        scrollProjects()
        menuOpened && menuOpened()
    }
    const handleScrollContact = () => {
        scrollContact()
        menuOpened && menuOpened()
    }


  return (
    <>
        <div className='group flex cursor-pointer w-full'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <div onClick={handleScrollTop} >About Me</div>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group flex cursor-pointer w-full'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <div onClick={handleScrollResume} >Resume</div>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group flex cursor-pointer w-full'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <div onClick={handleScrollProjects} >Projects</div>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group flex cursor-pointer w-full'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <a onClick={handleScrollContact} >Contact</a>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
    </>
  )
}

export default NavLinks