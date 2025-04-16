"use client";

import { FC, useEffect, useMemo, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();

  const variantImages = useMemo(
    () => ({
      home: ["/assets/companies/turkish-airlines.svg"],
      hotel: ["/assets/companies/hotelscom.svg"],
      flight: [
        "/assets/companies/flight1.svg",
        "/assets/companies/flight2.svg",
      ],
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
    }),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    const paddedImages = Array.from({ length: windowWidth < 768 ? 8 : 14 }).map(
      (_, index) =>
        activeImages[index % activeImages.length] ||
        "/assets/companies/default.svg"
    );
    setImages(paddedImages);
  }, [activeVariant, variantImages, windowWidth]);

  const isMobile = windowWidth < 768;
  const imageWidth = isMobile ? 120 : 190;
  const imageHeight = isMobile ? 60 : 100;
  const sliderWidth = isMobile ? "130px" : "200px";
  const sliderSpeed = isMobile ? 60 : 40;

  return (
    <section className="overflow-hidden flex flex-col items-center py-10 md:py-[70px] gap-4 md:gap-6 px-4">
      <Heading6 className="text-[#ADADAD] text-sm md:text-base">
        Trusted by companies
      </Heading6>
      <div className="w-full max-w-[1200px]">
        <Slider
          width={sliderWidth}
          duration={sliderSpeed}
          pauseOnHover={!isMobile}
          blurBorders={true}
          blurBorderColor={"#fff"}
        >
          {images.map((image, index) => (
            <Slider.Slide key={index}>
              <div className="py-2 md:py-[14px] px-2 md:px-[16px] bg-[#F9F9F9] rounded-lg flex items-center justify-center h-full">
                <Image
                  src={image}
                  alt={`company-logo-${index}`}
                  width={imageWidth}
                  height={imageHeight}
                  className="object-contain"
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                  }}
                />
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedCompanies;
