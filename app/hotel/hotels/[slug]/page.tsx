import React from "react";
import HotelSingle from "@/components/pages/hotel/hotels/hotel-single";
import { hotels } from "@/lib/globals";

const HotelSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.id === Number(slug));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return <HotelSingle hotel={hotel} />;
};

export default HotelSinglePage;
