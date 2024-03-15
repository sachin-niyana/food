import React from "react";
import { Headingdesign, Watch } from "./Icon";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container max-w-[1152px] mx-auto px-3 pt-[71px] md:pb-[65px] sm:pb-16 pb-12 xl:overflow-visible overflow-hidden">
      <div className="flex flex-row flex-wrap items-center">
        <div className="lg:w-6/12 w-full flex justify-center flex-col">
          <div className="flex lg:justify-start justify-center">
            <div className="bg-light-brown flex items-center gap-0.5 py-1.5 px-[19px] max-w-[202px] rounded-full">
              <Image
                src="/assets/images/header/delivery.png"
                width={15}
                height={15}
                alt="delivery"
              />
              <p className="font-Syne font-normal text-xsm text-Rich-Black">
                More than faster
              </p>
              <div className="w-[42px] h-[1px] bg-yellow rounded-full mt-1"></div>
            </div>
          </div>
          <h1 className="font-ClashDisplay font-semibold md:max-w-[728px] sm:max-w-[570px] max-w-[340px] xl:text-3xl lg:text-xxl md:text-3xl sm:text-3xl text-llg mx-auto leading-[121%] text-Rich-Black mt-1.5 lg:text-start text-center">
            Fastest and Flavourful Food Delivering at your{" "}
            <span className="relative">
              Doorstep{" "}
              <span className="absolute lg:right-[-16%] right-[-25%] lg:top-[15%] animate-pulse sm:w-[104px] sm:h-[67px] w-[90px] h-[55px]">
                <Headingdesign />
              </span>
            </span>
          </h1>
          <p className="sm:block hidden font-Syne font-normal sm:text-md text-sm text-Rich-Black opacity-70 max-w-[520px] mt-[19px] lg:text-start text-center lg:mx-0 mx-auto">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
          <p className="sm:hidden block font-Syne font-normal sm:text-md text-sm text-Rich-Black opacity-70 sm:max-w-[520px] max-w-[300px] mt-[23px] lg:text-start text-center lg:mx-0 mx-auto">
            Dictum commodo pharetra sit odio nulla aliquamctum accusaus
            integerelerisque.
          </p>
          <div className="flex lg:justify-start justify-center items-center gap-[15px] mt-[30px]">
            <button className="text-Rich-Black hover:shadow-buttonShadow bg-linear-gradient-btn transition-all ease-in-out duration-300 py-2.5 px-5 rounded-full font-ClashDisplay font-medium sm:text-sm text-xsm">
              Order Now
            </button>
            <button className="text-Rich-Black border-[1px] hover:shadow-buttonShadow border-Rich-Black transition-all ease-in-out duration-300 py-[9px] px-[18px] rounded-full font-ClashDisplay flex items-center gap-1 font-medium sm:text-sm text-xsm">
              <span>
                <Watch />
              </span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="lg:w-6/12 w-full flex justify-center xl:ps-0 lg:ps-5 md:mt-0 sm:mt-32 !mt-[61px] relative">
          <Image
            className="max-w-[563px] w-full xl:translate-x-10 z-10"
            src="/assets/images/header/scooter.png"
            width={565}
            height={518}
            alt="delivery"
          />
          <Image
            className="max-w-[565px] w-full xl:translate-x-20 translate-y-[-7%] absolute sm:top-16"
            src="/assets/images/header/scooter-shadow.png"
            width={565}
            height={518}
            alt="delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
