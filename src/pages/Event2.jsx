import React from 'react';
import Navbar from '../components/navbar';
import spaceImage from '../assets/Space-Background-Image-2.jpg';
import { useDarkMode } from '../DarkModeContext';
import scomp1 from '../assets/scomp3.png';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Event2 = () => {
    const { darkMode } = useDarkMode();

    return (

        <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${spaceImage}')` }}>
            <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-slate-400 via-transparent to-slate-400' : 'from-black via-transparent to-black'}`}>
                <Navbar />
                <div className="h-full flex flex-col sm:flex-row items-center justify-center p-8 relative">
                    <motion.div variants={textVariant()} className="w-full sm:w-1/2 mb-8 sm:mb-0 relative">
                        <img src={scomp1} className="absolute w-1/2 sm:w-2/3 sm:-right-40 -bottom-40" alt="Event Image" />
                        <h1 className="text-5xl lg:text-8xl font-bold text-white text-center sm:text-center drop-shadow-lg p-2 sm:p-20 ">
                            NASA Artemis 3 Mission
                        </h1>
                    </motion.div>
                    <motion.div variants={textVariant()} className="w-full sm:w-1/2">
                        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-white text-center sm:text-justify drop-shadow-lg p-2 sm:p-20 ">
                            NASA's Artemis program aims to return humans to the Moon and establish a sustainable presence there. Artemis 3, currently planned for 2024, would be the first crewed mission of the program and would see astronauts land on the lunar surface for the first time since the Apollo missions of the 1960s and 1970s.
                        </h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(Event2, "event2");
