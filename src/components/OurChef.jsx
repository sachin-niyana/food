import React from "react";
import Image from "next/image";
import { ourChef } from "./Helper";
import { RightArrow } from "./Icon";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const OurChef = () => {
  return (
    <div
      className="container max-w-[1152px] mx-auto px-3 lg:py-[130px] md:py-20 sm:py-16 py-12"
      id="Contact"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between pb-10">
        <div className="w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12">
          <h1 className="font-ClashDisplay text-center md:text-start lg:text-2xl md:text-xl text-lg text-Rich-Black font-semibold">
            Our Chef
          </h1>
          <p className="font-Syne text-xsm sm:text-sm font-normal text-Rich-Black text-center md:text-start opacity-70">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
        </div>
        <div className="mt-3 lg:mt-0">
          <button className="bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 flex items-center font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5">
            <RightArrow /> See All
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Marquee
          speed={100}
          className="mt-5 md:mt-10 w-full md:animation-none marquee md:transition-none"
        >
          {ourChef.map((value, index) => (
            <div className="w-full flex  justify-center" key={index}>
              <div className="rounded-2xl me-6 lg:p-6 p-5 border group bg-white  border-black">
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
                  <Link
                    className=""
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    {value.icon}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default OurChef;
