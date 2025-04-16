"use client";

import { Body2, Container, Heading2, Heading6 } from "@/components/common";
import { Button } from "@/components/ui";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpecialOffers = () => {
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
    <section className="w-full py-[30px] md:py-[60px]">
      <Container>
        <section className="w-full flex flex-col gap-6 md:gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-start gap-2 md:gap-[6px] px-4 md:px-0">
            <Heading2 className="text-[#266462] inline-flex gap-2 md:gap-[14px] items-center text-2xl md:text-3xl lg:text-4xl">
              Special offers
              <Image
                src={"/assets/icons/rhombs.svg"}
                alt="rhombs"
                width={isMobile ? 30 : 40}
                height={isMobile ? 30 : 40}
              />
            </Heading2>
            <Body2 className="text-[#ADADAD] text-sm md:text-base">
              Find your next adventure in our curated travel picks
            </Body2>
          </div>

          {/* Offers Section */}
          <div className="w-full flex flex-col gap-4 md:gap-6">
            {/* Main Offers */}
            <div className="w-full flex flex-col md:flex-row items-stretch gap-4">
              {/* Offer 1 */}
              <div
                className="relative z-1 w-full h-full flex flex-col items-start gap-6 md:gap-[130px] bg-cover bg-center rounded-xl px-4 md:px-[40px] py-6 md:py-[30px] min-h-[300px] md:min-h-[400px]"
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/ffaa/d961/f4ec11234581cced7e9b604eed027e17?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dH2XGYNoASAQWw2kWoj4v3ZwGnSlxFBLRbeRS73EG1wCUoiZB3mlyba9veBR4WntNP9DmUZkF~ISyYb~euWj-NaXDAu58A1JvfeCasT~FN9QvJ1arCTGRBKXCBis-uPlflhuxbcEgIFlKcx2AmO3JTeT8AW~nVfghUbabJCDD4Gk34nQjD1untRzQZYlP8sKVXbpWnoXCa~B~bu~L9~jE60HytYcWBdk7cUCf0Z86Q1CmfA7pKZynGokCAjzUQ84SwvmyhKapJHPeSanwhDTd4LW0phPHeYQ1ddUyiJjIVsDFMIfQZzgHeUxWtfq~N~O2lYYuXqQVxVr1ahRlUvXWw__')`,
                }}
              >
                <div className="absolute z-[-1] inset-0 bg-[#222222]/60 rounded-xl"></div>

                <Heading2 className="w-full md:w-[300px] text-xl md:text-2xl lg:text-3xl">
                  Stay Longer, Save More
                </Heading2>

                <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
                  <Body2 className="w-full md:w-[330px] text-sm md:text-base">
                    Enjoy an extended vacation with our exclusive deal! Book a
                    stay of 5 nights or more and get up to 20% off your total
                    booking. Experience luxury and savings together!
                  </Body2>
                  <Button type="tertiary" className="w-full md:w-auto">
                    See offer
                  </Button>
                </div>
              </div>

              {/* Offer 2 */}
              <div
                className="relative z-1 w-full h-full flex flex-col items-start gap-6 md:gap-[130px] bg-cover bg-center rounded-xl px-4 md:px-[40px] py-6 md:py-[30px] min-h-[300px] md:min-h-[400px]"
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5443/0e41/e092ceb7443d3c8ecbc0dacc05386219?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cz55ItKyS8YLqVPYRo6o3ZwKbemR9NwxBCKCXeXakby28q8uPiMCxgzuv8y3PIc9rdCfNQ86u6kJjkHoPyceD5RIb33iHT5cQTgmwo8bHRYtcYZ8Cv4QU7jCXAbHKgVTlMXHJX7T7pcF-3VK-Vra43xBVvYYAvQMcWtJtQ-0X~nk-9AliWMFSdiZCELPG9Qeq7Bq2JEeT~sz~VbjVCnCBIezqbL-y2uleVjIo7tw5Y2Y73n~JVZbS3XV4zbB99ZBQaRBErhDa7XfrXUuBF~JnhWKWB-UMcEdEZVwbEfNKey2XmWfvIs6EMl62AZdJCBLu5dlCj9ZnUWQEywzsQvexQ__')`,
                }}
              >
                <div className="absolute z-[-1] inset-0 bg-[#222222]/60 rounded-xl"></div>

                <Heading2 className="w-full md:w-[300px] text-xl md:text-2xl lg:text-3xl">
                  Free Breakfast & Transfer
                </Heading2>

                <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
                  <Body2 className="w-full md:w-[330px] text-sm md:text-base">
                    Start your mornings right! Book now and enjoy a delicious
                    complimentary breakfast along with a free airport transfer
                    for a hassle-free arrival and departure.
                  </Body2>
                  <Button type="white" className="w-full md:w-auto">
                    See offer
                  </Button>
                </div>
              </div>
            </div>

            {/* Secondary Offers */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="inline-flex items-center justify-center gap-3 bg-[#F9F9F9] rounded-xl p-4 md:p-6">
                <Image
                  src={"/assets/icons/star-fall-green.svg"}
                  alt="star-fall"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                <Heading6 className="font-semibold text-[#266462] text-sm md:text-base">
                  Weekend Getaways: Up to 20% Off!
                </Heading6>
              </div>
              <div className="inline-flex items-center justify-center gap-3 bg-[#F9F9F9] rounded-xl p-4 md:p-6">
                <Image
                  src={"/assets/icons/star-green.svg"}
                  alt="star-fall"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                <Heading6 className="font-semibold text-[#266462] text-sm md:text-base">
                  Early Bird Discounts – Save Big!
                </Heading6>
              </div>
              <div className="inline-flex items-center justify-center gap-3 bg-[#F9F9F9] rounded-xl p-4 md:p-6">
                <Image
                  src={"/assets/icons/half-heart-green.svg"}
                  alt="star-fall"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                <Heading6 className="font-semibold text-[#266462] text-sm md:text-base">
                  Last-Minute Escapes: Limited Deals!
                </Heading6>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default SpecialOffers;
