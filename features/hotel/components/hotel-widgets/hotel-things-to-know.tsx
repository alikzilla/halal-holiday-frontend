import React from "react";
import Link from "next/link";
import { Heading5, Body2 } from "@/components/common";

const HotelThingsToKnow = () => {
  const sections = [
    {
      title: "House rules",
      items: ["Check-in after 4:00PM", "Checkout before 11:00AM", "No pets"],
      hasLearnMore: true,
    },
    {
      title: "Safety & property",
      items: [
        "No carbon monoxide alarm",
        "Pool/hot tub without a gate or lock",
        "Nearby lake, river, other body of water",
      ],
      hasLearnMore: true,
    },
    {
      title: "Cancellation",
      items: [
        "Free cancellation before Feb 18. Cancel before Mar 15 for a partial refund.",
        "Review this Host's full policy for details.",
      ],
      hasLearnMore: true,
    },
  ];

  return (
    <div id="things-to-know" className="w-full py-4">
      <div className="w-full mb-8">
        <Heading5 className="text-[#222]">Things to know</Heading5>
        <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Body2 className="text-[#222222] font-medium">
              {section.title}
            </Body2>

            {section.items.length > 0 && (
              <ul className="flex flex-col gap-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Body2 className="text-[#919191]">{item}</Body2>
                  </li>
                ))}
              </ul>
            )}

            {section.hasLearnMore && (
              <Link href="#" className="flex items-center gap-1 mt-2">
                <Body2 className="text-[#222222] font-medium">Learn more</Body2>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 14L13.5 5M13.5 5H6.75M13.5 5V11.75"
                    stroke="#222222"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelThingsToKnow;
