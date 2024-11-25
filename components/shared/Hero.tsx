import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
    return (
        <div className='h-screen p-10'>
            <div className="px-20 pb-20 pt-12 flex flex-col justify-between h-full w-full bg-gray-100 rounded-[3.25rem]">
                <div className="flex justify-between items-start">
                    <Link href="/" className="bg-white p-5 rounded-3xl w-28 h-28 flex justify-center items-center">
                        <Image src="/logo2.svg" width={80} height={80} alt="hero" />
                    </Link>
                    <nav className="p-1.5 flex items-center rounded-14 bg-light font-medium">
                        <Link href="/" className='text-base  px-4 py-2 hover:text-gray-400 '>Home</Link>
                        <Link href="/projects" className='text-base  px-4 py-2 hover:text-gray-400 '>Work</Link>
                        <Link href="/about" className='text-base     px-4 py-2 hover:text-gray-400 '>About</Link>
                        <Link href="/contact" className='text-base rounded-[0.625rem] py-[0.625rem] px-[1.125rem] bg-white shadow-buttonShadow flex items-center gap-2 '>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>Hire me</span>
                        </Link>
                    </nav>
                </div>
                <div className="text-[6.25vw] leading-[6.875vw] font-medium  tracking-[-0.06em] text-dark">
                    <span className='text-gray-500'>I’m antony</span> —  a front end developer, creating websites, applications & web services.
                </div>
            </div>
        </div>
    )
}

export default Hero