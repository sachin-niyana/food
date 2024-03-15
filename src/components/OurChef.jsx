import React from "react";
import Image from "next/image";
import { ourChef } from "./Helper";
import { RightArrow } from "./Icon";
import Link from "next/link";
import MarqueeSlider from "./MarqueeSlider";

const OurChef = () => {
  return (
    <div
      className="container max-w-[1152px] mx-auto px-3 lg:py-[130px] md:py-20 sm:py-16 py-12"
      id="Contact"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between pb-10 md:pb-4 lg:pb-10">
        <div className="w-11/12 sm:w-8/12 md:w-9/12 lg:w-6/12">
          <h1 className="font-ClashDisplay text-center md:text-start lg:text-2xl md:text-xl text-lg text-Rich-Black font-semibold">
            Our Chef
          </h1>
          <p className="font-Syne px-3 sm:px-0 text-xsm sm:text-sm font-normal text-Rich-Black text-center md:text-start opacity-70">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
        </div>
        <div className="mt-3 hidden md:block lg:mt-0">
          <button className="bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 flex items-center font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5">
            <RightArrow /> See All
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <MarqueeSlider />
      </div>
      <div className="hidden lg:block">
        <div className="flex lg:grid grid-cols-3 gap-6 items-center justify-center">
          {ourChef.map((value, index) => (
            <div className="" key={index}>
              <div className="rounded-2xl p-5 border group bg-white max-w-[360px]  border-black">
                <div className="max-w-[310px] max-h-[310px] overflow-hidden rounded-2xl">
                  <Image
                    className="rounded-2xl group-hover:scale-[1.04]  duration-300"
                    width={316}
                    height={315}
                    src={value.image}
                    alt="john-doe-chef-master"
                  />
                </div>
                <div className="flex justify-between lg:pr-4 items-center pt-[18px] ">
                  <div>
                    <h3 className="lg:text-lg md:text-md text-sm font-medium font-ClashDisplay text-Rich-Black">
                      {value.title}
                    </h3>
                    <p className="text-Rich-Black opacity-70 font-Syne font-normal text-sm">
                      {value.master}
                    </p>
                  </div>
                  <Link href="https://www.linkedin.com/" target="_blank">
                    {value.icon}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[30px] sm:mt-[60px] mb-[82px] md:hidden  lg:mt-0">
        <button className="bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 flex items-center font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5">
          <RightArrow /> See All
        </button>
      </div>
    </div>
  );
};

export default OurChef;
