"use client";

import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full bg-gray1 flex justify-center md:gap-20 gap-4 items-end p-4 md:mt-2 lg:mt-28 max-w-[1920px]">
      <div className="grid grid-cols-2 md:pb-8 pb-4">
        <div className="justify-self-start">
          <p className="text-yellow1 text-[18px] xl:text-[47px] font-montserrat font-medium leading-none">
            En está casa
          </p>
          <p className="text-yellow1 text-[24px] xl:text-[65px] font-montserrat font-medium leading-none">
            hacemos
          </p>
        </div>
        <Image
          width={100}
          height={2}
          src="/images/common/decorationBaner.svg"
          alt="decoration banner"
          className="justify-self-end h-full xl:w-[100px] w-[30px]"
        />
        <div className="col-span-2">
          <p className="text-yellow1 text-[31px] xl:text-[80px] font-montserrat font-black leading-none">
            INGENIERÍA DE{" "}
          </p>
          <p className="text-yellow1 text-[23px] xl:text-[57px] font-montserrat font-black leading-none">
            MARKETING DIGITAL
          </p>
        </div>
      </div>
      <Image
        width={130}
        height={0}
        src="/images/our-process-catalog/banner.png"
        alt="person banner"
        className="hidden md:block md:mb-0 xl:w-[300px]"
      />
    </div>
  );
};
