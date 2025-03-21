"use client";

import React from "react";
import { MainLayout as Layout, Container } from "@/components/common";
import {
  HotelFacilities,
  HotelFAQ,
  HotelHeader,
  HotelImages,
  HotelMap,
  HotelNavbar,
  HotelReviews,
  HotelRooms,
  HotelSurroundings,
  HotelThingsToKnow,
  HotelDesc,
} from "@/components/ui";
import { Hotel } from "@/types/hotels";

const HotelSingle = ({ hotel }: { hotel: Hotel }) => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[90px] pb-[80px]">
        <HotelHeader
          name={hotel.name}
          address={hotel.address}
          rating={hotel.rating}
        />
        <HotelImages images={hotel.images} />
        <HotelNavbar />
        <HotelDesc description={hotel.description} />
        <HotelRooms rooms={hotel.rooms} />
        <HotelMap />
        <HotelReviews reviews={hotel.reviews} />
        <HotelSurroundings surroundings={hotel.surroundings} />
        <HotelFacilities facilities={hotel.facilities} />
        <HotelThingsToKnow thingsToKnow={hotel.thingsToKnow} />
        <HotelFAQ faqs={hotel.faqs} />
      </Container>
    </Layout>
  );
};

export default HotelSingle;
