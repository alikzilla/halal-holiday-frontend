"use client";

import React from "react";
import { MainLayout as Layout, Container } from "@/components/common";
import { Breadcrumb } from "@/components/ui";
import { IHotel } from "@/core/types/hotels";
import {
  TourDesc,
  TourHeader,
  TourImages,
  TourMap,
  TourNavbar,
  TourReviews,
  TourThingsToKnow,
} from "@/features/tour/components";

const TourSingle = () => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[90px] pb-[80px]">
        <Breadcrumb />
        {/* <TourHeader
          name={tour.name}
          address={tour.location}
          rating={tour.rating !== undefined ? tour.rating.toString() : "N/A"}
        />
        <TourImages images={tour.images || []} />
        <TourNavbar />
        <TourDesc description={tour.description || ""} />

        <TourReviews />
        <TourMap />
        <TourThingsToKnow /> */}
      </Container>
    </Layout>
  );
};

export default TourSingle;
