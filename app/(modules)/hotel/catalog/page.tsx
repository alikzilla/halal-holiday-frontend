import Hotels from "@/features/hotel/pages/catalog";
import { Suspense } from "react";

export default function HotelsCatalogPage() {
  return (
    <Suspense>
      <Hotels />
    </Suspense>
  );
}
