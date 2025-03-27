import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Title2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-[#222] text-[12px] font-normal leading-[110%]", className)}>
      {children}
    </p>
  );
};

export default Title2;
