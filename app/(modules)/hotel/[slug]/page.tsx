import React from "react";
import HotelSingle from "@/features/hotel/pages/hotel-single";
import { hotels } from "@/core/lib/globals";

export default async function HotelSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.id === Number(slug));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return <HotelSingle hotel={hotel} />;
}
