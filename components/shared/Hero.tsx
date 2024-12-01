
import Link from 'next/link'
import React from 'react'


const Hero = () => {
    return (

        <div className="h-screen px-20 pb-20 pt-12 flex flex-col justify-between w-full bg-gray-100">
            <div className="flex justify-between items-start">
                <nav className="p-1.5 flex items-center rounded-14 bg-light text-lg font-medium">
                    <Link href="#about" className='   px-4 py-2 hover:text-gray-400 '>About</Link>
                    <Link href="#projects" className=' px-4 py-2 hover:text-gray-400 '>Projects</Link>
                    <Link href="#services" className=' px-4 py-2 hover:text-gray-400 '>Services</Link>
                </nav>
                <a href="mailto:info@antonybodniev.com" className='text-base rounded-[0.625rem] py-4 px-8 bg-[#0155FF] shadow-buttonShadow flex items-center gap-2 hover:bg-[#2269FF] transition-all ease-in-out'>

                    <span className='text-xl font-bold tracking-tighter text-white'>Hire me</span>
                </a>
            </div>
            <div className="text-[6.25vw] leading-[6.875vw] font-medium  tracking-[-0.06em] text-dark">
                I’m Antony —  a front end developer, creating websites, applications & web services.
            </div>
        </div>

    )
}

export default Hero