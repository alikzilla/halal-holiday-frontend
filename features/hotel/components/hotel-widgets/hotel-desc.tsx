import React from "react";
import Image from "next/image";
import { Heading5, Body2 } from "@/components/common";

const HotelDescription = ({ description }: { description: string }) => {
  console.log(description);

  const facilities = [
    {
      name: "Non-smoking rooms",
      icon: "/assets/emojis/no-smoking.svg",
    },
    {
      name: "Fitness centre",
      icon: "/assets/emojis/strength.svg",
    },
    {
      name: "Room service",
      icon: "/assets/emojis/bell.svg",
    },
    {
      name: "Breakfast",
      icon: "/assets/emojis/croissant.svg",
    },
    {
      name: "Bar",
      icon: "/assets/emojis/coctail.svg",
    },
    {
      name: "Private parking",
      icon: "/assets/emojis/car.svg",
    },
    {
      name: "Restaurants",
      icon: "/assets/emojis/plate.svg",
    },
    {
      name: "Free WiFi",
      icon: "/assets/emojis/progress.svg",
    },
    {
      name: "Family rooms",
      icon: "/assets/emojis/family.svg",
    },
    {
      name: "Facilities for disabled guests",
      icon: "/assets/emojis/invalid.svg",
    },
  ];

  return (
    <div id="overview" className="w-full flex items-start gap-6 py-4">
      {/* Description Section */}
      <section className="w-full">
        <div className="flex flex-col items-start gap-8">
          <div className="w-full">
            <Heading5 className="text-[#222]">Description</Heading5>
            <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
          </div>
          <div className="w-full">
            <Body2 className="text-[#222222] font-medium">
              Overlooking London&apos;s Green Park is the world-famous The Ritz
              London. This stunning Neoclassical building offers the height of
              opulence with luxurious bedrooms, exquisite British cuisine, and
              classic afternoon teas. Bedrooms at The Ritz London combine
              stunning period architecture and antique furnishings with modern
              amenities. Decorated in warm colours, they feature high ceilings,
              ornate fireplaces and chandeliers.
              <br />
              <br />
              Rooms are air-conditioned and elegant bathrooms with designer
              toiletries. There is complimentary WiFi throughout the hotel. The
              Michelin star Ritz Restaurant looks out over the gardens. It uses
              the finest of ingredients in cuisine that is classically British
              with a modern twist. The Rivoli Bar has an Art Deco style with
              gold leaf decoration.
              <br />
              <br />
              Couples particularly like the location — they rated it 9.9 for a
              two-person trip.
            </Body2>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="w-full">
        <div className="flex flex-col items-start gap-8">
          <div className="w-full">
            <Heading5 className="text-[#222]">Most popular facilities</Heading5>
            <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-start flex-wrap gap-[10px]">
              {/* Facility items with emoji indicators */}
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[6px] bg-[#F9F9F9] py-2 px-3 rounded-[30px]"
                >
                  <Image
                    src={facility.icon}
                    alt="no smoke"
                    width={20}
                    height={20}
                  />
                  <span>{facility.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelDescription;
