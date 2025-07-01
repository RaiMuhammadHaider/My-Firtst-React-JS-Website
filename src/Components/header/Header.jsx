import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// when we use react we get some thing from react same at is when we use react-router-dom it also give some thing 
// in this condition we get get { Link , NavLink } Link is basically use for navigating from one to anOther it work like ancher a tag the difference is that ancher tag refresh the whole page but where as the link tag will only navigate it will never refresh the page  NavLink give us additional features 
const Header = () => {
    return (
        <>
            <header className="shadow-md sticky z-50 top-0 bg-gradient-to-r from-orange-50 via-white to-orange-50">
                <nav className="border-b border-gray-200 px-4 lg:px-6 py-4">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12 transition-transform hover:scale-105"
                                alt="Logo"
                            />
                        </Link>

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
                        </div>

                        <div className="hidden lg:flex items-center w-full lg:w-auto lg:order-1">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 transition 
                                             ${isActive ? 'text-orange-700 font-semibold' : 'text-gray-800 hover:text-orange-600'}`
                                        }
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
                                    >
                                        GitHub
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
