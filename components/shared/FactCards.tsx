'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';


// import required modules
import { EffectCards } from 'swiper/modules';

import { FaRegHandPaper } from 'react-icons/fa';



export default function FactCards() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {/* 1 */}
                <SwiperSlide>
                    <Image src="/miw.png" width={340} height={420} className='w-full h-full' alt="hero" />
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className='text-3xl md:text-5xl font-bold tracking-tighter'>Why web development?</div>
                    <div className='mt-2 md:mt-5 text-lg md:text-2xl'>Because it combines creativity and logic, letting me bring ideas to life and enhance the value of websites through better user interaction.</div>
                    <Image className='mt-4 gif webdev' unoptimized src="/pc-guy.gif" width={300} height={100} alt="pc-guy" />
                </SwiperSlide>                {/* 3 */}
                <SwiperSlide>
                    <div className='text-3xl md:text-5xl font-bold tracking-tighter'>Motivation</div>
                    <div className='mt-2 md:mt-5 text-lg md:text-2xl '>
                        I believe that art begins where professionalism ends. This is my goal in my profession — to reach a level where work becomes true creativity.
                    </div>
                    <div className='mt-4 gif'>
                        <Image unoptimized src="/art.gif" width={300} height={75} alt="papuga" />
                    </div>
                </SwiperSlide>



                {/* 4 */}

                <SwiperSlide>
                    <div className='text-3xl md:text-5xl font-bold tracking-tighter'>I shine when i...</div>
                    <div className='mt-2 md:mt-5 text-lg md:text-2xl'>I shine when I collaborate with team. I believe that when everyone is aligned, great results are achieved. Working together and helping others brings out the best in me.</div>
                    <div className='mt-4 gif'>
                        <Image unoptimized src="/dreamteam.gif" width={300} height={75} alt="papuga" />
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className='text-3xl md:text-5xl font-bold tracking-tighter'>Hobby</div>
                    <div className='mt-2 md:mt-5 text-lg md:text-2xl'>Since childhood, I’ve been passionate about heavy metal. I taught myself to play guitar using YouTube, and it’s been an inseparable part of my life ever since.</div>
                    <div className='mt-4 gif papuga'>
                        <Image unoptimized src="/papuga.gif" width={220} height={75} alt="papuga" />
                    </div>
                </SwiperSlide>

                {/* 5 */}
                <SwiperSlide>
                    <div className='text-3xl md:text-5xl font-bold tracking-tighter'>Music lover</div>
                    <p className='mt-2 md:mt-5 text-pretty'>Over the past year, I&apos;ve listened to <span className='font-bold'>75,761</span> minutes of songs in Spotify. My favorite genre is <b>metal</b>. Favorite metal band: <b>Rammstein</b></p>
                    <p className='mt-2 font-bold'>My recently added song:</p>
                    <iframe className='mt-4 rounded-xl' src="https://open.spotify.com/embed/track/5Hh2VJj7bOWGsN0Jw6smwt?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                </SwiperSlide>
                {/* 5 */}
                <SwiperSlide>
                    <div className='text-3xl md:text-5xl font-bold tracking-tighter'>Landscape hunter</div>
                    <div className='mt-2 md:mt-5 text-lg md:text-2xl'>I love creating videos of the landscapes from the places I&apos;ve visited. Hiking combined with videography is a form of relaxation for me.</div>
                    <div className="mt-3">
                        <div className='text-right text-sm'>Ireland, 2024</div>
                        <video autoPlay loop muted src="/Ireland.mov" width={360} height={75} />
                    </div>
                </SwiperSlide>





                <div className="explain-me-how ">
                    <div className="track">
                        <div className="hand animated move-the-hand">
                            <span className="hand__finger-touch animated show-the-touch"></span>
                            <FaRegHandPaper className='text-xl text-gray-500' />
                        </div>
                    </div>
                    <div className="text">click and move</div>
                </div>

            </Swiper>

        </>
    );
}