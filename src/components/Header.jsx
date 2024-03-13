import React from "react";
import { Headingdesign, Watch } from "./Icon";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container max-w-[1152px] mx-auto px-3 pt-[71px] md:pb-[65px] sm:pb-16 pb-12">
      <div className="flex flex-row flex-wrap items-center">
        <div className="md:w-6/12 w-full flex justify-center flex-col">
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
            <div className="w-[42px] h-[2px] bg-yellow rounded-full mt-1"></div>
          </div>
          <h1 className="font-ClashDisplay font-semibold xl:text-3xl lg:text-2xl text-xl leading-[121%] text-Rich-Black mt-1.5 md:text-start text-center">
            Fastest and Flavourful Food Delivering at your{" "}
            <span className="relative">
              Doorstep{" "}
              <span className="absolute lg:right-[-16%] right-[-23%] lg:top-[15%] animate-pulse">
                <Headingdesign />
              </span>
            </span>
          </h1>
          <p className="font-Syne font-normal text-md text-Rich-Black opacity-70 max-w-[520px] mt-[19px] md:text-start text-center md:mx-0 mx-auto">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
          <div className="flex md:justify-start justify-center items-center gap-[15px] mt-[30px]">
            <button className="text-Rich-Black hover:shadow-buttonShadow bg-linear-gradient-btn transition-all ease-in-out duration-300 py-3 px-5 rounded-full font-ClashDisplay font-medium sm:text-sm text-xsm">
              Order Now
            </button>
            <button className="text-Rich-Black border-2 hover:shadow-buttonShadow border-Rich-Black transition-all ease-in-out duration-300 py-2.5 px-[18px] rounded-full font-ClashDisplay flex items-center gap-1 font-medium sm:text-sm text-xsm">
              <span>
                <Watch />
              </span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="md:w-6/12 w-full flex justify-center md:mt-0 mt-10">
          <div className="bubble">
            <Image
              className="max-w-[565px] w-full"
              src="/assets/images/header/scooter.png"
              width={565}
              height={518}
              alt="delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
