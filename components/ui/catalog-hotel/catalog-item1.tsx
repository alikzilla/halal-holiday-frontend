import { IHotel } from "@/types/hotels";
import React from "react";

const HotelCardType1: React.FC<IHotel> = ({
  name,
  location,
  duration,
  bedType,
  price,
  taxesIncluded,
}) => {
  return (
    <div className="w-full p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-600">{duration}</p>
      <p className="text-sm text-gray-600">{bedType}</p>
      <p className="text-lg font-semibold mt-2">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-600">
        {taxesIncluded
          ? "Include taxes and charges"
          : "Exclude taxes and charges"}
      </p>
    </div>
  );
};

export default HotelCardType1;
