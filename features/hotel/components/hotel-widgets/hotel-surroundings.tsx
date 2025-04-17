import React from "react";
import { Heading5, Body2, Title1 } from "@/components/common";

const HotelSurroundings = () => {
  const mainAddress =
    "150 Piccadilly, Westminster Borough, London, W1J 9BR, United Kingdom";

  const nearbyPlaces = [
    {
      name: "Green Park",
      description:
        "A tranquil green space adjacent to The Ritz, offering a peaceful retreat from the city's hustle and bustle.",
      walkingDistance: "100 m",
    },
    {
      name: "Trafalgar Square",
      description:
        "A public square featuring the iconic Nelson's Column and serving as a venue for cultural events.",
      walkingDistance: "600 m",
    },
    {
      name: "Buckingham Palace",
      description:
        "The official London residence of the UK's monarch, renowned for the Changing of the Guard ceremony.",
      walkingDistance: "100 m",
    },
    {
      name: "Piccadilly Circus",
      description:
        "A famous London landmark known for its vibrant atmosphere, digital billboards, and as a hub for shopping and entertainment.",
      walkingDistance: "100 m",
    },
    {
      name: "Piccadilly Circus",
      description:
        "A famous London landmark known for its vibrant atmosphere, digital billboards, and as a hub for shopping and entertainment.",
      walkingDistance: "100 m",
    },
    {
      name: "Piccadilly Circus",
      description:
        "A famous London landmark known for its vibrant atmosphere, digital billboards, and as a hub for shopping and entertainment.",
      walkingDistance: "100 m",
    },
  ];

  return (
    <div
      id="hotel-surroundings"
      className="w-full flex flex-col items-start gap-6 py-4"
    >
      {/* Main Address Section */}
      <section className="w-full">
        <div className="flex flex-col items-start gap-8">
          <div className="w-full">
            <Heading5 className="text-[#222]">Main Address</Heading5>
            <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
          </div>
          <div className="w-full">
            <Body2 className="text-[#222222] font-medium">
              © {mainAddress}
            </Body2>
          </div>
        </div>
      </section>

      {/* Nearby Places Section */}
      <section className="w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <Heading5 className="text-[#222]">Nearby places</Heading5>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {nearbyPlaces.map((place, index) => (
                <div key={index} className="flex flex-col items-start gap-1">
                  <div className="w-full flex items-center justify-between">
                    <Title1 className="text-[#222222] font-medium mb-1">
                      {place.name}
                    </Title1>
                    <Title1 className="text-[#222222] font-medium mb-1">
                      {place.walkingDistance}
                    </Title1>
                  </div>

                  <Body2 className="text-[#919191]">{place.description}</Body2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelSurroundings;
