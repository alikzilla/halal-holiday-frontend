"use client";

import { Suspense } from "react";
import { Container, MainLayout as Layout } from "@/components/common";
import { Breadcrumb } from "@/components/ui";
import {
  FilterTour,
  CatalogTour,
  FilterHeader,
  TourSearchBar,
} from "../components";

const Tours = () => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[80px] pb-[80px]">
        <TourSearchBar />
        <Breadcrumb />
        <div className="flex">
          <FilterTour />
          <div className="flex-1 ml-6">
            <FilterHeader />
            <CatalogTour />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Tours;
