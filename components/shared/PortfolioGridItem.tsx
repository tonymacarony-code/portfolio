import Image from 'next/image'
import React from 'react'
import { cn } from '../utils/utils'

interface Props {
    title: string,
    description: string,
    image: string,
    type: string
}
const PortfolioGridItem: React.FC<Props> = ({ title,
    description,
    image,
    type
}) => {
    return (
        <a className={cn('flex flex-col hover:scale-105 transition-all duration-300 ease-out', type === 'primary' ? 'w-3/5' : 'w-2/5')} href='/'>
            <Image src={image} alt="hero" width={522} height={650} className={cn('object-cover', type === 'primary' ? 'w-full min-h-[650px]' : 'w-full min-h-auto')} />
            <h4 className='mt-6 text-5xl font-bold tracking-[-0.06em]'>{title}</h4>
            <p className='mt-3 text-pretty font-medium text-lg'>{description}</p>
        </a >
    )
}

export default PortfolioGridItem
