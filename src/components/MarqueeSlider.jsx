import Image from "next/image";
import { ourChef } from "./Helper";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
    return (
        <div>
            <div className='container max-w-[1152px] mx-auto'>
                <Marquee
                    speed={100}
                    className="md:mt-10 md:mb-[50px] w-full"
                >
                    {ourChef.map((value, index) => (
                        <div className="w-full flex  justify-center" key={index}>
                            <div className="rounded-2xl me-6 lg:p-6 p-5 border max-w-[334px] md:max-w-[310px] group bg-white  border-black">
                                <div className="max-w-[310px] max-h-[310px] overflow-hidden rounded-2xl">
                                    <Image
                                        className="rounded-2xl group-hover:scale-[1.04]  duration-300"
                                        width={316}
                                        height={315}
                                        src={value.image}
                                        alt="john-doe-chef-master"
                                    />
                                </div>
                                <div className="flex justify-between lg:pr-4 items-center pt-[18px] ">
                                    <div>
                                        <h3 className="lg:text-lg md:text-md text-sm font-medium font-ClashDisplay text-Rich-Black">
                                            {value.title}
                                        </h3>
                                        <p className="text-Rich-Black opacity-70 font-Syne font-normal text-sm">
                                            {value.master}
                                        </p>
                                    </div>
                                    <Link
                                        className=""
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                    >
                                        {value.icon}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default MarqueeSlider