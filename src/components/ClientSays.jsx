"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RattingStars, SliderNextArrow, SliderPrevArrow } from "./Icon";

const ClientSays = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute top-[108%] right-[53%] md:top-[45%] md:left-[5%] lg:top-[108%] lg:left-[43%] xl:top-[45%] xl:left-[-4.8%] z-10"
      onClick={onClick}
    >
      <SliderPrevArrow />
    </button>
  );
  // ================== Slider Left Arrow ======================= //
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute top-[108%] left-[53%] md:top-[45%] md:right-[5%] lg:top-[108%] lg:right-[43%] xl:top-[45%] xl:right-[-4.8%] transform rotate-[180deg] z-10"
      onClick={onClick}
    >
      {" "}
      <SliderNextArrow />
    </button>
  );
  // ================== Slider Right Arrow ======================= //

  // ================== Slider Settings =========================== //
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-redchilli bg-cover bg-no-repeat bg-center lg:mt-28 mt-16 overflow-hidden">
      <div className="container max-w-[1152px] mx-auto pb-[180px] sm:pb-[150px] px-3 py-[150px]">
        <div
          className="flex flex-col justify-center text-center items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <h2
            className="font-ClashDisplay text-[30px] md:text-2xl leading-[40px] font-semibold text-white text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            What’s Our Client Say
          </h2>
          <p className="text-sm font-Syne text-cnter md:max-w-[522px] text-white opacity-70 mt-[8px] px-2 leading-[150%] xl:max-w-[532px] ">
            Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
            accumsan odio tellus integer scelerisque.
          </p>
        </div>
        <Slider
          {...settings}
          className="flex justify-center items-center text-center mt-5 lg:mt-[63px]"
        >
          <div
            className=" w-[50%] px-3 lg:pe-3"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <div className="max-w-[558px] backdrop-blur-[2px] mx-auto bg-slider bg-no-repeat bg-cover bg-center px-[19px] sm:px-[35px] lg:px-[30px] border-[1px] hover:border-[#FFE14E] cursor-pointer transition-all ease-in-out duration-300 border-transparent rounded-[16px]  py-[25px]">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/images/client-says/kristin-ellips.png"
                  className=""
                  width={103.11}
                  height={103.11}
                  alt="kristin"
                ></Image>
              </div>
              <h3 className="font-ClashDisplay text-center text-md text-white mt-[14px]">
                Kristin Watson
              </h3>
              <p className="text-sm font-Syne font-normal text-white opacity-70 mt-2 text-center leading-[150%]">
                Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
                dictum accumsan odio tellus integer scelerisque. Dictum commodo
                pharetra sit odio nulla aliquam sit morbi. Nec dictum accumsan
                odio tellus integer scelerismmodo pharetra sit odio.
              </p>
              <div className="mt-[11px] flex justify-center">
                {" "}
                <RattingStars />{" "}
              </div>
            </div>
          </div>
          <div
            className=" w-[50%] px-3 lg:ps-3"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <div className="max-w-[558px] backdrop-blur-[2px] mx-auto bg-slider bg-no-repeat bg-cover bg-center px-[19px] sm:px-[35px] lg:px-[30px] border-[1px] hover:border-[#FFE14E] cursor-pointer transition-all ease-in-out duration-300 border-transparent rounded-[16px]  py-[25px]">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/images/client-says/darrell-ellips.png"
                  className=""
                  width={103.11}
                  height={103.11}
                  alt="kristin"
                ></Image>
              </div>
              <h3 className="font-ClashDisplay text-center text-md text-white mt-[14px]">
                Darrell Steward
              </h3>
              <p className="text-sm font-Syne font-normal text-white opacity-70 mt-2 text-center leading-[150%]">
                Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
                dictum accumsan odio tellus integer scelerisque. Dictum commodo
                pharetra sit odio nulla aliquam sit morbi. Nec dictum accumsan
                odio tellus integer scelerismmodo pharetra sit odio.
              </p>
              <div className="mt-[11px] flex justify-center">
                {" "}
                <RattingStars />{" "}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientSays;
