import React from 'react';
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";


const listItems = [
    'Home',
    'Gallery',
    'About',
    'Contact'
]


const Navbar = () => {
    return (

        <div
            className="fixed top-5 left-1/2 bg-white flex justify-between items-center gap-1 py-1 px-2
    transform -translate-x-1/2 rounded-full bg-opacity-30 backdrop-blur-md text-black shadow-lg z-40
     hidden md:flex sm:gap-2 sm:py-2 sm:px-5">
            <img src="/assets/Logo/logo-transparent-png.png" className="w-16 cursor-pointer"/>
            <ul className="flex space-x-4 text-md font-semibold sm:gap-4 sm:text-xl">
                {
                    listItems.map((item, index) => (
                        <li key={index} className="cursor-pointer text-sm font-Inria sm:text-sm">
                            <Link href={`/${item.toLowerCase()}`}>
                                <a>
                                    {item}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

    );
};

export default Navbar;