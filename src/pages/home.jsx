import React, { useRef } from 'react';
import Navbar from '../components/navbar';
import spaceImage from '../assets/space11.jpg';
import { useDarkMode } from '../DarkModeContext';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Event4 from './Event4';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import NewsCarousel from './news';

const Home = () => {
    const { darkMode } = useDarkMode();
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

    return (
        <div className='overflow-hidden'>
            {/* <div ref={scrollRef}> */}
            <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${spaceImage}')` }}>
                <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-black via-transparent to-slate-400' : 'from-black via-transparent to-black'}`}>
                    <Navbar />
                    <div className={`absolute top-1/3 sm:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10`}>
                        <motion.h1 variants={textVariant()} initial="hidden" animate="show" className="text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg w-screen px-6 md:px-16 lg:px-28">
                            Journey through the wonders of the universe with our curated collection of space events.
                        </motion.h1>
                    </div>
                </div>
            </div>
            <Event1 />
            <Event2 />
            <Event3 />
            <Event4 />
            <NewsCarousel/>
        </div>
        // </div>
    );
};

export default Home;
