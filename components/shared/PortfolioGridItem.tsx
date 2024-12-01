import Image from 'next/image'
import React from 'react'

interface Props {
    title: string,
    description: string,
    image: string,
}
const PortfolioGridItem: React.FC<Props> = ({ title,
    description,
    image,
}) => {
    return (
        <a className='flex flex-col hover:scale-105 transition-all duration-300 ease-out' href='https://github.com'>
            <div className="relative w-full pb-[56.25%]">
                <Image src={image} alt="hero" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h4 className='mt-6 text-5xl font-bold tracking-[-0.06em]'>{title}</h4>
            <p className='mt-3 text-pretty font-medium text-lg'>{description}</p>
        </a>
    )
}

export default PortfolioGridItem
