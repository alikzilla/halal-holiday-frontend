"use client";

import React, { useState } from "react";
import { Body2, Container, Heading2, Heading4 } from "@/components/common";
import { Button } from "@/components/ui";
import Image from "next/image";

const PopularWithTravellers = () => {
  const [activeTab, setActiveTab] = useState("Domestic cities");

  const tabs = [
    "Domestic cities",
    "International cities",
    "Regions",
    "Countries",
  ];

  const cities = [
    { name: "Paris", type: "Boutique rentals", country: "fr" },
    { name: "Milan", type: "Fashionable krits", country: "it" },
    { name: "Rio de Janeiro", type: "Tropical retreats", country: "br" },
    { name: "Tokyo", type: "Luxury apartments", country: "jp" },
    { name: "Dubai", type: "Desert villas", country: "ae" },
    { name: "Singapore", type: "Skyline condos", country: "sg" },
    { name: "London", type: "Historic townhouses", country: "gb" },
    { name: "Amsterdam", type: "Canal houses", country: "nl" },
    { name: "Berlin", type: "Modern apartments", country: "de" },
    { name: "New York", type: "Penthouse suites", country: "us" },
    { name: "Barcelona", type: "Baccinfort properties", country: "es" },
    { name: "Hong Kong", type: "High-rise residences", country: "hk" },
    { name: "Sydney", type: "Harbor views", country: "au" },
    { name: "Los Angeles", type: "Hollywood mansions", country: "us" },
    { name: "Cape Town", type: "Oceanfront villas", country: "za" },
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-8 md:py-[60px]">
      <Container>
        <section className="w-full flex flex-col items-center gap-6 md:gap-[72px]">
          {/* Header */}
          <div className="text-center px-2 md:px-0">
            <Heading2 className="text-[#222222] text-2xl md:text-3xl lg:text-4xl">
              Popular with travellers from all over the world
            </Heading2>
            <Body2 className="text-[#ADADAD] mt-2 text-sm md:text-base">
              Find your next adventure in our curated travel picks
            </Body2>
          </div>

          {/* Tab Navigation */}
          <div className="w-full flex flex-wrap justify-center gap-2 md:gap-4 px-2 md:px-0">
            {tabs.map((tab) => (
              <Button
                key={tab}
                type={activeTab === tab ? "primary" : "white"}
                onClick={() => setActiveTab(tab)}
                className="text-xs md:text-sm px-3 py-1 md:px-4 md:py-2"
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Cities Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-1 md:gap-2 p-2 md:p-0"
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <Heading4 className="text-[#266462] text-sm md:text-base">
                    {city.name}
                  </Heading4>
                  <Image
                    src={`/assets/flags/${city.country}.svg`}
                    alt={`${city.country} flag`}
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <Body2 className="text-[#919191] text-xs md:text-sm">
                  {city.type}
                </Body2>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default PopularWithTravellers;
