import React from "react";
import { Copy, Headingdesign } from "./Icon";
import Image from "next/image";

const LimitedOffers = () => {
  return (
    <div className=" bg-limited-bg bg-custom-size bg-no-repeat">
      <div className="container max-w-[1152px] mx-auto px-3 py-[137px]">
        <div className="flex flex-wrap justify-center text-center lg:justify-start lg:text-start">
          <div className="w-full md:w-2/4">
            <div className="relative">
              <h2 className="max-w-[555px] font-semibold text-2xl text-white font-ClashDisplay !leading-[123%]">
                Limited Offers By Using Promocode Only $20
              </h2>
              <Headingdesign />
            </div>
            <p className="font-Syne font-normal text-sm !leading-[150%] text-white opacity-70 max-w-[522px] mt-7">
              Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
              dictum accumsan odio tellus integer scelerisque.
            </p>
            <div className="flex gap-3 mt-10">
              <p className="text-white font-ClashDisplay !leading-[123%] font-medium text-sm bg-[#2c2c2d] rounded-full pt-4 ps-5 pe-20">
                #burger10gy2ygv3y
              </p>
              <button className=" bg-copy-bttn-bg flex items-center gap-1 font-ClashDisplay !leading-[123%] font-medium text-sm text-black py-3.5 px-5 rounded-full">
                <Copy /> Copy
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <Image
              src="/assets/images/Limited-Offers/Limited-burger.webp"
              width={604}
              height={513}
              className="!max-w-[604px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffers;
