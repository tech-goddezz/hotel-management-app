import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiTwotonePhone, AiOutlineMail, AiOutlineClockCircle, } from 'react-icons/ai';
import { BsPerson, } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';

import { Link, NavLink, useLocation } from "react-router-dom";

import image from '../Components/Assets/userOne.jpg';





const UserNavbar = () => {
    const [sideNav, setSideNav] = useState(false);

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const refer = 
        <Link 
            to='/profile'  
            onClick={closeMobileMenu}>
            Logout
        </Link>;

    return (
        <>
        <div className="font-georgia max-w-[1520px] mx-auto flex justify-between items-center text-[#aaa9a9] z-index-999 p-1  sticky bg-black top-0 z-50 h-[15vh] ">

                <div className='flex justify-between items-center p-1 '>
                    <div className="flex justify-between items-center pl-1 "
                        onClick={() => setSideNav(!sideNav)}
                    >
                        <AiOutlineMenu size={25} className='hover:text-[#ebcf32]' />
                    </div>

                </div>




                <div className="flex items-center">
                    <ul className='text-[#cfcfcf]  pl-[270px] pr-10 max-w-[1520px] mx-auto flex justify-between items-center p-4 sm:w[400px] lg:[500px]'>
                        <li className='p-3 text-bold inline-block transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <NavLink exact to='/' onClick={closeMobileMenu}
                            activeClassName="text-red-500"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className='p-3 text-bold inline-block transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <NavLink exact to='/gallery' onClick={closeMobileMenu}
                            activeClassName="text-red-500"
                            >
                                Gallery
                            </NavLink>
                        </li>

                        <li className='p-3 text-bold inline-block transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <NavLink to='/blog' onClick={closeMobileMenu}
                            activeClassName="active-link"
                            >
                                Blog
                            </NavLink>
                        </li>

                        <li>
                        <div className='text'>
                        <ul className='p-3 text-bold px-[70px]'>
                            <li>
                                <h2 className='text-5xl text-[#ebcf32] font-bold font-georgia '>P<span className='text-[#ebcf32] font-bold text-3xl font-georgia '>aradise</span> </h2>
                                
                            </li>
                        </ul>
                        
                    </div>
                        </li>

                        <li className='p-3 text-bold inline-block transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <NavLink to='/about' onClick={closeMobileMenu}
                            activeClassName="active-link"
                            >
                                About 
                            </NavLink>
                        </li>

                        <li className='p-3 text-bold inline-block transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <NavLink to='/contact' onClick={closeMobileMenu}
                            activeClassName="active-link"
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className='p-3 text-bold  inline-block transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <NavLink to='/adminhome' onClick={closeMobileMenu}
                            activeClassName="active-link"
                            >
                                Admin
                            </NavLink>
                        </li>

                    </ul>
                </div>



                <div className="flex items-center">
                <ul className='text-[#aaa9a9] max-w-[1520px] mx-auto flex justify-between items-center p-10 sm:w[400px] lg:[500px]'>
                        <li className='p-3 flex items-center text-bold transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            <Link to='/' className='mr-1' onClick={closeMobileMenu}>
                                Logout
                            </Link>
                        </li>

                        <li className='p-3 flex items-center text-bold transition-all duration-200 ease-out mr-30 hover:text-[#ebcf32]'>
                            {/* Replace this with the circular image */}
                            <Link to='/profile' onClick={closeMobileMenu}>
                                <img
                                    onClick={refer}
                                    src={image} // Replace with the URL of your circular image
                                    alt='Profile'
                                    className='rounded-full w-10 h-10' // Adjust the size as needed
                                />
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>


        


            {/* sidebar (sidenav) */}

            {/* sidebar overlay */}
            {
                sideNav ? (
                    <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
                        onClick={() => setSideNav(!sideNav)}
                    >
                    </div>
                ) : ('')
            }

            {/* end */}

            <div className={sideNav ?
                "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
            }>
                <AiOutlineClose
                    onClick={() => setSideNav(!sideNav)}
                    size={25}
                    className='absolute text-[gold] right-4 top-4 cursor-pointer'
                />

                <div className='text'>
                    <ul className='p-3 text-bold'>
                        <li>
                            <h2 className='text-2xl '><span className='text-orange-700 font-bold'>Paradise</span> </h2>
                            <h6 className='text-[13px] pl-1 text-orange-300 '>Hotel and Suite</h6>
                        </li>
                    </ul>
                </div>

                <nav className='flex flex-col p-4 text-gray-900'>
                    <ul>
                        <li className="text-xl hover:text-[gold] hover:scale-105 py-4 flex">
                            <BsPerson
                                size={25}
                                className='mr-4 text-white bg-white rounded-full'
                            />
                            My Account
                        </li>

                        <li className="text-xl hover:text-[gold] hover:scale-105 py-4 flex">
                            <TbTruckReturn
                                size={25}
                                className='mr-4 text-white bg-white rounded-full'
                            />
                            Delivery
                        </li>

                        <li className="text-xl hover:text-[gold] hover:scale-105 py-4 flex">
                            <MdOutlineFavorite
                                size={25}
                                className='mr-4 text-white bg-white rounded-full'
                            />
                            Favourite
                        </li>

                        <li className="text-xl hover:text-[gold] hover:scale-105 py-4 flex">
                            <FaGoogleWallet
                                size={25}
                                className='mr-4 text-white bg-white rounded-full'
                            />
                            My Wallet
                        </li>

                        <li className="text-xl py-4 flex">
                            <MdHelp
                                size={25}
                                className='mr-4 text-white bg-black rounded-full'
                            />
                            Help
                        </li>
                    </ul>
                </nav>


            </div>



        </>
    )
}

export default UserNavbar;


               