"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Checkbox, Label } from "@/components/ui/";
import { Title1 } from "@/components/common";

const FilterHotel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category")?.split(",") || [];
  const alcoholFree = searchParams.get("alcoholFree")?.split(",") || [];
  const reviewScore = searchParams.get("reviewScore")?.split(",") || [];
  const timeOfTheDay = searchParams.get("timeOfTheDay")?.split(",") || [];
  const languages = searchParams.get("languages")?.split(",") || [];
  const brand = searchParams.get("brand")?.split(",") || [];

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

  return (
    <aside className="w-[272px] p-4 bg-white">
      {/* Category Filters */}
      <div className="mb-6">
        <Title1 className="mb-2">Category</Title1>
        <div className="space-y-2 py-2">
          {[
            "Entertainment & tickets",
            "Nature & outdoor",
            "Museums, arts & culture",
            "Gardens & parks",
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`halal-${option}`}
                checked={category.includes(option)}
                onCheckedChange={() => handleFilterChange("category", option)}
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
        <Title1 className="mb-2">Alcohol-free areas</Title1>

        <div className="space-y-2 py-2">
          {["Deals & discounts", "Free cancellation"].map((option) => (
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
      <div className="border-t border-gray-200 my-6"></div>

      {/* Review score Filters */}
      <div className="mb-6">
        <Title1 className="mb-2">Review score</Title1>
        <div className="space-y-2 py-2">
          {["4.5 & up", "4 - 4.4", "3.5 - 3.9", "3 - 3.4"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`room-${option}`}
                checked={reviewScore.includes(option)}
                onCheckedChange={() =>
                  handleFilterChange("reviewScore", option)
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

      {/* Separator */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Time of the day Filters */}
      <div className="mb-6">
        <Title1 className="mb-2">Time of the day</Title1>
        <div className="space-y-2 py-2">
          {[
            "Morning(till 12:00)",
            "Afternoon(after 12:00)",
            "Evening & night(after 18:00)",
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`room-${option}`}
                checked={timeOfTheDay.includes(option)}
                onCheckedChange={() =>
                  handleFilterChange("timeOfTheDay", option)
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

      {/* Separator */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Languages Filters */}
      <div className="mb-6">
        <Title1 className="mb-2">Languages</Title1>
        <div className="space-y-2 py-2">
          {["English", "Russian", "Arabic", "Turkish", "Spanish", "German"].map(
            (option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`room-${option}`}
                  checked={languages.includes(option)}
                  onCheckedChange={() =>
                    handleFilterChange("languages", option)
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
            )
          )}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Brand Filters */}
      <div className="mb-6">
        <Title1 className="mb-2">Brand</Title1>
        <div className="space-y-2 py-2">
          {[
            "ExploreVista",
            "Expedia",
            "TripAdvisor",
            "Aman Resorts",
            "REI Adventures",
          ].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`room-${option}`}
                checked={brand.includes(option)}
                onCheckedChange={() => handleFilterChange("brand", option)}
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
