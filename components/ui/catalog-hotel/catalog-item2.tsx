import { IHotel } from "@/types/hotels";
import React from "react";

const HotelCardType2: React.FC<IHotel> = ({
  name,
  location,
  duration,
  bedType,
  price,
  discountedPrice,
  taxesIncluded,
  features,
  roomsLeft,
  isMostBooked,
}) => {
  return (
    <div className="w-full p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-600">{duration}</p>
      <p className="text-sm text-gray-600">{bedType}</p>

      <div className="mt-2">
        <p className="text-sm text-gray-600">Features:</p>
        <ul className="list-disc list-inside">
          {features &&
            features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600">
                {feature}
              </li>
            ))}
        </ul>
      </div>

      {roomsLeft && roomsLeft > 0 && (
        <p className="text-sm text-red-600 mt-2">Only {roomsLeft} rooms left</p>
      )}

      {isMostBooked && (
        <p className="text-sm text-green-600 mt-2">Most booked hotel</p>
      )}

      <p className="text-lg font-semibold mt-2">
        <span className="line-through text-gray-400">${price.toFixed(2)}</span>{" "}
        <span className="text-red-600">
          ${discountedPrice && discountedPrice.toFixed(2)}
        </span>
      </p>
      <p className="text-sm text-gray-600">
        {taxesIncluded
          ? "Include taxes and charges"
          : "Exclude taxes and charges"}
      </p>
    </div>
  );
};

export default HotelCardType2;
