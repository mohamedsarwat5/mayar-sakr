import React from 'react'
import { motion } from "framer-motion";
import pic from '../../assets/pic.png'


export default function Contact() {
    return (
        <>

            <div className='h-16 lg:h-16'></div>

            <div className='bg-shadow-red dark:bg-black ccontainer flex flex-col items-center  min-h-screen'>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .4 }}
                    className='text-center   text-mred font-bold text-5xl mb-12'>Contact Me</motion.h2>

                <div className='flex flex-col-reverse items-center justify-between lg:flex-row gap-y-9'>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}

                        transition={{ duration: .4, }}
                        className='lg:w-7/12 text-center lg:text-left '>
                        <h2 className='lg:text-5xl text-3xl font-bold lg:leading-14 dark:text-white mb-7'><span className='block'>Are You <span className='text-mred '>Ready</span> </span>to kickstart your project with a touch of magic?
                        </h2>
                        <p className='text-gray-700 dark:text-gray-400 text-[18px]'>Contact me for questions, collaboration, conversation, or just saying hello. Thank you for stopping by here.</p>
                        <div className='flex items-center text-mred justify-center gap-8 text-3xl mx-auto mt-6 '>
                            <a href='https://www.facebook.com/share/1GvHVVEWRC/' target='_blank'>
                                <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-facebook-f'></i>
                            </a>
                            <a href='https://www.instagram.com/mayar.sak_r?igsh=MWJ5ajQ0b2QzdmhsdA==' target='_blank'>
                                <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-instagram'></i>
                            </a>
                            <a href='https://www.tiktok.com/@mayar.sakr8' target='_blank'>
                                <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-tiktok'></i>
                            </a>
                            <a href='https://www.behance.net/mayarsakr' target='_blank'>
                                <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-behance'></i>
                            </a>
                            <a href='https://wa.me/201276317725?text=مرحبا%20اريد%20الاستفسار%20عن%20خدمة' target='_blank'>
                                <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-whatsapp'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/mayarsakr/' target='_blank'>
                                <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-linkedin'></i>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}

                        transition={{ duration: .4, }}
                        className='lg:w-4/12 md:w-8/12'>
                        <img src={pic} className='rounded-4xl h-96 lg:h-fit' />
                    </motion.div>
                </div>

            </div>







        </>
    )
}
