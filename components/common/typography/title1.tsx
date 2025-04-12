import { cn } from "@/core/lib/utils";
import React, { ReactNode } from "react";

const Title1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-[#222] text-[14px] font-semibold", className)}>
      {children}
    </p>
  );
};

export default Title1;
