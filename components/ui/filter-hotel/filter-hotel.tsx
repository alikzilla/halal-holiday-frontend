"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

const FilterHotel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const halalFood = searchParams.get("halalFood")?.split(",") || [];
  const alcoholFree = searchParams.get("alcoholFree")?.split(",") || [];
  const priceRange = searchParams.get("priceRange") || "5,1000";
  const facilities = searchParams.get("facilities")?.split(",") || [];

  const handleFilterChange = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    const currentValues = params.get(filterType)?.split(",") || [];

    if (currentValues.includes(value)) {
      const newValues = currentValues.filter((v) => v !== value);
      if (newValues.length > 0) {
        params.set(filterType, newValues.join(","));
      } else {
        params.delete(filterType);
      }
    } else {
      params.set(filterType, [...currentValues, value].join(","));
    }

    router.replace(`?${params.toString()}`);
  };

  const handlePriceRangeChange = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("priceRange", `${min},${max}`);
    router.replace(`?${params.toString()}`);
  };

  return (
    <aside className="w-64 p-4 bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Halal Food Filters */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Halal Food</h3>
        {["Some halal food", "Halal food on request", "Halal food nearby"].map(
          (option) => (
            <label key={option} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={halalFood.includes(option)}
                onChange={() => handleFilterChange("halalFood", option)}
                className="mr-2"
              />
              <span>{option}</span>
            </label>
          )
        )}
      </div>

      {/* Alcohol-Free Areas Filters */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Alcohol-Free Areas</h3>
        {[
          "Alcohol-free property",
          "Alcohol-free restaurant",
          "Alcohol-free room",
        ].map((option) => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={alcoholFree.includes(option)}
              onChange={() => handleFilterChange("alcoholFree", option)}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="5"
          max="1000"
          value={priceRange.split(",")[1]}
          onChange={(e) =>
            handlePriceRangeChange(priceRange.split(",")[0], e.target.value)
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${priceRange.split(",")[0]}</span>
          <span>${priceRange.split(",")[1]}</span>
        </div>
      </div>

      {/* Facilities Filters */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Facilities</h3>
        {["Beach", "Ladies only", "Private - hire"].map((option) => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={facilities.includes(option)}
              onChange={() => handleFilterChange("facilities", option)}
              className="mr-2"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default FilterHotel;
