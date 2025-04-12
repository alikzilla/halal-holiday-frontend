"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Checkbox, Input, Label, Slider } from "@/components/ui/";
import { Title1, Title2 } from "@/components/common";

const FilterHotel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const halalFood = searchParams.get("halalFood")?.split(",") || [];
  const alcoholFree = searchParams.get("alcoholFree")?.split(",") || [];
  const facilities = searchParams.get("facilities")?.split(",") || [];
  const roomFacilities = searchParams.get("roomFacilities")?.split(",") || [];

  // Price range state
  const [priceRange, setPriceRange] = useState<[number, number]>(
    searchParams.get("priceRange")
      ? (searchParams.get("priceRange")!.split(",").map(Number) as [
          number,
          number
        ])
      : [5, 1000]
  );

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

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handlePriceRangeChange = (value: number[]) => {
    const newRange = value as [number, number];
    setPriceRange(newRange);
    updatePriceParams(newRange);
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = Math.min(Number(e.target.value), priceRange[1]);
    const newRange: [number, number] = [min, priceRange[1]];
    setPriceRange(newRange);
    updatePriceParams(newRange);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = Math.max(Number(e.target.value), priceRange[0]);
    const newRange: [number, number] = [priceRange[0], max];
    setPriceRange(newRange);
    updatePriceParams(newRange);
  };

  const updatePriceParams = (range: [number, number]) => {
    const params = new URLSearchParams(searchParams);
    params.set("priceRange", range.join(","));
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <aside className="w-[272px] p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Halal Food Filters */}
      <div className="mb-6">
        <Title1 className="font-medium my-2 text-[#222]">Halal Food</Title1>
        <div className="space-y-2 зн-2">
          {[
            "Some halal food",
            "Halal food on request",
            "Halal food nearby",
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`halal-${option}`}
                checked={halalFood.includes(option)}
                onCheckedChange={() => handleFilterChange("halalFood", option)}
                className="w-5 h-5 cursor-pointer"
              />
              <Label
                htmlFor={`halal-${option}`}
                className="font-medium text-[#222] cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-[#F2F2F2] my-6"></div>

      {/* Alcohol-Free Areas Filters */}
      <div className="mb-6">
        <Title1 className="font-medium my-2 text-[#222]">
          Alcohol-Free Areas
        </Title1>
        <div className="space-y-2 py-2">
          {[
            "Alcohol-free property",
            "Alcohol-free restaurant",
            "Alcohol-free room",
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`alcohol-${option}`}
                checked={alcoholFree.includes(option)}
                onCheckedChange={() =>
                  handleFilterChange("alcoholFree", option)
                }
                className="w-5 h-5 cursor-pointer"
              />
              <Label
                htmlFor={`alcohol-${option}`}
                className="font-medium text-[#222] cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-[#F2F2F2] my-6"></div>

      {/* Price Range Filter */}
      <div className="mb-10">
        <h3 className="font-medium mb-2">Price range</h3>

        {/* Price inputs */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-sm">$</span>
            <Input
              type="number"
              min={5}
              max={1000}
              value={priceRange[0].toString()}
              onChange={() => handleMinInputChange}
              className="w-20 h-8 text-sm"
            />
          </div>
          <div className="w-4 h-px bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <span className="text-sm">$</span>
            <Input
              type="number"
              min={5}
              max={1000}
              value={priceRange[1].toString()}
              onChange={() => handleMaxInputChange}
              className="w-20 h-8 text-sm"
            />
          </div>
        </div>

        {/* Slider */}
        <Slider
          min={5}
          max={1000}
          value={priceRange}
          onValueChange={handlePriceRangeChange}
          step={1}
          minStepsBetweenThumbs={1}
        />
      </div>

      {/* Separator */}
      <div className="border-t border-[#F2F2F2] my-6"></div>

      {/* Facilities Filters */}
      <div className="mb-6">
        <Title1 className="font-medium my-2 text-[#222]">Facilities</Title1>
        <div className="space-y-4">
          {[
            {
              category: "Beach",
              options: [
                "Ladies only",
                "Private - hire",
                "In villa/room",
                "Mixed",
              ],
            },
            {
              category: "Pool",
              options: [
                "Ladies only",
                "Private - hire",
                "In villa/room",
                "Mixed",
              ],
            },
            {
              category: "Wellness & Spa",
              options: [
                "Ladies only",
                "Private - hire",
                "In villa/room",
                "Mixed",
              ],
            },
          ].map((category) => (
            <div key={category.category}>
              <Title2 className="text-[#ADADAD] pl-4 mb-1">
                {category.category}
              </Title2>
              <div className="space-y-2 py-2">
                {category.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`facility-${category.category}-${option}`}
                      checked={facilities.includes(
                        `${category.category}:${option}`
                      )}
                      onCheckedChange={() =>
                        handleFilterChange(
                          "facilities",
                          `${category.category}:${option}`
                        )
                      }
                      className="w-5 h-5 cursor-pointer"
                    />
                    <Label
                      htmlFor={`facility-${category.category}-${option}`}
                      className="font-medium text-[#222] cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Room Facilities Filters */}
      <div className="mb-6">
        <Title1 className="font-medium my-2 text-[#222]">
          Room Facilities
        </Title1>
        <div className="space-y-2 py-2">
          {[
            "Sea view",
            "Private bathroom",
            "Balcony",
            "Air conditioning",
            "Kitchen/kitchenette",
            "Private pool",
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`room-${option}`}
                checked={roomFacilities.includes(option)}
                onCheckedChange={() =>
                  handleFilterChange("roomFacilities", option)
                }
                className="w-5 h-5 cursor-pointer"
              />
              <Label
                htmlFor={`room-${option}`}
                className="font-medium text-[#222] cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterHotel;
