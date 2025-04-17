import React from "react";
import { HotelCard1, HotelCard2 } from "..";
import { IHotel } from "@/core/types/hotels";

const CatalogHotel = ({
  hotels,
  layout,
  isMobile,
}: {
  hotels: IHotel[];
  layout: "grid" | "flex";
  isMobile: boolean;
}) => {
  return (
    <section>
      {layout === "grid" && !isMobile ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {hotels.map((hotel, index) => (
            <HotelCard1 key={index} {...hotel} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-start gap-5">
          {hotels.map((hotel, index) => (
            <HotelCard2 key={index} {...hotel} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CatalogHotel;
