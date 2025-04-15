import Flights from "@/features/hotel/pages/catalog";
import { Suspense } from "react";

export default function FlightsCatalogPage() {
  return (
    <Suspense>
      <Flights />
    </Suspense>
  );
}
