import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import brain from '../../assets/brain.png';
import covery from '../../assets/covery.png';
import dash from '../../assets/dash.png';
import dash2 from '../../assets/dash2.png';
import dream from '../../assets/dream.png';
import eco from '../../assets/eco.png';
import food from '../../assets/food.png';
import foodi from '../../assets/foodi.png';
import img from '../../assets/img.png';
import landing from '../../assets/landing.png';
import lap from '../../assets/lap.png';
import ling from '../../assets/ling.png';
import logo from '../../assets/logo.png';
import mob from '../../assets/mob.png';
import Otakudo from '../../assets/Otakudo.png';
import personal from '../../assets/personal.png';
import pesto from '../../assets/pesto.png';
import petty from '../../assets/petty.png';
import Qutopia from '../../assets/Qutopia.png';
import sales from '../../assets/sales.png';
import scan from '../../assets/scan.png';
import style from '../../assets/style.png';
import sweety from '../../assets/sweety.png';
import ux from '../../assets/ux.png';
import wb from '../../assets/wb.png';
import react from '../../assets/react.svg';


export default function Projects() {
    return (
        <>

            <div className='h-16 lg:h-16 '></div>
            <div className='ccontainer min-h-scre overflow-hidden mx-auto flex flex-col items-center justify-center '>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{ duration: .4 }}
                    className='lg:text-6xl text-3xl font-bold  text-center mb-11 text-mred'>
                    Featured Projects
                </motion.h2>



                <div className='flex flex-col lg:flex-row items-center lg:gap-y-8 gap-y-7 flex-wrap'>

                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
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
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
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
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={landing} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/183187629/style-Haven-Landing-page' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Style Haven-Landing page</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={scan} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/181769879/MediScan-Dashboard' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>MediScan - Dashboard</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={dream} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/180595399/Dream-Trips-Landing-Page' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Dream Trips - Landing Page</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={sales} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/179934397/Sales-Tracker-Dashboard' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Sales Tracker -Dashboard</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
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
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={Otakudo} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/177982821/Otakudo-Anime-UX-research-case-study' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Otakudo - Anime UX research</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={Qutopia} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/177056501/Qutopia-A-UX-Research-Study' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Qutopia: A UX Research Study</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={foodi} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/176027507/Foodie' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Foodie</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={pesto} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/173162677/Petso' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Petso</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={eco} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/173007373/ECO-Case-Study' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>ECO</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={personal} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/172955785/Personal-Website' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Personal Website</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={dash} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/171410159/Cricley-Dashboard' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Cricley Dashboard</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={dash2} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/171343505/Dashboard' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Dashboard</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={brain} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/170611369/Brainy-Academy' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Brainy Academy</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={sweety} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/170608811/Sweety' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Sweety</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={lap} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/169487515/Perception-Lap' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Perception Lap</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={style} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/163509241/StyleOn-app' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>StyleOn app</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4, delay: .3 }}
                        className='lg:w-4/12  lg:px-3 flex flex-col '>
                        <div className='relative'>
                            <img className='rounded-4xl' src={covery} alt="" />
                            <div className='absolute top-0  bottom-0 left-0 end-0 bg-[#0000004d] rounded-4xl z-40 layer opacity-0 !ease-in-out flex items-center justify-center'>
                                <a href='https://www.behance.net/gallery/163508755/Covery-Mobile-App' target='_blank' className='flex items-center justify-center'>
                                    <i className=' fa-solid fa-arrow-up cursor-pointer w-22 h-22 rounded-full   text-white bg-mred  !flex !items-center !justify-center text-[34px] rotate-45'></i>
                                </a>
                            </div>
                        </div>
                        <p className='pl-3 mt-3 dark:text-white'>Covery Mobile App</p>
                    </motion.div>

                </div>







            </div>








        </>
    )
}
