import React from 'react';
import Navbar from '../components/navbar';
import spaceImage from '../assets/space4.webp';
import { useDarkMode } from '../DarkModeContext';
import scomp1 from '../assets/scomp1.png';

const Event1 = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${spaceImage}')` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
            <Navbar />
            <div className="h-full flex flex-col-reverse sm:flex-row items-center justify-center p-8 relative">
                <div className="w-full sm:w-1/2">
                    <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-white text-center sm:text-justify drop-shadow-lg p-2 sm:p-20">
                        SpaceX is aiming to launch the first orbital test flight of its Starship spacecraft in 2024. This fully reusable launch system is designed for deep space travel, including crewed missions to the Moon and Mars. A successful first orbital flight would mark a major milestone for SpaceX and for space exploration in general.
                    </h1>
                </div>
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0 relative">
                    <h1 className="text-5xl lg:text-8xl font-bold text-white text-center sm:text-center drop-shadow-lg p-2 sm:p-20">
                        SpaceX Starship First Orbital Flight.
                    </h1>
                    <img src={scomp1} className="absolute w-1/2 sm:w-1/3 right-0 -bottom-12 sm:bottom-0" alt="Event Image" />
                </div>
            </div>
        </div>
    );
}

export default Event1;
