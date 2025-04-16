"use client";

import { Loader } from "@/components/ui";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Flights = dynamic(() => import("@/features/hotel/pages/catalog"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function FlightsCatalogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Flights />
    </Suspense>
  );
}
