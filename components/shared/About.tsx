
import React from 'react';
import { SectionTitle } from './SectionTitle';
import FactCards from './FactCards';


export const About = () => {

    return (
        <section id='about' className='pt-16 mt-20  overflow-hidden'>
            <SectionTitle name='About' />
            <div className="flex items-center justify-between">

                <p

                    className='w-7/12 mt-10 text-[3vw] leading-[3vw] text-pretty tracking-tighter'
                >
                    Front-end developer with experience in the development of fast and user-friendly applications and websites. I like to experiment, try new approaches and technologies for the implementation of projects even better.
                </p>
                <div className="w-5/12 h-[650px]">
                    <FactCards />



                </div>
            </div>
        </section>
    );
};
