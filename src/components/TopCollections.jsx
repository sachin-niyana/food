import Image from "next/image";
import { topCollection } from "./common/Helper";
import ShowMoreBtn from "./ShowMoreBtn";

const TopCollections = () => {
  return (
    <div
      className="container max-w-[1152px] mx-auto sm:px-6 px-5 pb-[130px] pt-[130px]"
      id="Offers"
    >
      <div className="flex justify-center flex-col items-center">
        <h2
          className="font-ClashDisplay text-xl md:text-2xl leading-[125%] font-semibold text-Rich-Black text-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          Top Collections
        </h2>
        <p
          className="text-sm text-center text-[#524f48] font-Syne px-3 opacity-70 mt-[8px] leading-[150%] sm:max-w-[532px] "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          Dictum commodo pharetra sit odio nulla aliquam sit morbi. Nec dictum
          accumsan odio tellus integer scelerisque.
        </p>
      </div>

      {/* lg screen burger cards */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap lg:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
          {topCollection.map((value, index) => (
            <div
              className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
              key={index}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                  <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                    <span className="absolute right-[12px] top-[12px]">
                      {" "}
                      {value.icon}{" "}
                    </span>
                    <Image
                      className="group-hover:scale-110 transition-all ease-in-out duration-300"
                      src={value.image}
                      width={284}
                      height={189}
                      alt="burger"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="mt-[20px]">
                      <h2 className="font-ClashDisplay text-md lg:text-lg leading-[123%] font-medium text-Rich-Black">
                        {value.title}
                      </h2>
                      <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                        {value.burger}
                      </p>
                    </div>
                    <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                      {value.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* small screen cards show  1*/}
      <div className="sm:hidden">
        <div className="flex flex-wrap lg:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
          {topCollection.slice(0, 1).map((value, index) => (
            <div
              className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
              key={index}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                  <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                    <span className="absolute right-[12px] top-[12px]">
                      {" "}
                      {value.icon}{" "}
                    </span>
                    <Image
                      className="group-hover:scale-110 transition-all ease-in-out duration-300"
                      src={value.image}
                      width={284}
                      height={189}
                      alt="burger"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="mt-[20px]">
                      <h2 className="font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black">
                        {value.title}
                      </h2>
                      <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                        {value.burger}
                      </p>
                    </div>
                    <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                      {value.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block md:hidden">
        <div className="flex flex-wrap sm:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
          {topCollection.slice(0, 2).map((value, index) => (
            <div
              className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
              key={index}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                  <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                    <span className="absolute right-[12px] top-[12px]">
                      {" "}
                      {value.icon}{" "}
                    </span>
                    <Image
                      className="group-hover:scale-110 transition-all ease-in-out duration-300"
                      src={value.image}
                      width={284}
                      height={189}
                      alt="burger"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="mt-[20px]">
                      <h2 className="font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black">
                        {value.title}
                      </h2>
                      <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                        {value.burger}
                      </p>
                    </div>
                    <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                      {value.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Md screen cards shoew  4*/}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-wrap lg:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
          {topCollection.slice(0, 4).map((value, index) => (
            <div
              className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
              key={index}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                  <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                    <span className="absolute right-[12px] top-[12px]">
                      {" "}
                      {value.icon}{" "}
                    </span>
                    <Image
                      className="group-hover:scale-110 transition-all ease-in-out duration-300"
                      src={value.image}
                      width={284}
                      height={189}
                      alt="burger"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="mt-[20px]">
                      <h2 className="font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black">
                        {value.title}
                      </h2>
                      <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                        {value.burger}
                      </p>
                    </div>
                    <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                      {value.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* show button small screen */}
      <div className="justify-center items-center     md:mb-10 sm:hidden  lg:mt-0">
        <ShowMoreBtn
          data={
            <div className="lg:hidden mt-[-22px] px-3">
              <div className="flex flex-wrap lg:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
                {topCollection.slice(0, 5).map((value, index) => (
                  <div
                    className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
                    key={index}
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                      <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                        <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                          <span className="absolute right-[12px] top-[12px]">
                            {" "}
                            {value.icon}{" "}
                          </span>
                          <Image
                            className="group-hover:scale-110 transition-all ease-in-out duration-300"
                            src={value.image}
                            width={284}
                            height={189}
                            alt="burger"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="mt-[20px]">
                            <h2 className="font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black">
                              {value.title}
                            </h2>
                            <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                              {value.burger}
                            </p>
                          </div>
                          <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                            {value.price}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>
      <div className="justify-center items-center   md:mb-10 hidden sm:block md:hidden  lg:mt-0">
        <ShowMoreBtn
          data={
            <div className="lg:hidden mt-[-22px] px-3">
              <div className="flex flex-wrap sm:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
                {topCollection.slice(0, 4).map((value, index) => (
                  <div
                    className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
                    key={index}
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                      <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                        <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                          <span className="absolute right-[12px] top-[12px]">
                            {" "}
                            {value.icon}{" "}
                          </span>
                          <Image
                            className="group-hover:scale-110 transition-all ease-in-out duration-300"
                            src={value.image}
                            width={284}
                            height={189}
                            alt="burger"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="mt-[20px]">
                            <h2 className="font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black">
                              {value.title}
                            </h2>
                            <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                              {value.burger}
                            </p>
                          </div>
                          <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                            {value.price}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>

      {/* show button md screen */}
      <div className="justify-center items-center   hidden md:block lg:hidden  lg:mt-0">
        <ShowMoreBtn
          data={
            <div className="lg:hidden mt-[-16px]">
              <div className="flex flex-wrap lg:grid max-[576px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 mt-[40px] justify-center">
                {topCollection.slice(0, 2).map((value, index) => (
                  <div
                    className="flex justify-center w-full lg:max-w-[364px] max-w-[340px] group"
                    key={index}
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <div className="border-[1px] mx-auto like_icon bg-white max-w-[360px] border-black rounded-[16px]">
                      <div className="border-b-[3px] border-Rich-Black px-[24px] pt-[24px] pb-[20px] w-full rounded-xl border-opacity-0 hover:border-opacity-100 duration-300 ease-in-out">
                        <div className="border-[1px] bg-white cursor-pointer sm:pt-[31px] pt-7 p-4 border-black rounded-[16px] relative">
                          <span className="absolute right-[12px] top-[12px]">
                            {" "}
                            {value.icon}{" "}
                          </span>
                          <Image
                            className="group-hover:scale-110 transition-all ease-in-out duration-300"
                            src={value.image}
                            width={284}
                            height={189}
                            alt="burger"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="mt-[20px]">
                            <h2 className="font-ClashDisplay text-md lg:text-lg font-medium text-Rich-Black">
                              {value.title}
                            </h2>
                            <p className="text-sm text-Rich-Black font-Syne opacity-70 mt-[2px]">
                              {value.burger}
                            </p>
                          </div>
                          <h3 className="font-ClashDisplay text-md lg:text-lg font-semibold mt-5 lg:me-5 text-Rich-Black">
                            {value.price}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TopCollections;
