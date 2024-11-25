import React from 'react'
import { socials } from '../utils/enums'


export const Footer = () => {
    return (
        <footer className='text-center'>

            <h2 className='mt-20 text-8xl font-medium tracking-[-0.06em] text-dark mb-20'>Let's make something cool together 🚀</h2>
            <a className='text-[8vw] text-center  tracking-[-0.06em] underline ' href="mailto:info@antonybodniev.com">info@antonybodniev.com</a>


            <div className="mt-10 flex justify-between items-center w-full">
                <span>© 2024 Antony Bodniev</span>
                <div className='flex items-center gap-5'>
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
