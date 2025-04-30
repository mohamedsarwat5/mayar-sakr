import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/logo.png'

export default function Navbar() {


    const handledarkmode = () => {
        document.documentElement.classList.toggle('dark')
        document.getElementById('moon').classList.toggle('bi-moon-fill')
        document.getElementById('moon').classList.toggle('bi-brightness-high-fill')
    }


    const [isOpen, setIsOpen] = useState(false)
    return (<>
                <div className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300 ease-in-out w-full h-full top-0 bottom-0 end-0 left-0 bg-light-red dark:bg-mblack  fixed z-20  lg:hidden`}></div>

        <nav className={`  bg-light-red dark:bg-mblack shadow-lg dark:shadow-sm transition-colors duration-300 lg:dark:shadow-gray-700 dark:text-white  text-black  fixed top-0 z-40 w-full`}>
            <div className="max-w-screen-xl flex flex-wrap items-center  justify-between py-5 mx-auto px-6">
                <div className='flex items-center gap-3'>
                    <div className='bg-mred p-2 rounded-[8px]'><img className='w-7' src={logo} alt="" /></div>
                    <Link to={'/'} className='font-[poppins] text-mred font-semibold text-lg lg:text-2xl'>Mayar Sakr</Link>
                </div>
                <div className='flex items-center gap-3 md:order-1'>
                    <button type="button" className=" cursor-pointer ">
                        <i id='moon' onClick={handledarkmode} className='bi bi-moon-fill text-[21px] cursor-pointer text-mred'></i>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-mred cursor-pointer md:hidden">
                        <i className={`${isOpen ? 'fa-xmark' : 'fa-bars'} fa-solid  text-[22px] `}></i>
                    </button>
                </div>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden w-full md:w-auto md:opacity-100 md:scale-100 md:max-h-full md:overflow-visible ${isOpen ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'} md:block `}
                >
                    <ul className="font-medium text-center flex flex-col md:flex-row p-4 md:p-0 mt-4  gap-9  md:mt-0">
                        <li>
                            <NavLink to={''} onClick={() => setIsOpen(false)} className={`font-[poppins] hover:text-mred duration-150    cursor-pointer`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/services'} onClick={() => setIsOpen(false)} className={`font-[poppins] hover:text-mred duration-150   cursor-pointer`}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/projects'} onClick={() => setIsOpen(false)} className={`font-[poppins] hover:text-mred duration-150   cursor-pointer`}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} onClick={() => setIsOpen(false)} className={`font-[poppins] hover:text-mred duration-150    cursor-pointer`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} onClick={() => setIsOpen(false)} className={`font-[poppins] hover:text-mred duration-150   cursor-pointer`}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}
