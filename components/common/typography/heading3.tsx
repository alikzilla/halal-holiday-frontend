import { cn } from "@/core/lib/utils";
import React, { ReactNode } from "react";

const Heading3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={
        (cn("text-[#222] text-[24px] font-semibold leading-[147%]"), className)
      }
    >
      {children}
    </h3>
  );
};

export default Heading3;
