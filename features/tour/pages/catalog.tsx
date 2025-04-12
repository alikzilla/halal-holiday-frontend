"use client";

import { Suspense } from "react";
import { Container, MainLayout as Layout } from "@/components/common";
import { Breadcrumb, TourSearchBar } from "@/components/ui";
import { FilterTour, CatalogTour, FilterHeader } from "../components";
import { hotels } from "@/core/lib/globals";

const Tours = () => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <Suspense>
          <TourSearchBar />
          <Breadcrumb />
          <div className="flex">
            <FilterTour />
            <div className="flex-1 ml-6">
              <FilterHeader />
              <CatalogTour tours={hotels} />
            </div>
          </div>
        </Suspense>
      </Container>
    </Layout>
  );
};

export default Tours;
