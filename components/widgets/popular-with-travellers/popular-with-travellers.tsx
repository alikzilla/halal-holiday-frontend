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
    { name: "Paris", type: "Boutique rentals", country: "fr" }, // France
    { name: "Milan", type: "Fashionable krits", country: "it" }, // Italy
    { name: "Rio de Janeiro", type: "Tropical retreats", country: "br" }, // Brazil
    { name: "Tokyo", type: "Luxury apartments", country: "jp" }, // Japan
    { name: "Dubai", type: "Desert villas", country: "ae" }, // UAE
    { name: "Singapore", type: "Skyline condos", country: "sg" }, // Singapore
    { name: "London", type: "Historic townhouses", country: "gb" }, // UK
    { name: "Amsterdam", type: "Canal houses", country: "nl" }, // Netherlands
    { name: "Berlin", type: "Modern apartments", country: "de" }, // Germany
    { name: "New York", type: "Penthouse suites", country: "us" }, // USA
    { name: "Barcelona", type: "Baccinfort properties", country: "es" }, // Spain
    { name: "Hong Kong", type: "High-rise residences", country: "hk" }, // Hong Kong
    { name: "Sydney", type: "Harbor views", country: "au" }, // Australia
    { name: "Los Angeles", type: "Hollywood mansions", country: "us" }, // USA
    { name: "Cape Town", type: "Oceanfront villas", country: "za" }, // South Africa
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-[60px]">
      <Container>
        <section className="w-full flex flex-col items-center gap-[72px]">
          <div className="text-center">
            <Heading2 className="text-[#222222]">
              Popular with travellers from all over the world
            </Heading2>
            <Body2 className="text-[#ADADAD] mt-2">
              Find your next adventure in our curated travel picks
            </Body2>
          </div>

          <div className="flex justify-center gap-4">
            {tabs.map((tab) => (
              <Button
                key={tab}
                type={activeTab === tab ? "primary" : "white"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <Heading4 className="text-[#266462]">{city.name}</Heading4>
                  <Image
                    src={`/assets/flags/${city.country}.svg`}
                    alt={`${city.country} flag`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <Body2 className="text-[#919191]">{city.type}</Body2>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default PopularWithTravellers;
