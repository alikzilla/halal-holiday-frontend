"use client";

import { Container, MainLayout as Layout } from "@/components/common";
import { Breadcrumb } from "@/components/ui";
import {
  FilterHotel,
  FilterHeader,
  HotelSearchBar,
} from "@/features/hotel/components";
import { useEffect, useState } from "react";

const Flights = () => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <HotelSearchBar />
        <Breadcrumb />
        <div className="flex">
          <FilterHotel />
          <div className="flex-1 ml-6">
            <FilterHeader />
            {/* <CatalogHeader onLayoutChange={setLayout} />
              <CatalogHotel hotels={hotels} layout={layout} /> */}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Flights;
