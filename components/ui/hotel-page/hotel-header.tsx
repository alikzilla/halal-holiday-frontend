import React from "react";

const HotelHeader = ({
  name,
  address,
  rating,
}: {
  name: string;
  address: string;
  rating: number;
}) => {
  return (
    <div className="bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600 mt-2">{address}</p>
      <div className="flex items-center mt-4">
        <span className="text-yellow-500 text-xl">★ {rating.toFixed(1)}</span>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Share
        </button>
      </div>
    </div>
  );
};

export default HotelHeader;
