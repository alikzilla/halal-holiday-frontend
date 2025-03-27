"use client";

import React from "react";
import { MainLayout as Layout, Container } from "@/components/common";
import {
  HotelFacilities,
  HotelHeader,
  HotelImages,
  HotelMap,
  HotelNavbar,
  HotelReviews,
  HotelRooms,
  HotelSurroundings,
  HotelThingsToKnow,
  HotelDesc,
  Breadcrumb,
} from "@/components/ui";
import { IHotel } from "@/types/hotels";
import HalalFriendlyFeatures from "@/components/ui/hotel-page/halal-friendly";

const HotelSingle = ({ hotel }: { hotel: IHotel }) => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[90px] pb-[80px]">
        <Breadcrumb />
        <HotelHeader
          name={hotel.name}
          address={hotel.location}
          rating={hotel.rating !== undefined ? hotel.rating.toString() : "N/A"}
        />
        <HotelImages images={hotel.images || []} />
        <HotelNavbar />
        <HotelDesc description={hotel.description || ""} />
        <HalalFriendlyFeatures />
        <HotelRooms />
        <HotelMap />
        <HotelReviews />
        <HotelSurroundings />
        <HotelFacilities />
        <HotelThingsToKnow />
      </Container>
    </Layout>
  );
};

export default HotelSingle;
