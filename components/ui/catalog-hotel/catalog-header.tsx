"use client";

import React, { useState } from "react";

const CatalogHeader = ({
  onLayoutChange,
}: {
  onLayoutChange: (layout: "grid" | "flex") => void;
}) => {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");

  const handleLayoutChange = (newLayout: "grid" | "flex") => {
    setLayout(newLayout);
    onLayoutChange(newLayout);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <span>1,397 properties found</span>
      <div className="flex space-x-2">
        <button
          onClick={() => handleLayoutChange("grid")}
          className={`p-2 ${layout === "grid" ? "bg-gray-200" : "bg-white"}`}
        >
          Grid
        </button>
        <button
          onClick={() => handleLayoutChange("flex")}
          className={`p-2 ${layout === "flex" ? "bg-gray-200" : "bg-white"}`}
        >
          Flex
        </button>
      </div>
    </div>
  );
};

export default CatalogHeader;
