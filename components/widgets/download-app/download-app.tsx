"use client";

import { Body2, Container, Heading2 } from "@/components/common";
import Image from "next/image";
import { useEffect, useState } from "react";

const DownloadApp = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <section className="py-[30px] md:py-[60px]">
      <Container>
        <div
          className="relative flex items-center justify-center bg-cover bg-center rounded-xl pt-[30px] md:pt-[56px] px-[20px] md:px-[60px] pb-[30px] md:pb-0"
          style={{
            backgroundImage: "url('/assets/backgrounds/custom-tour.jpg')",
            minHeight: isMobile ? "400px" : "auto",
          }}
        >
          <div className="absolute inset-0 bg-[#222222]/60 rounded-xl"></div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 z-[2]">
            {/* Text and Download Buttons */}
            <div className="relative flex flex-col items-start justify-center gap-2 w-full md:w-auto">
              <Heading2 className="w-full md:w-[700px] text-start text-2xl md:text-4xl lg:text-5xl">
                Your Travel Companion Anywhere
              </Heading2>
              <Body2 className="w-full md:w-[600px] text-start mb-4 text-sm md:text-base">
                Plan, book, and manage your trips on the go. Download our app
                for exclusive deals, personalized recommendations, and seamless
                travel experiences—right at your fingertips
              </Body2>
              <div className="flex items-center gap-2 flex-wrap">
                <a href="#" className="block">
                  <Image
                    src={"/assets/companies/playmarket.svg"}
                    alt="playmarket"
                    width={isMobile ? 110 : 135}
                    height={isMobile ? 32 : 40}
                    className="h-auto"
                  />
                </a>
                <a href="#" className="block">
                  <Image
                    src={"/assets/companies/appstore.svg"}
                    alt="appstore"
                    width={isMobile ? 100 : 120}
                    height={isMobile ? 32 : 40}
                    className="h-auto"
                  />
                </a>
              </div>
            </div>

            {/* Phone Mockups - Hidden on mobile */}
            {!isMobile && (
              <div className="relative z-[3]">
                <svg
                  width={isTablet ? "354" : "454"}
                  height={isTablet ? "275" : "355"}
                  viewBox="0 0 454 355"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <rect
                    x="160"
                    y="0.371582"
                    width="294"
                    height="670"
                    rx="12"
                    fill="#F9F9F9"
                  />
                  <rect
                    y="94.3716"
                    width="294"
                    height="670"
                    rx="12"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadApp;
