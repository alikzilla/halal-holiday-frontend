import React from "react";
import { HotelCard1, HotelCard2 } from "..";
import { IHotel } from "@/core/types/hotels";

const CatalogHotel = ({
  hotels,
  layout,
}: {
  hotels: IHotel[];
  layout: "grid" | "flex";
}) => {
  return (
    <section>
      {layout === "grid" ? (
        <div className="w-full grid grid-cols-4 gap-5">
          {hotels.map((hotel, index) => (
            <HotelCard1
              key={index}
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              duration={hotel.duration}
              bedType={hotel.bedType}
              price={hotel.price}
              taxesIncluded={hotel.taxesIncluded}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-start gap-5">
          {hotels.map((hotel, index) => (
            <HotelCard2
              key={index}
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              duration={hotel.duration}
              bedType={hotel.bedType}
              price={hotel.price}
              taxesIncluded={hotel.taxesIncluded}
              discountedPrice={hotel.discountedPrice || 0}
              features={hotel.features || []}
              roomsLeft={hotel.roomsLeft || 0}
              isMostBooked={hotel.isMostBooked || false}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CatalogHotel;
