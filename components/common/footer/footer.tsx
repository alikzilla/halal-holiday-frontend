"use client";

import {
  Body1,
  Container,
  Heading2,
  Heading4,
  Heading6,
  Title1,
} from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";

const Footer = () => {
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
    <footer className="bg-[var(--primary)] py-[60px] md:py-[80px]">
      <Container>
        <section className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6">
          {/* Left Column - Logo, Tagline, Social */}
          <div className="flex flex-col items-start justify-start gap-6 md:gap-8 w-full md:w-auto">
            <Image
              src={logo}
              alt="logo"
              width={isMobile ? 140 : 175}
              height={25}
            />

            <div className="flex flex-col items-start gap-2">
              <Heading2 className="max-w-[400px] text-2xl md:text-3xl lg:text-4xl">
                Explore the World, One Journey at a Time.
              </Heading2>
              <Body1 className="text-[#769190] max-w-[400px]">
                Would you like a different tone or focus, such as adventure,
                relaxation, or cultural experiences?
              </Body1>
            </div>

            <div className="flex items-center justify-start gap-2">
              <Link
                href={"#"}
                target="_blank"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#214D4C] border border-[1px] border-[#2D5554] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]"
              >
                <Image
                  src={"/assets/icons/instagram.svg"}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                href={"#"}
                target="_blank"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#214D4C] border border-[1px] border-[#2D5554] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]"
              >
                <Image
                  src={"/assets/icons/facebook.svg"}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Navigation and Newsletter */}
          <div className="flex flex-col items-start gap-8 md:gap-[72px] w-full md:w-auto">
            {/* Navigation Links */}
            <nav className="grid grid-cols-2 md:flex items-start justify-start gap-6 md:gap-[60px] w-full">
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <Heading4 className="text-[#fff] cursor-pointer text-base md:text-lg">
                  About Us
                </Heading4>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Our Story
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Mission & Vision
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Careers
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Blog
                </Title1>
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <Heading4 className="text-[#fff] cursor-pointer text-base md:text-lg">
                  Customer Support
                </Heading4>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  FAQs
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Contact Us
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Travel Insurance
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Cancellation Policy
                </Title1>
              </div>
              {!isMobile && (
                <div className="flex flex-col items-start gap-3 md:gap-4">
                  <Heading4 className="text-[#fff] cursor-pointer text-base md:text-lg">
                    Legal
                  </Heading4>
                  <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                    Terms & Conditions
                  </Title1>
                  <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                    Privacy Policy
                  </Title1>
                  <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                    Cookie Policy
                  </Title1>
                </div>
              )}
            </nav>

            {/* On mobile, show Legal section below other links */}
            {isMobile && (
              <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
                <Heading4 className="text-[#fff] cursor-pointer text-base md:text-lg">
                  Legal
                </Heading4>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Terms & Conditions
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Privacy Policy
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white text-sm md:text-base">
                  Cookie Policy
                </Title1>
              </div>
            )}

            {/* Newsletter */}
            <div className="flex flex-col items-start gap-2 w-full">
              <Heading6>Subscribe our newsletter</Heading6>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full py-3 pl-4 pr-[150px] md:pr-[300px] border border-[#2D5554] rounded-[12px] bg-transparent text-white focus:outline-none focus:border-[#214D4C]"
                />
                <Button
                  type="tertiary"
                  className="absolute right-1 top-1 bottom-1 px-4 md:px-6 text-sm md:text-base"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
