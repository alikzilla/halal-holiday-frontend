import Tours from "@/features/tour/pages/catalog";
import { Suspense } from "react";

export default function TourCatalogPage() {
  return (
    <Suspense>
      <Tours />
    </Suspense>
  );
}
