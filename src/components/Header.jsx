import React from "react";
import { Headingdesign, Watch } from "./common/Icon";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container max-w-[1152px] mx-auto sm:px-6 px-5 sm:pt-[71px] pt-[78px] xl:overflow-visible overflow-hidden">
      <div className="flex flex-row flex-wrap items-center">
        <div className="lg:w-7/12 w-full flex justify-center flex-col">
          <div className="flex lg:justify-start justify-center">
            <div className="bg-light-brown flex items-center gap-0.5 py-1.5 px-[19px] max-w-[202px] rounded-full">
              <Image
                src="/assets/images/header/svg/scooter.svg"
                width={15}
                height={15}
                alt="delivery"
              />
              <p className="font-Syne font-normal text-xsm text-Rich-Black">
                More than faster
              </p>
              <div className="w-[42px] h-[1px] bg-yellow rounded-full mt-2"></div>
            </div>
          </div>
          <h1 className="font-ClashDisplay font-semibold xl:max-w-[570px] lg:max-w-[470px] md:max-w-[700px] sm:max-w-[570px] max-w-[340px] xl:text-3xl lg:text-xxl md:text-3xl sm:text-3xl text-llg lg:mx-0 mx-auto leading-[121%] text-Rich-Black mt-1.5 lg:text-start text-center">
            Fastest and Flavourful Food Delivering at your{" "}
            <span className="relative">
              Doorstep{" "}
              <span className="absolute xl:right-[-16%] lg:right-[-20%] sm:right-[-17%] right-[-30%] lg:top-[15%] top-[20%] animate-pulse sm:w-[104px] sm:h-[67px] w-[90px] h-[55px]">
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
        <div className="lg:w-5/12 w-full flex justify-center xl:ps-0 lg:ps-5 lg:mt-0 sm:mt-[128px] mt-[61px] relative">
          <Image
            className="xl:min-w-[560px] max-w-[563px] w-full xl:translate-x-7 z-10"
            src="/assets/images/header/svg/delivery.svg"
            width={563}
            height={518}
            alt="scooter"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
