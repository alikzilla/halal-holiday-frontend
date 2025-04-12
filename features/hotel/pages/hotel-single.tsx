"use client";

import React from "react";
import { MainLayout as Layout, Container } from "@/components/common";
import { Breadcrumb } from "@/components/ui";
import { IHotel } from "@/core/types/hotels";
import {
  HotelDesc,
  HotelFacilities,
  HalalFriendlyFeatures,
  HotelHeader,
  HotelImages,
  HotelMap,
  HotelNavbar,
  HotelReviews,
  HotelRooms,
  HotelSurroundings,
  HotelThingsToKnow,
} from "@/features/hotel/components";

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
