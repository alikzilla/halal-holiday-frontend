"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

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
        <div
          key={index}
          className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
        >
          <span>{filter}</span>
          <button
            onClick={() => handleRemoveFilter(filter)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterHeader;
