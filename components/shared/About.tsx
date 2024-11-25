
import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About = () => {

    return (
        <section className='mt-20 w-3/4 overflow-hidden'>
            <SectionTitle name='About' />
            <p

                className='mt-10 text-[4vw] leading-[4vw] text-pretty tracking-tighter'
            >
                Front-end developer with experience in the development of fast and user-friendly applications and websites. I like to experiment, try new approaches and technologies for the implementation of projects even better.
            </p>
        </section>
    );
};
