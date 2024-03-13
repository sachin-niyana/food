import React from "react";
import { Copy, Headingdesign } from "./Icon";
import Image from "next/image";
import TopCollections from "./TopCollections";
TopCollections;

const LimitedOffers = () => {
  return (
    <div className="bg-limited-bg bg-size bg-cover bg-no-repeat">
      <div className="container max-w-[1152px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:py-[137px]">
        <div className="flex flex-wrap justify-center text-center md:justify-start md:text-start">
          <div className="w-full md:w-2/4 flex flex-col justify-center items-center md:items-start md:justify-start md:mt-[23px]">
            <h2 className="max-w-[555px] font-semibold text-[32px] lg:text-2xl text-white font-ClashDisplay !leading-[123%]">
              Limited Offers By Using Promocode Only{" "}
              <span className="relative">
                {" "}
                $20{" "}
                <span className=" absolute -bottom-6 !-right-[50%] lg:!-right-[40%] lg:-bottom-4">
                  <Headingdesign />
                </span>
              </span>
            </h2>
            <p className="font-Syne font-normal text-xsm md:text-sm !leading-[150%] text-white opacity-70 max-w-[400px] md:max-w-[522px] mt-8">
              Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
              dictum accumsan odio tellus integer scelerisque.
            </p>
            <div className="flex gap-3 mt-4 md:mt-6 lg:mt-10">
              <p className="text-white font-ClashDisplay !leading-[123%] font-medium text-xsm md:text-sm bg-[#2c2c2d] rounded-full py-0 md:py-4 ps-5 pe-5 md:pe-10 lg:pe-20 items-center flex justify-center md:items-start md:justify-start">
                #burger10gy2ygv3y
              </p>
              <button className=" bg-linear-gradient-btn hover:shadow-buttonShadow2 transition-all ease-in-out duration-300 flex items-center gap-1 font-ClashDisplay !leading-[123%] font-medium text-xsm md:text-sm text-black py-3.5 px-5 rounded-full">
                <Copy /> Copy
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/4 flex justify-center md:justify-start mt-5 md:mt-0">
            <Image
              src="/assets/images/lemted/burger.png"
              width={604}
              height={513}
              className="!max-w-[280px] md:!max-w-[604px] w-full"
              alt="burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffers;
