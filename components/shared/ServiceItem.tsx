import React from 'react'
import { Service } from '../utils/enums'


export const ServiceItem: React.FC<Service> = ({ name, image, description }) => {
    return (

        <div className="flex flex-col items-start gap-3 p-5 border border-[#e2e2e2]  bg-gray-100 backdrop-blur-xl rounded-14 text-dark">
            <div className="h-20 w-20 flex justify-center items-center rounded-lg text-7xl">
                {image}
            </div>
            <h3 className="text-4xl font-bold tracking-[-0.06em]">{name}</h3>
            <p className="max-w-full text-pretty font-medium text-base">{description}</p>
        </div>


    )
}
