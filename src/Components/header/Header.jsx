import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="shadow-md sticky z-50 top-0 bg-gradient-to-r from-orange-50 via-white to-orange-50">
                <nav className="border-b border-gray-200 px-4 lg:px-6 py-4">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12 transition-transform hover:scale-105"
                                alt="Logo"
                            />
                        </Link>

                        {/* Right-side buttons */}
                        <div className="flex items-center lg:order-2 space-x-2">
                            <Link
                                to="#"
                                className="text-gray-700 hover:text-orange-700 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 font-medium rounded-full text-sm px-5 py-2.5 transition"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 transition"
                            >
                                Get started
                            </Link>

                            {/* Animated Hamburger Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                            >
                                <span
                                    className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                                ></span>
                            </button>
                        </div>

                        {/* Navigation Menu with Animation */}
                        <div
                            className={`lg:flex lg:items-center lg:w-auto lg:order-1 w-full transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100'}`}
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0 animate-fadeIn">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 transition 
                                             ${isActive ? 'text-orange-700 font-semibold' : 'text-gray-800 hover:text-orange-600'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 transition 
                                             ${isActive ? 'text-orange-700 font-semibold' : 'text-gray-800 hover:text-orange-600'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 transition 
                                             ${isActive ? 'text-orange-700 font-semibold' : 'text-gray-800 hover:text-orange-600'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/github"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 transition 
                                             ${isActive ? 'text-orange-700 font-semibold' : 'text-gray-800 hover:text-orange-600'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        GitHub
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Extra animation for fade-in effect */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn li {
                    animation: fadeIn 0.4s ease forwards;
                }
                .animate-fadeIn li:nth-child(1) { animation-delay: 0.05s; }
                .animate-fadeIn li:nth-child(2) { animation-delay: 0.1s; }
                .animate-fadeIn li:nth-child(3) { animation-delay: 0.15s; }
                .animate-fadeIn li:nth-child(4) { animation-delay: 0.2s; }
                `}
            </style>
        </>
    )
}

export default Header
