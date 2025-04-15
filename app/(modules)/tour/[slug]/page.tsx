import React from "react";
import TourSingle from "@/features/tour/pages/tour-single";

export default async function HotelSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <TourSingle />;
}
