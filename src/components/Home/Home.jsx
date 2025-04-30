import React from 'react'
import Marquee from "react-fast-marquee";
import img from "../../assets/img.png";
export default function Home() {
    return (
        <>

            <div className='flex items-center  h-[100dvh] lg:justify-between justify-center !py-[200px] ccontainer flex-col-reverse lg:flex-row'>

                <div className='md:w-8/12 text-center lg:text-left'>
                    <h2 className='font-semibold lg:text-7xl text-3xl leading-11 lg:leading-[94px] dark:text-white'> <span className='text-mred block'>Hello,<span className='dark:text-white text-black'> I'm Mayar Sakr</span></span>   <span className='block'>Ui/Ux Designer</span> based in Egypt</h2>
                    <p className='mt-7 text-gray-600 dark:text-gray-400'>I’m a Creative UI UX Designer with a focus on creating exceptional user interfaces and websites.
                    With specialized training and hands-on experience.</p>
                    <div className='flex items-center mt-8 justify-center gap-10'>
                        <a className='flex items-center gap-2  bg-mred py-3 px-9 rounded-4xl text-white hover:bg-transparent hover:text-mred border-transparent hover:border-mred border duration-300' href="mailto:mayarsakr2000@gmail.com"> <i class='bx bx-envelope' ></i> Email me</a>
                        <a href="" className=' hover:border-transparent duration-300 flex items-center gap-2 border-mred border text-mred hover:text-white  hover:bg-mred py-3 px-9 rounded-4xl '>Download CV</a>
                    </div>
                </div>

                <div className='lg:w-5/12 md:w-8/12'>
                    <img src={img} alt="" />
                </div>

            </div>







        </>
    )
}
