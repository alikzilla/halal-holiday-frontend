"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Checkbox, Input, Label, Slider } from "@/components/ui/";
import { Title1, Title2 } from "@/components/common";
import { Button } from "@/components/ui";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterHotel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    halalFood: true,
    alcoholFree: true,
    priceRange: true,
    facilities: true,
    roomFacilities: true,
  });

  // Get current filter values from URL
  const halalFood = searchParams.get("halalFood")?.split(",") || [];
  const alcoholFree = searchParams.get("alcoholFree")?.split(",") || [];
  const facilities = searchParams.get("facilities")?.split(",") || [];
  const roomFacilities = searchParams.get("roomFacilities")?.split(",") || [];
  const [priceRange, setPriceRange] = useState<[number, number]>(
    searchParams.get("priceRange")
      ? (searchParams.get("priceRange")!.split(",").map(Number) as [
          number,
          number
        ])
      : [5, 1000]
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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

  const handleMinInputChange = (value: string) => {
    const min = Math.min(Number(value), priceRange[1]);
    const newRange: [number, number] = [min, priceRange[1]];
    setPriceRange(newRange);
    updatePriceParams(newRange);
  };

  const handleMaxInputChange = (value: string) => {
    const max = Math.max(Number(value), priceRange[0]);
    const newRange: [number, number] = [priceRange[0], max];
    setPriceRange(newRange);
    updatePriceParams(newRange);
  };

  const updatePriceParams = (range: [number, number]) => {
    const params = new URLSearchParams(searchParams);
    params.set("priceRange", range.join(","));
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const clearAllFilters = () => {
    router.replace("?", { scroll: false });
    setPriceRange([5, 1000]);
  };

  return (
    <aside className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          type="secondary"
          size="sm"
          onClick={clearAllFilters}
          className="text-sm"
        >
          Clear all
        </Button>
      </div>

      {/* Halal Food Filters */}
      <div className="mb-4 border-b border-[#F2F2F2] pb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => toggleSection("halalFood")}
        >
          <Title1 className="font-medium text-[#222]">Halal Food</Title1>
          {expandedSections.halalFood ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.halalFood && (
          <div className="space-y-3 mt-3 pl-1">
            {[
              "Some halal food",
              "Halal food on request",
              "Halal food nearby",
            ].map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <Checkbox
                  id={`halal-${option}`}
                  checked={halalFood.includes(option)}
                  onCheckedChange={() =>
                    handleFilterChange("halalFood", option)
                  }
                  className="w-5 h-5 cursor-pointer"
                />
                <Label
                  htmlFor={`halal-${option}`}
                  className="font-medium text-[#222] cursor-pointer text-sm"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Alcohol-Free Areas Filters */}
      <div className="mb-4 border-b border-[#F2F2F2] pb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => toggleSection("alcoholFree")}
        >
          <Title1 className="font-medium text-[#222]">
            Alcohol-Free Areas
          </Title1>
          {expandedSections.alcoholFree ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.alcoholFree && (
          <div className="space-y-3 mt-3 pl-1">
            {[
              "Alcohol-free property",
              "Alcohol-free restaurant",
              "Alcohol-free room",
            ].map((option) => (
              <div key={option} className="flex items-center space-x-3">
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
                  className="font-medium text-[#222] cursor-pointer text-sm"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-4 border-b border-[#F2F2F2] pb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => toggleSection("priceRange")}
        >
          <Title1 className="font-medium text-[#222]">Price Range</Title1>
          {expandedSections.priceRange ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.priceRange && (
          <div className="mt-3">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-sm">$</span>
                <Input
                  type="number"
                  min={5}
                  max={1000}
                  value={priceRange[0].toString()}
                  onChange={handleMinInputChange}
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
                  onChange={handleMaxInputChange}
                  className="w-20 h-8 text-sm"
                />
              </div>
            </div>
            <Slider
              min={5}
              max={1000}
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              step={1}
              minStepsBetweenThumbs={1}
              className="px-2"
            />
          </div>
        )}
      </div>

      {/* Facilities Filters */}
      <div className="mb-4 border-b border-[#F2F2F2] pb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => toggleSection("facilities")}
        >
          <Title1 className="font-medium text-[#222]">Facilities</Title1>
          {expandedSections.facilities ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.facilities && (
          <div className="space-y-4 mt-3">
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
                <Title2 className="text-[#ADADAD] pl-1 mb-1 text-sm">
                  {category.category}
                </Title2>
                <div className="space-y-2 py-1">
                  {category.options.map((option) => (
                    <div
                      key={option}
                      className="flex items-center space-x-3 pl-1"
                    >
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
                        className="font-medium text-[#222] cursor-pointer text-sm"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Room Facilities Filters */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => toggleSection("roomFacilities")}
        >
          <Title1 className="font-medium text-[#222]">Room Facilities</Title1>
          {expandedSections.roomFacilities ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.roomFacilities && (
          <div className="space-y-3 mt-3 pl-1">
            {[
              "Sea view",
              "Private bathroom",
              "Balcony",
              "Air conditioning",
              "Kitchen/kitchenette",
              "Private pool",
            ].map((option) => (
              <div key={option} className="flex items-center space-x-3">
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
                  className="font-medium text-[#222] cursor-pointer text-sm"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterHotel;
