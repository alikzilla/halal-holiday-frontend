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
import { Button } from "@/components/ui";
import { useMediaQuery } from "@/core/hooks/use-media-query";

const Hotels = () => {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");
  const { hotels, loading, error } = useHotelsSearch();
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <HotelSearchBar />
        <Breadcrumb />

        {/* Mobile filter toggle button */}
        {isMobile && (
          <Button
            type="secondary"
            className="mb-4 w-full"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        )}

        <div className="flex flex-col md:flex-row">
          {/* Filters - shown always on desktop, conditionally on mobile */}
          {(showFilters || !isMobile) && (
            <div className="w-full md:w-[272px] mb-4 md:mb-0 md:mr-6">
              <FilterHotel />
            </div>
          )}

          <div className="flex-1">
            <FilterHeader />
            <CatalogHeader
              count={hotels.length}
              onLayoutChange={setLayout}
              isMobile={isMobile}
            />
            {loading ? (
              <Loader />
            ) : error ? (
              <Error error={error} />
            ) : (
              <CatalogHotel
                hotels={hotels}
                layout={isMobile ? "flex" : layout}
                isMobile={isMobile}
              />
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Hotels;
