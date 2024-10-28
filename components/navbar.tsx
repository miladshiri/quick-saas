"use client";

import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import Image from 'next/image'



const Navbar = () => {
    // const userCurrentCredit = await getUserCurrentCredit();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Left Section (Logo or Brand) */}
                <div className="text-xl font-bold">
                    <a href="/">
                        <Image
                            src="/logo-dark.png"
                            width={200}
                            height={0}
                            alt="Quick SaaS"
                        />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                        <X className="h-6 w-6 text-gray-800" />
                        ) : (
                        <Menu className="h-6 w-6 text-gray-800" />
                        )}
                    </button>
                </div>

                {/* Center Section (Navigation) */}
                <div
                    className={`lg:flex lg:items-center lg:space-x-4 ${
                        isOpen ? 'block' : 'hidden'
                    } w-full lg:w-auto`}
                    >
                    <a
                        href="/"
                        className="block lg:inline-block text-gray-600 hover:text-gray-800 px-4 py-2"
                    >
                        Home
                    </a>
                    <a
                        href="/blog"
                        className="block lg:inline-block text-gray-600 hover:text-gray-800 px-4 py-2"
                    >
                        Blog
                    </a>
                    <a
                        href="/about"
                        className="block lg:inline-block text-gray-600 hover:text-gray-800 px-4 py-2"
                    >
                        About
                    </a>
                </div>

                {/* Right Section (Buttons) */}
                <div className="hidden lg:flex space-x-4">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                        Login
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden block px-4 py-2 space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                    Login
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                    Sign Up
                </a>
                </div>
            )}
            </nav>
    );
}

export default Navbar;