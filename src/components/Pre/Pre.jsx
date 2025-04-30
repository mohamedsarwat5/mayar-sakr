import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ling from '../../assets/ling.png'
import petty from '../../assets/petty.png'
import food from '../../assets/food.png'

export default function Pre() {
    return (
        <>

            {/* <div className='h-16 lg:h-6 '></div> */}
            <div className='ccontainer  overflow-hidden mx-auto flex flex-col items-center justify-center'>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{ duration: .4 }}
                    className='lg:text-6xl text-3xl font-bold  text-center mb-11 text-mred'>
                    Featured Projects
                </motion.h2>



                <div className='flex flex-col lg:flex-row gap-4'>

                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={ling} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/180166455/Linguista-Design-Thinking' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Linguista- Design Thinking</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={petty} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/177710469/Petty-Responsive-Design' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Petty - Responsive Design</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={food} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/163508497/Foodi-Mobile-App' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Foodi Mobile App</p>
                    </motion.div>

                </div>







                <Link to='/projects' className='mt-[40px] bg-mred px-12 py-3 rounded-3xl  duration-300  bt1 border border-transparent ease-in-out text-white  font-medium' > See more</Link>
            </div>








        </>
    )
}
