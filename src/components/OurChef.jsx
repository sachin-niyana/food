import React, { useState } from "react";
import Image from "next/image";
import { ourChef } from "./common/Helper";
import { RightArrow } from "./common/Icon";
import Link from "next/link";
import ShowMoreBtn from "./ShowMoreBtn";

const OurChef = () => {
  return (
    <div
      className="container max-w-[1152px] mx-auto px-3 lg:py-[130px] md:py-20 sm:py-16 py-12"
      id="Contact"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between pb-10 md:pb-4 lg:pb-10">
        <div className="w-full sm:w-8/12 md:w-9/12 lg:w-6/12">
          <h1
            className="font-ClashDisplay text-center md:text-start lg:text-2xl md:text-xl text-lg text-Rich-Black font-semibold"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            Our Chef
          </h1>
          <p
            className="font-Syne px-3 sm:px-0 text-sm font-normal text-Rich-Black text-center md:text-start opacity-70"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
        </div>
        <div
          className="mt-3 hidden md:block lg:mt-0"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className=" mt-[30px] sm:mt-[60px] mb-[82px] hidden lg:block  lg:mt-0">
            <button className="text-Rich-Black hover:shadow-buttonShadow flex items-center bg-linear-gradient-btn transition-all ease-in-out duration-300 py-2.5 px-5 rounded-full font-ClashDisplay font-medium sm:text-sm text-xsm">
              <span className="pe-[4.6px]"><RightArrow /></span> See All
            </button>
          </div>
        </div>
      </div>

      {/* MD SCREEN CARDS  */}

      <div className="hidden lg:block">
        <div className="flex flex-wrap lg:grid grid-cols-3 gap-6 items-center justify-center">
          {ourChef.map((value, index) => (
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
              key={index}
            >
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

      {/* SM SHOW MORE BTN CARDS  */}
      <div className="md:hidden">
        <div className="flex flex-wrap lg:grid grid-cols-3  gap-6 items-center justify-center">
          {ourChef.slice(0, 1, 2).map((value, index) => (
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
              key={index}
            >
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


      {/* MD SHOW MORE BTN CARDS  */}
      <div className="hidden md:block mt-6 lg:hidden">
        <div className="flex flex-wrap lg:grid grid-cols-3 gap-6 items-center justify-center">
          {ourChef.slice(0, 2).map((value, index) => (
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
              key={index}
            >
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

      <div className="flex justify-center items-center md:hidden mt-[30px] sm:mt-[60px] mb-[82px] md:mt-6 md:mb-10 lg:hidden  lg:mt-0">
        <ShowMoreBtn
          data={
            <div className="lg:hidden">
              <div className="flex flex-wrap lg:grid grid-cols-3 gap-6  items-center justify-center">
                {ourChef.slice(1, 3).map((value, index) => (
                  <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                    key={index} >
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
          }
        />
      </div>
      <div className="justify-center items-center hidden md:block mt-[30px] sm:mt-[60px] mb-[82px] md:mt-6 md:mb-10 lg:hidden  lg:mt-0">
        <ShowMoreBtn
          data={
            <div className="lg:hidden">
              <div className="flex flex-wrap lg:grid grid-cols-3 gap-6  items-center justify-center">
                {ourChef.slice(2, 3).map((value, index) => (
                  <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                    key={index} >
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
          }
        />
      </div>


    </div>
  );
};

export default OurChef;
