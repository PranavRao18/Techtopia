import React from 'react';
import Navbar from '../components/navbar';
import spaceImage from '../assets/space7.jpg';
import { useDarkMode } from '../DarkModeContext';
import scomp1 from '../assets/scomp1.png';
import scomp2 from '../assets/scomp4.png';
import { textVariant, fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const Event4 = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${spaceImage}')` }}>
            <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-slate-400 via-transparent to-slate-400' : 'from-black via-transparent to-black'}`}>
                <Navbar />
                <div className="h-full flex flex-col-reverse sm:flex-row items-center justify-center p-8 relative">
                    <div className="w-full sm:w-1/2">
                        <motion.img variants={fadeIn("right", "spring", 0.75, 0.75)} src={scomp2} className="absolute w-1/2 sm:w-1/3 left-0 bottom-16 sm:top-20" alt="Event Image" />
                        <motion.h1 variants={textVariant()} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-white text-center sm:text-justify drop-shadow-lg p-2 sm:p-20">
                            Blue Origin is aiming to begin construction of its Orbital Reef commercial space station in 2024. This station would be a privately-owned and operated facility that could be used for research, manufacturing, and tourism.
                        </motion.h1>
                    </div>
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 relative">
                        <motion.h1 variants={textVariant()} className="text-5xl lg:text-8xl font-bold text-white text-center sm:text-center drop-shadow-lg p-2 sm:p-20">
                            Blue Origin Orbital Reef Commercial Space Station.
                        </motion.h1>
                        <motion.img variants={fadeIn("left", "spring", 0.75, 0.75)} src={scomp1} className="absolute w-1/2 sm:w-1/3 right-0 -bottom-12 sm:bottom-0" alt="Event Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(Event4, "event4");
