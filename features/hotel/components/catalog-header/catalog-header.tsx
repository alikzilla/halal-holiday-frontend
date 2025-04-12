"use client";

import React, { useState } from "react";
import { Heading5 } from "@/components/common";
import { Button } from "@/components/ui";

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
      <span className="inline-flex gap-1">
        <Heading5 className="text-[#222]">1,397</Heading5> properties found
      </span>
      <div className="flex space-x-2">
        <Button
          justIcon
          type={layout === "grid" ? "primary" : "secondary"}
          trailingIcon
          trailing={layout === "grid" ? "widget-white" : "widget"}
          onClick={() => handleLayoutChange("grid")}
        >
          Grid
        </Button>
        <Button
          justIcon
          type={layout === "flex" ? "primary" : "secondary"}
          trailingIcon
          trailing={layout === "flex" ? "hamburger-white" : "hamburger"}
          onClick={() => handleLayoutChange("flex")}
        >
          Flex
        </Button>
      </div>
    </div>
  );
};

export default CatalogHeader;
