import Image from "next/image";
import React from "react";
import { Bgelipse } from "./Icon";

const OurFeauters = () => {
  return (
    <div>
      <div className="container max-w-[1152px] mx-auto px-3 py-[60px] md:py-[80px] lg:py-[130px]">
        <div className="flex justify-center flex-col items-center text-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-black font-ClashDisplay !leading-[123%]">
            Our Features
          </h2>
          <p className="font-Syne font-normal text-xsm md:text-sm !leading-[150%] text-black opacity-70 max-w-[400px] md:max-w-[522px] mt-0 md:mt-2">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center lg:justify-between md:gap-5 lg:gap-0 mt-5 md:mt-10">
            <div className="bg-white border border-black hover:shadow-[0px_3px_0px_0px#000000] w-[360px] lg:w-[320px] xl:w-[360px] h-[238px] rounded-2xl duration-300 ease-in-out flex justify-center items-center flex-col">
              <div className=" relative">
                <Bgelipse />
                <Image
                  src="/assets/images/Our/Svg/Hand.svg"
                  width={100}
                  height={100}
                  className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
                />
              </div>
              <p className=" font-ClashDisplay font-medium text-lg !leading-[123%] text-[#0C0800] mt-3">
                Easy To Order
              </p>
            </div>
          <div className="bg-white border border-black hover:shadow-[0px_3px_0px_0px#000000] w-[360px] lg:w-[320px] xl:w-[360px] h-[238px] rounded-2xl duration-300 ease-in-out flex justify-center items-center flex-col mt-4 md:mt-0">
            <div className=" relative">
              <Bgelipse />
              <Image
                src="/assets/images/Our/Svg/Truck.svg"
                width={100}
                height={100}
                className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
              />
            </div>
            <p className=" font-ClashDisplay font-medium text-lg !leading-[123%] text-[#0C0800] mt-3">
              Fastest Delivery
            </p>
          </div>
          <div className="bg-white border border-black hover:shadow-[0px_3px_0px_0px#000000] w-[360px] lg:w-[320px] xl:w-[360px] h-[238px] rounded-2xl duration-300 ease-in-out flex justify-center items-center flex-col mt-4 md:mt-0">
            <div className=" relative">
              <Bgelipse />
              <Image
                src="/assets/images/Our/Svg/Medal.svg"
                width={100}
                height={100}
                className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
              />
            </div>
            <p className=" font-ClashDisplay font-medium text-lg !leading-[123%] text-[#0C0800] mt-3">
              Best Quality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeauters;
