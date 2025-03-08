import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Heading3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={(cn("text-[24px] font-semibold leading-[147%]"), className)}>
      {children}
    </h2>
  );
};

export default Heading3;
