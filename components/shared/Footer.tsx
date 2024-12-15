import React from 'react'
import { socials } from '../utils/socials'



export const Footer = () => {
    return (
        <footer className='relative px-10 pt-28 md:pt-40 pb-14 text-center'>

            <h2 className='text-4xl md:text-8xl font-medium tracking-[-0.06em] text-dark mb-10 md:mb-20'>Let&apos;s make something cool together 🚀</h2>
            <a className='text-[8vw] text-center  tracking-[-0.06em] underline ' href="mailto:info@antonybodniev.com">info@antonybodniev.com</a>


            <div className="mt-32 flex flex-col-reverse md:flex-row gap-y-6 md:gap-y-0 justify-center  md:justify-between items-center w-full">
                <span>© <span>{new Date().getFullYear()}</span>  Antony Bodniev</span>
                <div className='flex justify-center items-center gap-5'>
                    {socials.map((social, index) => (
                        <a key={index} href={social.href} className='text-lg flex items-center gap-2  text-gray-500 hover:text-gray-700 transition-all '>
                            {social.icon}{social.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
