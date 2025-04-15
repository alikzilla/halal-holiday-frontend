import React from "react";
import { TourCard } from "..";

const CatalogHotel = () => {
  return (
    <section>
      <div className="w-full flex flex-col items-start gap-5">
        {/* {tours.map((hotel, index) => (
          <TourCard
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
        ))} */}
      </div>
    </section>
  );
};

export default CatalogHotel;
