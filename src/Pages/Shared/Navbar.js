import React from 'react';
import navimg from '../../assets/logo.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div>

                </div>
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={navimg} alt="" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to='/' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
                        </li>
                        <li className="flex">
                            <Link to='/order' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Order</Link>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="gap-3   hidden lg:flex">


                        <li className="flex">
                            <Link to='/login' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Login</Link>
                        </li>
                        <li className="flex">
                            <Link to='/signup' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Sign up</Link>
                        </li>
                        <button className="btn btn-secondary">Appiontment</button>
                    </div>

                </div>
            </header>

        </div>
    );
};

export default Navbar;