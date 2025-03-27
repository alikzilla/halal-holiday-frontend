import { Heading5, Title1, Title2 } from "@/components/common";
import Image from "next/image";
import React from "react";

const HalalFriendlyFeatures = () => {
  return (
    <section id="halal-friendly-features" className="pt-10">
      <div className="flex flex-col items-start gap-8">
        <div className="w-full">
          <Heading5 className="text-2xl font-bold">
            Halal Friendly Features
          </Heading5>
          <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
        </div>

        <div className="w-full">
          <div className="space-y-8 grid grid-cols-3 grid-rows-2">
            {/* Halal Dining Options */}
            <div>
              <Title1 className="text-xl font-semibold mb-2">
                Halal Dining Options
              </Title1>
              <ul className="space-y-2 list-disc text-gray-700">
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Restaurants serving certified halal food
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  No alcohol in designated dining areas
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Vegetarian and seafood options available
                </Title2>
              </ul>
            </div>

            {/* Family-Friendly Atmosphere */}
            <div>
              <Title1 className="text-xl font-semibold mb-2 flex items-center gap-2">
                Family-Friendly Atmosphere <span>👨‍👩‍👧‍👦</span>
              </Title1>
              <ul className="space-y-2 list-disc text-gray-700">
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Private family areas for dining
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Separate swimming and spa facilities for men & women
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Child-friendly services and activities
                </Title2>
              </ul>
            </div>

            {/* Prayer Facilities */}
            <div>
              <Title1 className="text-xl font-semibold mb-2 flex items-center gap-2">
                Prayer Facilities <span>🕌</span>
              </Title1>
              <ul className="space-y-2 list-disc text-gray-700">
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Dedicated prayer rooms or nearby mosques
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Qibla direction marked in rooms
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Prayer mats available upon request
                </Title2>
              </ul>
            </div>

            {/* Halal-Certified Hotel Services */}
            <div>
              <Title1 className="text-xl font-semibold mb-2 flex items-center gap-2">
                Halal-Certified Hotel Services <span>🏨</span>
              </Title1>
              <ul className="space-y-2 list-disc text-gray-700">
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Rooms cleaned with halal-friendly products
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Staff trained in Muslim-friendly hospitality
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Availability of private pool or villa options
                </Title2>
              </ul>
            </div>

            {/* Alcohol-Free Environment */}
            <div>
              <Title1 className="text-xl font-semibold mb-2 flex items-center gap-2">
                Alcohol-Free Environment <span>🚫🍷</span>
              </Title1>
              <ul className="space-y-2 list-disc text-gray-700">
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Non-alcoholic minibar options
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Alcohol-free zones in dining areas
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Halal-certified beverages
                </Title2>
              </ul>
            </div>

            {/* Nearby Mosques & Islamic Centers */}
            <div>
              <Title1 className="text-xl font-semibold mb-2 flex items-center gap-2">
                Nearby Mosques & Islamic Centers <span>🕋</span>
              </Title1>
              <ul className="space-y-2 list-disc text-gray-700">
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Short distance to local mosques for daily prayers
                </Title2>
                <Title2 className="text-[#919191] flex items-center gap-[1.5px]">
                  <Image
                    src={"/assets/icons/check-gray.svg"}
                    alt="check"
                    width={16}
                    height={16}
                  />
                  Concierge assistance for finding prayer facilities
                </Title2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalalFriendlyFeatures;
