import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { menu, close, menucopy, closecopy } from '../assets';
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from '../DarkModeContext';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const { darkMode } = useDarkMode();

    return (
        <nav className={`px-6 md:px-16 lg:px-28 w-full flex items-center py-10 fixed top-0 z-20`}
            style={{
                background: darkMode
                    ? 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8))'
                    : 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))'
            }}>
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className={darkMode ? 'text-black text-[22px] font-semibold cursor-pointer' : 'text-white text-[22px] font-semibold cursor-pointer'}>StellarGaze</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-20'>
                    <li
                        className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}
                    >
                        <Link
                            to="/news"
                            className="flex items-center gap-2"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <p className={darkMode ? "text-black text-[22px] font-medium cursor-pointer" : "text-white text-[22px] font-medium cursor-pointer"}>News</p>
                        </Link>
                    </li>
                    <li
                        className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}
                    >
                        <Link
                            to="/quiz"
                            className="flex items-center gap-2"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <div className="bg-[#6891FF] p-2 px-6 rounded-[5px] -m-2 hover:scale-110">
                                <p className={darkMode ? "text-black text-[22px] font-medium cursor-pointer" : "text-white text-[22px] font-medium cursor-pointer"}>Quiz</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? ( darkMode ? closecopy : close) : ( darkMode ? menucopy : menu)}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 ${darkMode ? 'bg-white' : 'bg-black'} absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <li
                                className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}
                            >
                                <Link
                                    to="/news"
                                    className="flex items-center gap-2"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <p className={`${darkMode ? 'text-black' : 'text-white'} text-[22px] font-medium cursor-pointer`}>News</p>
                                </Link>
                            </li>
                            <li
                                className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}
                            >
                                <Link
                                    to="/quiz"
                                    className="flex items-center gap-2"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <div className="bg-[#6891FF] p-2 rounded-[5px]">
                                        <p className={`${darkMode ? 'text-black' : 'text-white'} text-[22px] font-medium cursor-pointer`}>Quiz</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <DarkModeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;