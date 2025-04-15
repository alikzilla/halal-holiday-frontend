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
              title={hotel.title}
              source={hotel.source}
              photo={hotel.photo}
              url={hotel.url}
              stars={hotel.stars}
              score={hotel.score}
              body={hotel.body}
              is_top={hotel.is_top}
              city_title={hotel.city_title}
              country_title={hotel.country_title}
              score_text={hotel.score_text}
              reviews={hotel.reviews}
              price={hotel.price}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-start gap-5">
          {hotels.map((hotel, index) => (
            <HotelCard2
              key={index}
              id={hotel.id}
              title={hotel.title}
              source={hotel.source}
              photo={hotel.photo}
              url={hotel.url}
              stars={hotel.stars}
              score={hotel.score}
              body={hotel.body}
              is_top={hotel.is_top}
              city_title={hotel.city_title}
              country_title={hotel.country_title}
              score_text={hotel.score_text}
              reviews={hotel.reviews}
              price={hotel.price}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CatalogHotel;
