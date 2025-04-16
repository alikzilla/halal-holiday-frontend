"use client";

import { Loader } from "@/components/ui";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hotels = dynamic(() => import("@/features/hotel/pages/catalog"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function HotelsCatalogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hotels />
    </Suspense>
  );
}
