"use client"
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-center bg-green-800 text-white p-4">
            <div className="logo-container">
                {/* Replace with your actual logo */}
                <h3 className="text-3xl font-bold italic">Jamaat-e-Islami</h3>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                onClick={toggleMenu}
                className=" text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Navigation Links (Currently commented out for now) */}
            {/* <nav className={`${isOpen ? 'block' : 'hidden'} md:flex space-x-6`}>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                    <li><Link href="#home" className="hover:text-yellow-400">Home</Link></li>
                    <li><Link href="#about" className="hover:text-yellow-400">About</Link></li>
                    <li><Link href="#membership" className="hover:text-yellow-400">Membership</Link></li>
                    <li><Link href="#donate" className="hover:text-yellow-400">Donate</Link></li>
                    <li><Link href="#events" className="hover:text-yellow-400">Events</Link></li>
                    <li><Link href="#contact" className="hover:text-yellow-400">Contact</Link></li>
                </ul>
            </nav> */}
        </header>
    );
};

export default Header;
