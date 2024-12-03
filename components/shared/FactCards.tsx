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
                className="mySwiper w-1/4 h-full"
            >
                {/* 1 */}
                <SwiperSlide>
                    <Image src="/miw.png" width={340} height={420} className='w-full h-full' alt="hero" />
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <span className='font-bold tracking-tighter'>Why web development?</span>
                    <div className='mt-5 text-2xl'>Because it combines creativity and logic, letting me bring ideas to life and enhance the value of websites through better user interaction.</div>
                    <Image className='mt-4' unoptimized src="/pc-guy.gif" width={300} height={100} alt="pc-guy" />
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <span className='font-bold tracking-tighter'>Motivation</span>
                    <div className='mt-5 text-2xl '>
                        I believe that art begins where professionalism ends. This is my goal in my profession — to reach a level where work becomes true creativity.
                    </div>
                    <div className="mt-4">
                        <Image unoptimized src="/art.gif" width={300} height={75} alt="papuga" />
                    </div>
                </SwiperSlide>



                {/* 4 */}

                <SwiperSlide>
                    <span className='font-bold tracking-tighter'>I shine when i...</span>
                    <div className='mt-5 text-2xl'>I shine when I collaborate with team. I believe that when everyone is aligned, great results are achieved. Working together and helping others brings out the best in me.</div>
                    <div className="mt-4">
                        <Image unoptimized src="/dreamteam.gif" width={300} height={75} alt="papuga" />
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <span className='font-bold tracking-tighter'>Hobby</span>
                    <div className='mt-5 text-2xl'>Since childhood, I’ve been passionate about heavy metal. I taught myself to play guitar using YouTube, and it’s been an inseparable part of my life ever since.</div>
                    <div className="mt-4">
                        <Image unoptimized src="/papuga.gif" width={250} height={75} alt="papuga" />
                    </div>
                </SwiperSlide>

                {/* 5 */}
                <SwiperSlide>
                    <span className=' mt-5 font-bold tracking-tighter'>Music lover</span>
                    <p className='mt-5 text-pretty'>Over the past year, I&apos;ve listened to <span className='font-bold'>75,761</span> minutes of songs in Spotify. My favorite genre is <b>metal</b>. Favorite metal band: <b>Rammstein</b></p>
                    <p className='mt-2 font-bold'>My recently added song:</p>
                    <iframe className='mt-4 rounded-xl' src="https://open.spotify.com/embed/track/5Hh2VJj7bOWGsN0Jw6smwt?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                </SwiperSlide>
                {/* 5 */}
                <SwiperSlide>
                    <span className='font-bold tracking-tighter'>Landscape hunter</span>
                    <div className='mt-5 text-2xl'>I love creating videos of the landscapes from the places I&apos;ve visited. Hiking combined with videography is a form of relaxation for me.</div>
                    <div className="mt-3">
                        <div className='text-right text-sm'>Ireland, 2024</div>
                        <video autoPlay loop muted src="/Ireland.mov" width={360} height={75} />
                    </div>
                </SwiperSlide>
                {/* 6 */}

                {/* 7 */}
                <SwiperSlide>
                    <span className='font-bold tracking-tighter'>Code & Music</span>
                    <div className='mt-5 text-2xl'>
                        Coding to music? That’s my jam.
                        Checkout my coding playlist below:
                    </div>
                    <iframe className='mt-4 rounded-xl' src="https://open.spotify.com/embed/album/6z1IIvWGNoeVVlYjY1BjQx?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
