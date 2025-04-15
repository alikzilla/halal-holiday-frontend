"use client";

import { useState } from "react";
import { Container, MainLayout as Layout } from "@/components/common";
import { Breadcrumb, Loader, Error } from "@/components/ui";
import {
  CatalogHeader,
  FilterHotel,
  CatalogHotel,
  FilterHeader,
  HotelSearchBar,
} from "../components";
import { useHotelsSearch } from "../core/hooks/use-hotels";

const Hotels = () => {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");
  const { hotels, loading, error } = useHotelsSearch();

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <HotelSearchBar />
        <Breadcrumb />
        <div className="flex">
          <FilterHotel />
          <div className="flex-1 ml-6">
            <FilterHeader />
            <CatalogHeader count={hotels.length} onLayoutChange={setLayout} />
            {loading ? (
              <Loader />
            ) : error ? (
              <Error error={error} />
            ) : (
              <CatalogHotel hotels={hotels} layout={layout} />
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Hotels;
