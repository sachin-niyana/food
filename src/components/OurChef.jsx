import React from "react";
import Image from "next/image";
import { ourChef } from "./Helper";
import { RightArrow } from "./Icon";
import Link from "next/link";

const OurChef = () => {
    return (
        <div>
            <div className="container max-w-[1152px] mx-auto px-3">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between pb-10">
                    <div className="w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12">
                        <h1 className="font-ClashDisplay text-center lg:text-start text-2xl text-Rich-Black font-semibold">
                            Our Chef
                        </h1>
                        <p className="font-Syne text-xsm sm:text-sm font-normal text-Rich-Black text-center lg:text-start opacity-70">
                            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
                            dictum accumsan odio tellus integer scelerisque.
                        </p>
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <button className="bg-linear-gradient-btn flex items-center font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5">
                            <RightArrow /> See All
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-3 lg:gap-0 lg:justify-between">
                    {ourChef.map((value, index) => (
                        <div className="sm:w-5/12 lg:w-[32%]">
                            <div className="rounded-2xl p-6 border bg-white  border-black cursor-pointer" key={index}>
                                <Image
                                    className="rounded-2xl"
                                    width={316}
                                    height={315}
                                    src={value.image}
                                    alt="john-doe-chef-master"
                                />
                                <div className="flex justify-between pr-4 items-center pt-[18px] ">
                                    <div>
                                        <h3 className="text-lg font-medium font-ClashDisplay text-Rich-Black">
                                            {value.title}
                                        </h3>
                                        <p className="text-Rich-Black opacity-70 font-Syne font-normal text-sm">
                                            {value.master}
                                        </p>
                                    </div>
                                    <Link className="" href="https://www.linkedin.com/" target="_blank" >{value.icon}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurChef;
