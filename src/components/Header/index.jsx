// libraries
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// icons 
import { BsList } from "react-icons/bs";
import DarkThemeButton from '../DarkThemeButton';


function Header() {
    // for outside clicked
    const wrapperRef = useRef(null);


    const navigation = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const activeClassHandle = ({ isActive }) => {
        const navLinkClasses = "mb-2 sm:mb-0 sm:mr-5 inline-flex text-lg border-transparent border-b-2 hover:border-yellow-500 transition ease-in-out delay-100";
        const activeClass = "border-b-2 border-yellow-500";
        if (isActive) {
            const active = navLinkClasses.concat(" ", activeClass)
            return active;
        }
        return navLinkClasses
    }

    // catch mobile menu close outside click
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    return (
        <header ref={wrapperRef} className='bg-gray-100 dark:bg-gray-800 flex flex-col sm:flex-row' >
            <nav className='container p-4 sm:p-5 mx-auto h-full flex justify-between sm:justify-start items-center '>
                <div className="brand mr-10">
                    <Link to='/' className='font-bold text-xl text-yellow-500'>Movies&Series</Link>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <ul className='hidden sm:flex nav-menu text-yellow-500 dark:text-white '>
                        <NavLink
                            to="/movies"
                            className={activeClassHandle}
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="/series"
                            className={activeClassHandle}
                        >
                            Series
                        </NavLink>
                        <NavLink
                            to="/coming-soon"
                            className={activeClassHandle}
                        >
                            Coming Soon
                        </NavLink>
                    </ul>
                    <div className='flex justify-between w-full sm:w-auto'>
                        <DarkThemeButton />
                        <BsList onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-yellow-500 text-2xl sm:hidden' />
                    </div>
                </div>

            </nav>

            {
                isMobileMenuOpen && <div className='mobile-menu sm:hidden px-4 pb-4'>
                    <ul className='flex nav-menu flex-col bg-gray-100 dark:bg-black dark:text-white '>
                        <NavLink
                            to="/movies"
                            className={activeClassHandle}
                        >
                            Movies
                        </NavLink>

                        <NavLink
                            to="/series"
                            className={activeClassHandle}
                        >
                            Series
                        </NavLink>
                        <NavLink
                            to="/coming-soon"
                            className={activeClassHandle}
                        >
                            Coming Soon
                        </NavLink>
                    </ul>
                </div>
            }
        </header >

    )
}

export default Header
