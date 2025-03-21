"use client";

import { FC, useEffect, useState } from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { Heading6 } from "@/components/common";
import { usePathname } from "next/navigation";

interface Variant {
  variant:
    | "home"
    | "hotel"
    | "flight"
    | "rentCar"
    | "tour"
    | "transfer"
    | "activity";
}

const TrustedCompanies: FC<Variant> = () => {
  const [activeVariant, setActiveVariant] =
    useState<Variant["variant"]>("home");
  const [images, setImages] = useState<string[]>([]);
  const pathname = usePathname();

  const variantImages = {
    home: ["/assets/companies/turkish-airlines.svg"],
    hotel: ["/assets/companies/hotelscom.svg"],
    flight: ["/assets/companies/flight1.svg", "/assets/companies/flight2.svg"],
    rentCar: [
      "/assets/companies/rent-car1.svg",
      "/assets/companies/rent-car2.svg",
    ],
    tour: ["/assets/companies/tour1.svg", "/assets/companies/tour2.svg"],
    transfer: [
      "/assets/companies/transfer1.svg",
      "/assets/companies/transfer2.svg",
    ],
    activity: [
      "/assets/companies/activity1.svg",
      "/assets/companies/activity2.svg",
    ],
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveVariant("home");
        break;
      case "/hotel":
        setActiveVariant("hotel");
        break;
      case "/flight":
        setActiveVariant("flight");
        break;
      case "/rent-car":
        setActiveVariant("rentCar");
        break;
      case "/tour":
        setActiveVariant("tour");
        break;
      case "/transfer":
        setActiveVariant("transfer");
        break;
      case "/activity":
        setActiveVariant("activity");
        break;
      default:
        setActiveVariant("home");
    }
  }, [pathname]);

  useEffect(() => {
    const activeImages = variantImages[activeVariant] || [];

    const paddedImages = Array.from({ length: 14 }).map(
      (_, index) =>
        activeImages[index % activeImages.length] ||
        "/assets/companies/default.svg"
    );

    setImages(paddedImages);
  }, [activeVariant]);

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
        {images.map((image, index) => (
          <Slider.Slide key={index}>
            <Image
              src={image}
              alt={`company-logo-${index}`}
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
