
import React from 'react';
import { SectionTitle } from './SectionTitle';
import FactCards from './FactCards';


export const About = () => {

    return (
        <section id='about' className='px-6 md:px-10 mt-0 md:mt-36  overflow-hidden'>
            <SectionTitle name='About' />
            <div className="flex-col md:flex items-center justify-between">

                <p className='w-full text-[6vw] leading-[6.25vw] md:w-7/12 mt-10 md:text-[3vw] md:leading-[3vw] text-pretty tracking-tighter'>
                    Front-end developer with experience in the development of fast and user-friendly applications and websites. I like to experiment, try new approaches and technologies for the implementation of projects even better.
                </p>
                <div className="w-full mt-10 md:mt-0  md:w-5/12 h-[600px] md:h-[650px]">
                    <FactCards />



                </div>
            </div>
        </section>
    );
};
