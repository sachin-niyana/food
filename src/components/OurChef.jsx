import React from 'react'
import { LinkedInIcon, RightArrow } from './Icon'

const OurChef = () => {
    return (
        <div>
            <div className='container max-w-[1152px] mx-auto px-3'>
                <div className='flex items-center justify-between '>
                    <div className='w-6/12'>
                        <h1 className='font-ClashDisplay text-2xl text-Rich-Black font-semibold'>Our Chef</h1>
                        <p className='font-Syne text-sm font-normal text-Rich-Black'>Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum accumsan odio tellus integer scelerisque.</p>
                    </div>
                    <div>
                        <button className='bg-linear-gradient-btn flex items-center font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5'><RightArrow /> See All</button>
                    </div>
                </div>
                <div className='flex flex-wrap '>
                    <div className='rounded-2xl p-6 border border-black'>
                        <img className='rounded-2xl' width={316} height={315} src="/assets/images/ourchef/john-doe-chef-master.webp" alt="" />
                        <div className='flex justify-between pr-4 items-center pt-4.5'>
                            <div>
                                <h3 className='text-lg font-medium font-ClashDisplay text-Rich-Black'>John Doe</h3>
                                <p className='text-Rich-Black opacity-70 font-Syne font-normal text-sm'>Chef Master</p>
                            </div>
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurChef