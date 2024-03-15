import React from "react";
import Image from "next/image";

const LittleInformantion = () => {
  return (
    <div id="Menu">
      <div className="container max-w-[1152px] mx-auto px-3 md:overflow-visible overflow-hidden">
        <div className="flex flex-wrap items-center justify-center">
          <div className=" lg:w-1/2 px-3 lg:px-[-5%] relative flex justify-center">
            <Image
              src="/assets/images/little-information/chef-img.webp"
              className="xl:ml-[-98px] relative z-10 flex justify-center md:max-w-[631.89px] lg:max-w-[500px] xl:max-w-[631.89px]"
              width={631.89}
              height={631.89}
              alt="chef-img"
            />
            <Image
              src="/assets/images/little-information/yellow-bg.webp"
              className="absolute lg:left-[-28%] sm:left-[-45%] left-[-2%] hidden md:block top-0 md:max-h-[530px]  max-w-[670px] xl:max-h-[700px]"
              width={800}
              height={718}
              alt="yellow-bg"
            />
          </div>
          <div className=" lg:w-1/2 px-3 md:mt-[60px] lg:px-0 relative">
            <h3 className="font-ClashDisplay text-[30px] sm:text-xl md:text-2xl leading-[123%] lg:max-w-full mx-auto md:max-w-[500px] max-w-[400px] font-semibold text-Rich-Black text-center lg:text-start lg:leading-[59.04px] xl:pr-[40px]">
              A Little Information For Our Guest
            </h3>
            <p className="text-sm font-normal mt-2 font-Syne md:max-w-[552px] text-Rich-Black opacity-70 text-center lg:text-start">
              Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
              dictum accumsan odio tellus integer scelerisque. Dictum commodo
              pharetra sit odio nulla aliquam sit mor diio tellus integer
              scelerisque.
            </p>
            <div className="mt-6 mb-3 lg:mt-3 md:mt-[40px] xl:mt-[40px] sm:flex  xl:flex-row gap-[24px] justify-center  lg:justify-start">
              <div className="py-[14.2px] px-6 md:px-[24px] lg:px-2 xl:px-[24px] transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-[8px] shadow-[0px_3px_0px_0px_#000000] border-[1px] border-[#000000] mx-auto sm:mx-0 max-w-[267px]  xl:max-w-[267px] flex items-center">
                <Image
                  src="/assets/images/little-information/hand-stars.webp"
                  className=""
                  width={80}
                  height={80}
                  alt="hand"
                />
                <div className="ml-[19px]">
                  <h4 className="text-Rich-Black text-xl font-semibold font-ClashDisplay">
                    15K
                  </h4>
                  <p className="text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap font-Syne  font-normal">
                    Happy Customer
                  </p>
                </div>
              </div>
              <div className="py-[14.2px] px-6 md:px-[24px] lg:px-2 xl:px-[24px] transition-all duration-300 hover:scale-[1.02] cursor-pointer mt-4 sm:mt-0 rounded-[8px] shadow-[0px_3px_0px_0px_#000000] border-[1px] border-[#000000] mx-auto sm:mx-0 max-w-[267px]  xl:max-w-[267px] flex items-center">
                <Image
                  src="/assets/images/little-information/trophy-img.webp"
                  className=""
                  width={80}
                  height={80}
                  alt="trophy"
                />
                <div className="ml-[27px] pr-[35.5px]">
                  <h4 className="text-Rich-Black font-ClashDisplay text-xl font-semibold">
                    10+
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
