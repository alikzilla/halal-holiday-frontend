"use client";

import { Container, MainLayout as Layout } from "@/components/common";
import {
  Breadcrumb,
  CatalogHotel,
  FilterHotel,
  CatalogHeader,
  HotelSearchBar,
  FilterHotelHeader,
} from "@/components/ui";

import { IHotel } from "@/types/hotels";
import { Suspense, useState } from "react";

const hotels: IHotel[] = [
  {
    id: 1,
    name: "The Ritz-Carlton",
    location: "Istanbul, Turkey",
    duration: "3 nights",
    bedType: "1 King Bed",
    price: 450,
    taxesIncluded: true,
  },
  {
    id: 2,
    name: "Four Seasons Hotel",
    location: "Bosphorus, Istanbul, Turkey",
    duration: "2 nights",
    bedType: "1 King Bed, 1 Sofa Bed",
    price: 750,
    discountedPrice: 600,
    taxesIncluded: true,
    features: [
      "Sports mode",
      "OPS Navigation",
      "Open Roof",
      "Premium Sound System",
    ],
    roomsLeft: 3,
    isMostBooked: true,
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    location: "Bosphorus, Istanbul, Turkey",
    duration: "2 nights",
    bedType: "1 King Bed, 1 Sofa Bed",
    price: 750,
    discountedPrice: 600,
    taxesIncluded: true,
    features: [
      "Sports mode",
      "OPS Navigation",
      "Open Roof",
      "Premium Sound System",
    ],
    roomsLeft: 3,
    isMostBooked: true,
  },
];

const Hotels = () => {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <Suspense>
          <HotelSearchBar />
          <Breadcrumb />
          <div className="flex mt-6">
            <FilterHotel />
            <div className="flex-1 ml-6">
              <FilterHotelHeader />
              <CatalogHeader onLayoutChange={setLayout} />
              <CatalogHotel hotels={hotels} layout={layout} />
            </div>
          </div>
        </Suspense>
      </Container>
    </Layout>
  );
};

export default Hotels;
