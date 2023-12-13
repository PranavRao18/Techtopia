import React from 'react';
import Navbar from '../components/navbar';
import spaceImage from '../assets/space2.jpg';
import { useDarkMode } from '../DarkModeContext';
import scomp1 from '../assets/scomp7.png';
import { textVariant, fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const Event3 = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${spaceImage}')` }}>
            <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-slate-400 via-transparent to-slate-400' : 'from-black via-transparent to-black'}`}>
                <Navbar />
                <div className="h-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-28 relative">
                    <div className="w-full mb-8 sm:mb-0 relative">
                        <motion.img variants={fadeIn("left", "spring", 0.75, 0.75)} src={scomp1} className="absolute w-2/3 sm:w-1/3 right-0 -bottom-20 sm:-bottom-20" alt="Event Image" />
                        <motion.h1 variants={textVariant()} className="text-5xl lg:text-8xl font-bold text-white text-center sm:text-center drop-shadow-lg p-2 sm:p-20">
                            ESA Jupiter Icy Moons Explorer (JUICE) Mission
                        </motion.h1>
                    </div>
                    <div className="w-full">
                        <motion.h1 variants={textVariant()} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-white text-center sm:text-justify drop-shadow-lg p-2 sm:p-20">
                            The European Space Agency's JUICE mission is scheduled to launch in 2024 and will spend three years studying Jupiter and its icy moons, Ganymede, Callisto, and Europa. This mission could help us understand the potential for life on these moons and the conditions that may have existed there in the past.
                        </motion.h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(Event3, "event3");
