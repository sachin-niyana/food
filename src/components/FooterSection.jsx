import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { navLink } from './Helper'
import { FooterFacebookIcon, FooterInstagramIcon, FooterLinkedInIcon, FooterTwitterIcon } from './Icon';

const FooterSection = () => {
    return (
        <div className='bg-footer-cartoon-bg bg-center bg-no-repeat bg-auto'>
            <div className='container mx-auto max-w-[1152px] px-3'>
                <div className='pt-[51px] pb-[38px] flex flex-wrap flex-col md:flex-row items-center justify-between'>
                    <Link href="#" target='_blank'>
                        <Image width={171} height={74} src="/assets/images/footer/footer-logo.png" />
                    </Link>
                    <ul className="flex gap-2 sm:gap-[30px] py-5 md:py-0 ">
                        {navLink.map((value, index) => {
                            return (
                                <li key={index} className="flex flex-col  items-center ">
                                    <Link
                                        aria-label={value.title}
                                        className="text-Rich-Black   font-Syne font-medium sm:text-sm text-sm hover:underline transition-all ease-in-out duration-300"
                                        href={value.path}
                                    >
                                        {value.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='flex gap-2.5'>
                        <Link href="#" target='_blank'>
                            <FooterLinkedInIcon />
                        </Link>
                        <Link href="#" target='_blank'>
                            <FooterTwitterIcon />
                        </Link>
                        <Link href="#" target='_blank'>
                            <FooterFacebookIcon />
                        </Link>
                        <Link href="#" target='_blank'>
                            <FooterInstagramIcon />
                        </Link>
                    </div>
                </div>
                <div className='bg-[#55524D] h-[2px] w-full rounded-md'></div>
                <p className='text-center text-Rich-Black pt-[38px] pb-12 font-syne text-sm font-medium '>©Copyright 2024. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default FooterSection