import React from "react";
import Image from "next/image";
import { Heading5, Title1, Title2 } from "@/components/common";

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
          <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Halal Dining Options */}
            <div>
              <Title1 className="text-xl font-semibold mb-2">
                Halal Dining Options
              </Title1>
              <ul className="space-y-2">
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

            {/* Other sections remain similar with responsive classes */}
            {/* ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalalFriendlyFeatures;
