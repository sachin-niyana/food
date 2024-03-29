import React from "react";
import { Copy, Headingdesign } from "./common/Icon";
import Image from "next/image";
import TopCollections from "./TopCollections";
TopCollections;

const LimitedOffers = () => {
  return (
    <div className="min-[840px]:bg-limited-bg bg-limited-bg-2  bg-center bg-cover bg-no-repeat">
      <div className="container max-w-[1152px] mx-auto sm:px-6 px-5 pt-[161px] sm:pb-[143px] pb-[150px] lg:py-[137px]  xl:overflow-visible overflow-hidden">
        <div className="flex flex-wrap justify-center text-center md:justify-start md:text-start lg:my-5">
          <div className="w-full lg:w-2/4 flex flex-col justify-center items-center lg:items-start lg:justify-start md:mt-[23px]">
            <h2
              className="lg:block hidden max-w-[555px] font-semibold lg:text-xl text-2xl xl:text-2xl text-white font-ClashDisplay !leading-[123%]"
              aosdata-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Limited Offers By Using Promocode Only{" "}
              <span className="relative">
                {" "}
                $20{" "}
                <span className=" absolute -bottom-6 xl:right-[-40%] lg:right-[-50%] sm:top-0 right-[20%] lg:-bottom-4 animate-pulse">
                  <Headingdesign />
                </span>
              </span>
            </h2>
            <h2
              className="lg:hidden block sm:max-w-[555px] max-w-[300px] font-semibold lg:text-xl text-center sm:text-2xl xl:text-2xl text-llg  text-white font-ClashDisplay !leading-[123%]"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Limited Offers By Using Promocode Only{" "}
              <span className="relative">
                {" "}
                $10{" "}
                <span className=" absolute -bottom-6 xl:right-[-70%] lg:right-[-70%] right-[-50%] sm:top-0 top-[-5%] lg:-bottom-4 animate-pulse">
                  <Headingdesign />
                </span>
              </span>
            </h2>
            <p
              className="font-Syne font-normal text-sm !leading-[150%] text-white !opacity-70 max-w-[300px] sm:max-w-[522px] mt-8 lg:text-start text-center"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
              dictum accumsan odio tellus integer scelerisque.
            </p>
            <div
              className="flex items-center gap-3 mt-[42px] sm:mt-[39px]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="text-white font-ClashDisplay !leading-[123%] max-h-[44px] font-medium text-sm bg-[#2c2c2d] rounded-full py-3 min-[340px]:pe-[35px] pe-[13px] sm:pe-20 ps-[13px]  items-center flex justify-center md:items-start md:justify-start">
                #burger10gy2ygv3y
              </div>
              <button className="bg-linear-gradient-btn hover:shadow-buttonShadow2 transition-all ease-in-out duration-300 flex items-center gap-1 font-ClashDisplay !leading-[123%] font-medium text-xsm md:text-sm text-black py-3 px-5 rounded-full">
                <Copy /> Copy
              </button>
            </div>
          </div>
          <div
            className="w-full lg:w-2/4 flex justify-center lg:justify-start md:mt-0"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <Image
              src="/assets/images/lemted/burger.webp"
              width={604}
              height={513}
              className="max-w-[604px] w-full xl:translate-x-[10%] lg:translate-x-[4%] lg:mt-0 sm:mt-[75px] mt-16"
              alt="burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffers;
