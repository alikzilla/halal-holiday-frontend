import React from "react";
import HotelCardType1 from "./catalog-item1";
import HotelCardType2 from "./catalog-item2";
import { IHotel } from "@/types/hotels";

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
        <div className="w-full grid grid-cols-4 gap-2">
          {hotels.map((hotel, index) => (
            <HotelCardType1
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
        <div className="w-full flex flex-col items-start gap-2">
          {hotels.map((hotel, index) => (
            <HotelCardType2
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
