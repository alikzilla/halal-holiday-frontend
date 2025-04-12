"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui";

const FilterHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const halalFood = searchParams.get("halalFood")?.split(",") || [];
  const alcoholFree = searchParams.get("alcoholFree")?.split(",") || [];
  //const priceRange = searchParams.get("priceRange") || "5,1000";
  const facilities = searchParams.get("facilities")?.split(",") || [];

  const allFilters = [...halalFood, ...alcoholFree, ...facilities];

  const handleRemoveFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (halalFood.includes(filter)) {
      const newHalalFood = halalFood.filter((f) => f !== filter);
      if (newHalalFood.length > 0) {
        params.set("halalFood", newHalalFood.join(","));
      } else {
        params.delete("halalFood");
      }
    } else if (alcoholFree.includes(filter)) {
      const newAlcoholFree = alcoholFree.filter((f) => f !== filter);
      if (newAlcoholFree.length > 0) {
        params.set("alcoholFree", newAlcoholFree.join(","));
      } else {
        params.delete("alcoholFree");
      }
    } else if (facilities.includes(filter)) {
      const newFacilities = facilities.filter((f) => f !== filter);
      if (newFacilities.length > 0) {
        params.set("facilities", newFacilities.join(","));
      } else {
        params.delete("facilities");
      }
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {allFilters.map((filter, index) => (
        <Button
          key={index}
          type="outline"
          onClick={() => handleRemoveFilter(filter)}
          trailingIcon
          trailing="cross-green"
        >
          <span>{filter}</span>
        </Button>
      ))}
    </div>
  );
};

export default FilterHeader;
