"use client";

import React from "react";
import { MainLayout as Layout, Container } from "@/components/common";
import { Breadcrumb, Error, Loader } from "@/components/ui";
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
import { useHotelSearch } from "../core/hooks/use-hotels";

const HotelSingle = () => {
  const { hotel, loading, error } = useHotelSearch();

  if (typeof window !== "undefined") {
    <p>...</p>;
  }

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[90px] pb-[80px] px-4 md:px-6">
        {loading ? (
          <Loader />
        ) : !hotel ? (
          <Error error={error || "Error"} />
        ) : (
          <>
            <Breadcrumb />
            <HotelHeader
              title={hotel.property.title || "Name"}
              address={hotel.property.title}
              rating={
                hotel.property.title !== undefined
                  ? hotel.property.title.toString()
                  : "N/A"
              }
            />
            <HotelImages images={hotel.property.photos || []} />
            <HotelNavbar />
            <HotelDesc description={hotel.property.body || ""} />
            <HalalFriendlyFeatures />
            <HotelRooms />
            <HotelMap />
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3"></div>
              <div className="lg:w-1/3"></div>
            </div>
            <HotelReviews />
            <HotelSurroundings />
            <HotelFacilities />
            <HotelThingsToKnow />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default HotelSingle;
