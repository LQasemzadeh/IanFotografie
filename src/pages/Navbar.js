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
        <div className="mt-5">
            <div className="fixed bg-white flex justify-between items-center gap-16
         py-3 px-10 translate-x-[-50%] left-1/4 rounded-full
         bg-opacity-30 text-black shadow-lg z-40">
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
        </div>
    );
};

export default Navbar;