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

const HotelSingle = ({ slug }: { slug: string }) => {
  const { hotel, loading, error } = useHotelSearch(slug as string);

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[90px] pb-[80px]">
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
