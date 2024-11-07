import React from 'react';
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
    return (
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/assets/Logo/logo-transparent-png.png"
                    className="w-1/6 cursor-pointer"/>
                </div>
                <div>
                    <HiMenuAlt3 className="block md:hidden h-8 w-8 cursor-pointer"/>
                </div>
                <ul className="space-x-8 hidden md:block">
                    <Link href="/about"><a className="uppercase font-semibold">Home</a></Link>
                    <Link href="/services"><a>Gallery</a></Link>
                    <Link href="/services"><a>About</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;