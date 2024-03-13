import Image from "next/image";
import React from "react";
import { Bgelipse } from "./Icon";
import { ourFeatures } from "./Helper";

const OurFeauters = () => {
  return (
    <div>
      <div className="container max-w-[1152px] mx-auto px-3 py-12 sm:py-16 md:py-20 lg:py-[130px]">
        <div className="flex justify-center flex-col items-center text-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-black font-ClashDisplay !leading-[123%]">
            Our Features
          </h2>
          <p className="font-Syne font-normal text-xsm md:text-sm !leading-[150%] text-black opacity-70 max-w-[400px] md:max-w-[522px] mt-0 md:mt-2">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
        </div>
        <div className="grid md:grid-cols-3 min-[576px]:grid-cols-2 grid-cols-1 gap-6 mt-5 md:mt-10">
          {ourFeatures.map((value, index) => (
            <div
              key={index}
              className="bg-light-white border border-black py-7 rounded-2xl duration-300 ease-in-out flex justify-center items-center flex-col"
            >
              <div className=" relative">
                <Bgelipse />
                <Image
                  src={value.image}
                  width={100}
                  height={100}
                  className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
                  alt="Hand"
                />
              </div>
              <p className=" font-ClashDisplay font-medium text-lg !leading-[123%] text-[#0C0800] mt-3">
                {value.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeauters;
