"use client";

import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { Heading6 } from "@/components/common";

const TrustedCompanies = () => {
  const imageWidth = 190;
  const imageHeight = 100;

  return (
    <section className="overflow-hidden flex flex-col items-center py-[70px] gap-6">
      <Heading6 className="text-[#ADADAD]">Trusted by companies</Heading6>
      <Slider
        width="200px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor={"#fff"}
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <Slider.Slide key={index}>
            <Image
              src="/assets/companies/turkish-airlines.svg"
              alt="turkish"
              width={imageWidth}
              height={imageHeight}
              className="py-[14px] px-[16px] bg-[#F9F9F9] rounded-lg"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  );
};

export default TrustedCompanies;
