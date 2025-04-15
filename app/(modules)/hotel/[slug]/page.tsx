import React from "react";
import HotelSingle from "@/features/hotel/pages/hotel-single";

export default async function HotelSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <HotelSingle slug={slug} />;
}
