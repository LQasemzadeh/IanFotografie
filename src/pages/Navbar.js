import React from 'react';
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import {create as item} from "eslint-plugin-react/lib/rules/sort-prop-types";

const listItems = [
    'Home',
    'Gallery',
    'About',
    'Contact'
]


const Navbar = () => {
    return (

        <div
            className="fixed top-5 left-1/2 bg-white flex justify-between items-center gap-16 py-3 px-10 transform -translate-x-1/2 rounded-full bg-opacity-30 text-black shadow-lg z-40 hidden md:flex">
            <img src="/assets/Logo/logo-transparent-png.png" className="w-16 cursor-pointer"/>
            <ul className="flex gap-8 text-xl font-semibold">
                {
                    listItems.map((item, index) => (
                        <li key={index} className="cursor-pointer text-sm">
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