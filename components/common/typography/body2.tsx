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
    <p
      className={cn(
        "text-white text-[12px] font-semibold leading-[147%]",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Title2;
