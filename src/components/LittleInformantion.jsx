import React from "react";
import Image from "next/image";

const LittleInformantion = () => {
  return (
    <div id="Menu">
      <div className="container max-w-[1152px] mx-auto px-3 md:overflow-visible overflow-hidden">
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 px-3 lg:px-[-5%] relative flex justify-center">
            <Image
              src="/assets/images/little-information/chef-img.webp"
              className="xl:ml-[-25px] relative z-10 flex justify-center lg:max-w-[610px] max-w-[500px]"
              width={631.89}
              height={631.89}
              alt="chef-img"
            />
            <Image
              src="/assets/images/little-information/yellow-bg.webp"
              className="absolute lg:left-[-28%] sm:left-[-45%] left-[-2%] top-0 max-w-[670px] max-h-[700px]"
              width={800}
              height={718}
              alt="yellow-bg"
            />
          </div>
          <div className="lg:w-1/2 px-3 lg:px-0 relative">
            <h3 className="font-ClashDisplay text-llg sm:text-xl md:text-2xl leading-[123%] lg:max-w-full mx-auto md:max-w-[500px] max-w-[400px] font-semibold text-Rich-Black text-center lg:text-start lg:leading-[59.04px] xl:pr-[40px]">
              A Little Information For Our Guest
            </h3>
            <p className="text-sm font-normal mt-2 font-Syne text-Rich-Black opacity-70 text-center lg:text-start">
              Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec
              dictum accumsan odio tellus integer scelerisque. Dictum commodo
              pharetra sit odio nulla aliquam sit mor diio tellus integer
              scelerisque.
            </p>
            <div className="mt-6 lg:mt-3 xl:mt-[40px] sm:flex lg:flex-col xl:flex-row gap-[24px] justify-center  lg:justify-start">
              <div className="py-[14.2px] px-[14px] rounded-[8px] shadow-[0px_3px_0px_0px_#000000] border-[1px] border-[#000000] mx-auto sm:mx-0 max-w-[267px] flex items-center">
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
                  <p className="text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap font-Syne  font-semibold">
                    Happy Customer
                  </p>
                </div>
              </div>
              <div className="py-[14.2px] px-[24px] mt-4 sm:mt-0 rounded-[8px] shadow-[0px_3px_0px_0px_#000000] border-[1px] border-[#000000] mx-auto sm:mx-0 max-w-[267px] flex items-center">
                <Image
                  src="/assets/images/little-information/trophy-img.webp"
                  className=""
                  width={80}
                  height={80}
                  alt="trophy"
                />
                <div className="ml-[19px] pr-[35.5px]">
                  <h4 className="text-Rich-Black font-ClashDisplay text-xl font-semibold">
                    10K
                  </h4>
                  <p className="text-Rich-Black text-sm opacity-70 mt-[2px] whitespace-nowrap  font-Syne font-semibold">
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
