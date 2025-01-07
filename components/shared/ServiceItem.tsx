import React from 'react';
import Image from 'next/image';
import { Service } from '../utils/types';
export const ServiceItem: React.FC<Service> = ({ name, image, description, technologies }) => {
    return (
        <div className="flex flex-col items-start gap-3 p-5 border border-[#e2e2e2] bg-light backdrop-blur-xl rounded-14">
            <div className='h-20 w-20 flex justify-center items-center rounded-lg text-7xl'>
                <Image unoptimized src={image} alt="hero" width={60} height={60} className="object-contain" />
            </div>
            <h3 className="text-4xl font-bold tracking-[-0.06em]">{name}</h3>
            <p className="max-w-full text-pretty font-medium text-base">{description}</p>
            <div className="mt-auto">
                <p>Technologies:</p>
                <div className=" mt-4 flex gap-4 text-4xl flex-wrap">
                    {technologies?.map((tech, index) => (
                        <div key={index} className="relative group">
                            {/* Icon */}
                            {tech.icon}

                            {/* Tooltip */}
                            <div className="z-20 absolute left-1/2 transform -translate-x-1/2 top-full mb-2 w-max px-2 py-1 text-sm font-medium text-white bg-dark rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
