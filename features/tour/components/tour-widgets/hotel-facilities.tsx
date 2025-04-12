import React from "react";
import { Heading5, Body2, Title2 } from "@/components/common";

const GeneralFacilities = () => {
  const facilities = [
    {
      category: "🏞️ Natural Beauty",
      items: [
        { name: "Hyde Park", range: "100 m" },
        { name: "River Thames", range: "250 m" },
        { name: "St. James's Park", range: "300 m" },
      ],
    },
    {
      category: "🚇 Public Transport",
      items: [
        { name: "Green Park Underground Station", range: "50 m" },
        { name: "Piccadilly Bus Stops", range: "150 m" },
        { name: "Victoria Coach Station", range: "1.2 km" },
      ],
    },
    {
      category: "🍽️ Restaurants & Cafes",
      items: [
        { name: "The Wolseley", range: "50 m" },
        { name: "The Grand", range: "200 m" },
        { name: "The Ritz London", range: "On site" },
      ],
    },
    {
      category: "✈️ Closest Airports",
      items: [
        { name: "London City Airport (LCY)", range: "12 km" },
        { name: "Heathrow Airport (LHR)", range: "22 km" },
        { name: "Gatwick Airport (LGW)", range: "45 km" },
      ],
    },

    {
      category: "🏆 Top Attractions",
      items: [
        { name: "Green Park", range: "100 m" },
        { name: "St James's Church, Piccadilly", range: "300 m" },
        { name: "Piccadilly Circus", range: "400 m" },
        { name: "Leicester Square", range: "600 m" },
        { name: "Buckingham Palace", range: "800 m" },
        { name: "Trafalgar Square", range: "1 km" },
      ],
    },

    {
      category: "⛷️ Ski Lifts",
      items: [
        { name: "The Snow Centre", range: "30 km" },
        { name: "Snozone Milton Keynes", range: "80 km" },
        { name: "Chill Factore", range: "320 km" },
      ],
    },
  ];

  return (
    <div id="general-facilities" className="w-full py-4">
      <div className="w-full mb-8">
        <Heading5 className="text-[#222]">General facilities</Heading5>
        <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Body2 className="text-[#222222] font-medium flex items-center gap-1">
              {section.category}
            </Body2>
            <ul className="flex flex-col gap-4">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex justify-between items-center"
                >
                  <Title2 className="text-[#222]">{item.name}</Title2>
                  <Title2 className="text-[#222]">{item.range}</Title2>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralFacilities;
