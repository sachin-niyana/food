import React from 'react'
import Image from 'next/image';

const LittleInformantion = () => {
    return (
        <div className='relative'>
            <Image src="/assets/images/little-information/yellow-bg.webp" className='absolute left-0' width={670.41} height={600} alt='yellow-bg'></Image>
            <div className='container max-w-[1152px] mx-auto px-3'>
                <div className='flex flex-wrap '>
                    <div className='w-1/2'>
                        <Image src="/assets/images/little-information/chef-img.webp" className='relative mt-12 ml-[-25px]' width={631.89} height={631.89} alt='chef-img'></Image>
                    </div>
                    <div className='w-1/2 relative'>
                        <h3 className='font-ClashDisplay text-2xl font-semibold mt-[141px] text-Rich-Black'>A Little Information For Our Guest</h3>
                        <p className='text-sm font-normal mt-2 font-Syne text-Rich-Black opacity-70'>Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum accumsan odio tellus integer scelerisque. Dictum commodo pharetra sit odio nulla aliquam sit mor diio tellus integer scelerisque.</p>
                        <div className='mt-[40px] flex gap-[24px]'>
                            <div className='py-[15px] px-[24px] rounded-[8px] shadow-[0px_3px_0px_0px_#000000] border-[1px] border-[#000000] max-w-[267px] flex items-center'>
                                <Image src="/assets/images/little-information/hand-stars.webp" className='' width={80} height={80} alt='hand'></Image>
                                <div className='ml-[19px]'>
                                    <h4 className='text-Rich-Black text-xl font-semibold'>15K</h4>
                                    <p className='text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap font-semibold'>Happy Customer</p>
                                </div>
                            </div>
                            <div className='py-[15px] px-[24px] rounded-[8px] shadow-[0px_3px_0px_0px_#000000] border-[1px] border-[#000000] max-w-[267px] flex items-center'>
                                <Image src="/assets/images/little-information/trophy-img.webp" className='' width={80} height={80} alt='trophy'></Image>
                                <div className='ml-[19px] pr-[35.5px]'>
                                    <h4 className='text-Rich-Black text-xl font-semibold'>10K</h4>
                                    <p className='text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap font-semibold'>Award Win</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LittleInformantion