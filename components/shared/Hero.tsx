
import Spline from '@splinetool/react-spline'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
    return (

        // <div className=" px-20 pb-20 pt-12 flex flex-col justify-between w-full bg-gray-100">
        // bg - white bg - opacity - 50
        <div className='h-[calc(100vh+80px)]  md:h-[calc(100vh+80px)] overflow-hidden px-6 md:px-20 pb-40 pt-12 flex flex-col justify-between w-full relative '>
            <div className="bg-white bg-opacity-30 absolute w-full h-full top-0 left-0">
                <Spline className=' w-full h-full top-0 left-0 -z-10 '
                    scene="https://prod.spline.design/L0sktqsNVoFvb4tF/scene.splinecode" >
                </Spline>
                <div className="h-20 bg-white absolute bottom-0 left-0 w-full"></div>
            </div>


            <div className="flex justify-end md:justify-between items-start z-10">
                <nav className="hidden p-1.5 md:flex items-center rounded-14 bg-light text-lg font-medium">
                    <Link href="#about" className='   px-4 py-2 hover:text-gray-400 '>About</Link>
                    <Link href="#projects" className=' px-4 py-2 hover:text-gray-400 '>Projects</Link>
                    <Link href="#services" className=' px-4 py-2 hover:text-gray-400 '>Services</Link>
                </nav>
                <a href="mailto:info@antonybodniev.com" className='flex text-base rounded-[0.625rem] py-4 px-8 bg-[#0155FF] shadow-buttonShadow  items-center gap-2 hover:bg-[#2269FF] transition-all ease-in-out'>

                    <span className='text-xl font-bold tracking-tighter text-white'>Hire me</span>
                </a>
            </div>
            <div className="text-[10vw] md:text-[6.25vw] md:leading-[6.875vw] font-medium  tracking-[-0.06em] text-white mix-blend-difference">
                I’m Antony —  a front end developer, creating websites, applications & web services.
            </div>


        </div>

    )
}

export default Hero