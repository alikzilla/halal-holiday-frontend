import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Heading4 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-white text-[20px] font-semibold leading-[120%]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading4;
