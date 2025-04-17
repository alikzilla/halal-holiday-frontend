"use client";

import React, { useState } from "react";
import { Heading5 } from "@/components/common";
import { Button } from "@/components/ui";

const CatalogHeader = ({
  count,
  onLayoutChange,
  isMobile,
}: {
  count: number;
  onLayoutChange: (layout: "grid" | "flex") => void;
  isMobile: boolean;
}) => {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");

  const handleLayoutChange = (newLayout: "grid" | "flex") => {
    setLayout(newLayout);
    onLayoutChange(newLayout);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
      <span className="inline-flex gap-1">
        <Heading5 className="text-[#222]">{count}</Heading5> properties found
      </span>

      {!isMobile && (
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
      )}
    </div>
  );
};

export default CatalogHeader;
