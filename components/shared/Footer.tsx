import React from 'react'
import { socials } from '../utils/socials'
import Spline from '@splinetool/react-spline'



export const Footer = () => {
    return (
        <div className="h-screen relative flex items-end justify-center">

            <Spline className='absolute w-full h-full top-0 left-0 -z-10 '
                scene="https://prod.spline.design/2ch5cNqWmXAZ7J-0/scene.splinecode"
            />

            <footer className=' px-10 pt-40 pb-14 text-center'>

                <h2 className='text-8xl font-medium tracking-[-0.06em] text-dark mb-20'>Let&apos;s break the ice</h2>
                <a className='text-[8vw] text-center  tracking-[-0.06em] underline ' href="mailto:info@antonybodniev.com">info@antonybodniev.com</a>


                <div className="mt-32 flex justify-between items-center w-full">
                    <span>© <span>{new Date().getFullYear()}</span>  Antony Bodniev</span>
                    <div className='flex items-center gap-5'>
                        {socials.map((social, index) => (
                            <a key={index} href={social.href} className='text-lg flex items-center gap-2  text-gray-500 hover:text-gray-700 transition-all '>
                                {social.icon}{social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div >
    )
}
