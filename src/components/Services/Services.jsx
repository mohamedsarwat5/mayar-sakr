import React from 'react'
import mob from '../../assets/mob.png'
import ux from '../../assets/ux.png'
import wb from '../../assets/wb.png'
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';

export default function Services() {
    return (
        <>

            <div className='h-16 lg:h-6'></div>

            <div className='bg-light-red dark:bg-black ccontainer flex flex-col items-center justify-center min-h-screen '>



                <motion.h2
                    initial={{ opacity: 0, scale: .8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .3 }}
                    className='text-center  uppercase text-mred font-bold text-5xl mb-12'>services</motion.h2>


                <div className='flex flex-col lg:flex-row gap-5 items-center'>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4, }}
                        className='lg:w-4/12 cursor-pointer   px-4 py-8 !h-[350px] flex flex-col text-center gap-3 rounded-4xl bg-shadow-red dark:bg-[#151515]'>
                        <img className='w-28 mx-auto mt-4' src={mob} alt="" />
                        <h3 className=' text-mred font-semibold text-3xl'>Mobile App</h3>
                        <p className='dark:text-white '>Mobile and designing many projects with innovative ideas and a unique approach to visuals</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4, }}
                        className='lg:w-4/12 cursor-pointer  px-4 py-8 !h-[350px] flex flex-col text-center gap-3 rounded-4xl bg-mred '>
                        <img className='w-32 mx-auto mt-4' src={ux} alt="" />
                        <h3 className=' text-black font-semibold text-3xl'>UX Design</h3>
                        <p className='text-white '>Mobile and designing many projects with innovative ideas and a unique approach to visuals</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4, }}
                        className='lg:w-4/12 cursor-pointer   px-4 py-8 !h-[350px] flex flex-col text-center gap-3 rounded-4xl bg-shadow-red dark:bg-[#151515]'>
                        <img className='w-32 mx-auto mt-4' src={wb} alt="" />
                        <h3 className=' text-mred font-semibold text-3xl'>Web Design</h3>
                        <p className='dark:text-white '>Mobile and designing many projects with innovative ideas and a unique approach to visuals</p>
                    </motion.div>
                </div>

            </div>










        </>
    )
}
