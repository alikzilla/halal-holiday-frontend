"use client";

import { Container, MainLayout as Layout } from "@/components/common";
import { Breadcrumb } from "@/components/ui";
import {
  CatalogHotel,
  FilterHotel,
  FilterHeader,
  CatalogHeader,
  HotelSearchBar,
} from "@/features/hotel/components";
import { Suspense, useState } from "react";
import { hotels } from "@/core/lib/globals";

const Hotels = () => {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <Suspense>
          <HotelSearchBar />
          <Breadcrumb />
          <div className="flex">
            <FilterHotel />
            <div className="flex-1 ml-6">
              <FilterHeader />
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
