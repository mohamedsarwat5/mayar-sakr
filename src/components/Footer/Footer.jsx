import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Footer() {
    return (
        <>

            <div className='bg-black overflow-hidden'>
                <div className=' w-[600px] lg:w-full mx-auto py-6 overflow-hidden'>
                    <Marquee speed={100}>
                        <h2 className='text-white '>©Copyright 2025, <span className='text-mred font-bold'>Mayar Sakr</span> All Rights Reserved.</h2>
                    </Marquee>
                </div>
            </div>







        </>
    )
}
