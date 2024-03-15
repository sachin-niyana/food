import Image from "next/image";
import React from "react";
import { Bgelipse } from "./common/Icon";
import { ourFeatures } from "./common/Helper";

const OurFeauters = () => {
  return (
    <div
      className="container max-w-[1152px] mx-auto px-3 py-[130px]"
      id="Services"
    >
      <div className="flex justify-center flex-col items-center text-center">
        <h2
          className="font-semibold text-llg sm:text-2xl text-black font-ClashDisplay !leading-[123%]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          Our Features
        </h2>
        <p
          className="font-Syne font-normal text-xsm md:text-sm !leading-[150%] text-black opacity-70 sm:max-w-[522px] max-w-[300px] mt-0 md:mt-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
          accumsan odio tellus integer scelerisque.
        </p>
      </div>
      <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-6 mt-5 md:mt-10 justify-center items-center">
        {ourFeatures.map((value, index) => (
          <div
            className="flex justify-center w-full max-w-[364px]"
            key={index}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <div className="bg-light-white border border-black cursor-pointer w-full max-w-[400px] rounded-2xl flex-col">
              <div className="border-b-4 border-Rich-Black py-7 rounded-xl top-[1px] border-opacity-0 hover:border-opacity-100 duration-700 ease-in-out">
                <div className="relative flex justify-center">
                  <Bgelipse />
                  <Image
                    src={value.image}
                    width={100}
                    height={100}
                    className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
                    alt="Hand"
                  />
                </div>
                <p className=" font-ClashDisplay text-center font-medium text-lg !leading-[123%] text-Rich-Black mt-3">
                  {value.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeauters;
