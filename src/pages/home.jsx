import React from 'react';
import Navbar from '../components/navbar';
import spaceImage from '../assets/space11.jpg';
import { useDarkMode } from '../DarkModeContext';
import Event1 from './Event1';

const Home = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className='overflow-hidden'>
            <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${spaceImage}')` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
                <Navbar />
                <div className="absolute top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg w-screen px-6 md:px-16 lg:px-28">
                        Journey through the wonders of the universe with our curated collection of space events.
                    </h1>
                </div>
            </div>
            <Event1 />
        </div>
    );
};

export default Home;
