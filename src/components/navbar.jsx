import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { menu, close } from '../assets';

function Navbar() {
    const [toggle, setToggle] = useState(false);


    return (
        <nav className={`px-6 md:px-16 lg:px-28 w-full flex items-center py-10 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white text-[22px] font-semibold cursor-pointer">InfinityVoyage</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-20'>
                    <li
                        className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}
                    >
                        <Link
                            to="/"
                            className="flex items-center gap-2"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <p className="text-white text-[22px] font-medium cursor-pointer">News</p>
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
                                <p className="text-white text-[22px] font-medium cursor-pointer">Quiz</p>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <li
                                className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}
                            >
                                <Link
                                    to="/"
                                    className="flex items-center gap-2"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <p className="text-white text-[22px] font-medium cursor-pointer">News</p>
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
                                        <p className="text-white text-[22px] font-medium cursor-pointer">Quiz</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;