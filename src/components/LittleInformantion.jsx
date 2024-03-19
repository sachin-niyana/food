"usr client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LittleInformantion = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
  });

  // useEffect hook to increment counters over time until a maximum value is reached
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        counter1: Math.min(prevCounters.counter1 + 1, 15),
        counter2: Math.min(prevCounters.counter2 + 1, 10),
      }));
    }, 2);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="Menu">
      <div className="container max-w-[1152px] mx-auto sm:px-6 px-5 md:overflow-visible overflow-hidden">
        <div className="flex flex-wrap items-center justify-center">
          <div className=" lg:w-1/2 px-3 lg:px-[-5%] relative flex justify-center">
            <Image
              src="/assets/images/little-information/chef-img.webp"
              className="xl:ml-[-98px] relative z-10 flex justify-center md:max-w-[631.89px] lg:max-w-[500px] xl:max-w-[631.89px]"
              width={631.89}
              height={631.89}
              alt="chef-img"
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="800"
            />
            <Image
              src="/assets/images/little-information/yellow-bg.webp"
              className="absolute lg:left-[-28%] sm:left-[-38%] left-[-2%] hidden md:block top-0 md:max-h-[660px] md:max-w-[850px] xl:max-h-[700px]"
              width={800}
              height={718}
              alt="yellow-bg"
            />
          </div>
          <div className=" lg:w-1/2 px-3 md:mt-[60px] lg:px-0 relative">
            <h3
              className="font-ClashDisplay text-[30px] sm:text-xl md:text-2xl leading-[123%] lg:max-w-full mx-auto md:max-w-[500px] max-w-[400px] font-semibold text-Rich-Black text-center lg:text-start lg:leading-[59.04px] xl:pr-[40px]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              A Little Information For Our Guest
            </h3>
            <p
              className="text-sm font-normal mt-2 font-Syne md:max-w-[552px] text-[#524f48] opacity-70 text-center lg:text-start"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
              dictum accumsan odio tellus integer scelerisque. Dictum commodo
              pharetra sit odio nulla aliquam sit mor diio tellus integer
              scelerisque.
            </p>
            <div
              className="mb-3 lg:mt-3 mt-[40px] xl:mt-[40px] sm:flex  xl:flex-row gap-[24px] justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="py-[14.2px] px-6 md:px-[24px] lg:px-2 xl:px-[24px] transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-[8px] shadow-cardShadow border-[1px] border-black mx-auto sm:mx-0 max-w-[267px]  xl:max-w-[267px] flex items-center">
                <Image
                  src="/assets/images/little-information/svg/hand-stars.svg"
                  className=""
                  width={80}
                  height={80}
                  alt="hand"
                />
                <div className="ml-[19px]">
                  <h4 className="text-Rich-Black text-xl font-semibold font-ClashDisplay">
                    {counters.counter1}K
                  </h4>
                  <p className="text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap font-Syne  font-normal">
                    Happy Customer
                  </p>
                </div>
              </div>
              <div className="py-[14.2px] px-6 md:px-[24px] lg:px-2 xl:px-[24px] transition-all duration-300 hover:scale-[1.02] cursor-pointer mt-6 sm:mt-0 rounded-[8px] shadow-cardShadow border-[1px] border-black mx-auto sm:mx-0 max-w-[267px]  xl:max-w-[267px] flex items-center">
                <Image
                  src="/assets/images/little-information/svg/trophy.svg"
                  className=""
                  width={80}
                  height={80}
                  alt="trophy"
                />
                <div className="ml-[27px] pr-[35.5px]">
                  <h4 className="text-Rich-Black font-ClashDisplay text-xl font-semibold">
                    {counters.counter2}+
                  </h4>
                  <p className="text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap  font-Syne font-normal">
                    Award Win
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleInformantion;
