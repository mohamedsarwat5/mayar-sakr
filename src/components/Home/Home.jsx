import React from 'react'
import Marquee from "react-fast-marquee";
import img from "../../assets/img.png";
import Services from '../Services/Services';
import { motion } from "framer-motion";
import Pre from '../Pre/Pre';

export default function Home() {
    return (
        <>
            <div className='h-16 lg:h-6 '></div>
            <div className='flex items-center   lg:justify-between justify-center  min-h-screen ccontainer flex-col-reverse lg:flex-row'>

                <div className='md:w-8/12 text-center lg:text-left'>
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className='font-semibold lg:text-7xl text-3xl leading-11 lg:leading-[94px] dark:text-white'> <span className='text-mred block'>Hello,<span className='dark:text-white text-black'> I'm Mayar Sakr</span></span>   <span className='block'>UI/UX Designer</span> based in Egypt</motion.h2>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .2 }}
                        className='mt-7 text-gray-600 dark:text-gray-400'>I’m a Creative UI UX Designer with a focus on creating exceptional user interfaces and websites.
                        With specialized training and hands-on experience.</motion.p>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .3 }}
                        className='flex items-center mt-8 justify-center gap-5 lg:gap-10'>
                        <a className='bt1 flex items-center gap-2  bg-mred py-3 px-5 lg:px-9 rounded-4xl text-white hover:bg-transparent hover:text-mred border-transparent hover:border-mred border duration-300' href="mailto:mayarsakr2000@gmail.com"> <i class='bx bx-envelope' ></i> Email me</a>
                        <a href="" className='bt2 hover:border-transparent duration-300 flex items-center gap-2 border-mred border text-mred hover:text-white  hover:bg-mred py-3 px-5 lg:px-9 rounded-4xl '>Download CV <i class='bx bx-download text-[20px]'></i></a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: .5 }}
                    className='lg:w-5/12 md:w-8/12'>
                    <img src={img} alt="" />
                </motion.div>

            </div>

            <Services></Services>
            <Pre></Pre>


        </>
    )
}
