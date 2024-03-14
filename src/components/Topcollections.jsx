import React from 'react'
import Image from 'next/image';
import { topCollection } from './Helper';

const TopCollections = () => {
    return (
        <div>
            <div className='container max-w-[1152px] mx-auto px-3'>
                <div className='flex justify-center flex-col items-center'>
                    <h2 className='font-ClashDisplay text-xl md:text-2xl leading-[40px] font-semibold text-Rich-Black text-center'>Top Collections</h2>
                    <p className='text-sm text-center text-Rich-Black  opacity-70 mt-[8px] leading-[150%] xl:max-w-[532px] '>Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum accumsan odio tellus integer scelerisque.</p>
                </div>
                <div className='grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-[40px]'>
                    {topCollection.map((value, index) => (
                        <div className='w-full' key={index}>
                            <div className='border-[1px] mx-auto bg-white px-4 sm:px-3 lg:px-[24px] pt-4 sm:pt-3 lg:pt-[24px] pb-4 lg:pb-[20px] max-w-[364px] border-black rounded-[16px]'>
                                <div className='border-[1px] bg-white p-2 md:p-4 border-black rounded-[16px] relative'>
                                    <span className='absolute right-3'> {value.icon} </span>
                                    <Image src={value.image} width={284} height={189} alt='burger' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='mt-[20px]'>
                                        <h2 className='font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black'>{value.title}</h2>
                                        <p className='text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]'>{value.burger}</p>
                                    </div>
                                    <h3 className='font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black'>{value.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCollections