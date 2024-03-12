import React from "react";
import Image from "next/image";
import { ourChef } from "./Helper";
import { RightArrow } from "./Icon";
import Link from "next/link";

const OurChef = () => {
  return (
    <div className="py-12 md:py-[130px]">
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
            <button className="bg-linear-gradient-btn flex items-center transition-shadow duration-300 hover:shadow-[3px_3px_0px_0px_#0c0800] font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5">
              <RightArrow /> See All
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-3 lg:gap-6">
          {ourChef.map((value, index) => (
            <div className="max-w-[364px]">
              <div
                className="rounded-2xl group  p-4 md:p-6 border max-w-[360px] bg-white  border-black cursor-pointer"
                key={index}
              >
                <Image
                  className="rounded-2xl transition-all group-hover:scale-[1.1]"
                  width={316}
                  height={315}
                  src={value.image}
                  alt="john-doe-chef-master"
                />
                <div className="flex justify-between pr-4 items-center pt-[18px] ">
                  <div>
                    <h3 className="text-md md:text-lg font-medium font-ClashDisplay text-Rich-Black">
                      {value.title}
                    </h3>
                    <p className="text-Rich-Black opacity-70 font-Syne font-normal text-sm">
                      {value.master}
                    </p>
                  </div>
                  <Link
                    className="transition-all duration-500 hover:scale-110"
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    {value.icon}
                  </Link>
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
