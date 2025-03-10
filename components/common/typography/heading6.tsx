import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Heading6 = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <h2
      className={cn(
        "text-white text-[14px] font-medium leading-[147%]",
        className
      )}
      onClick={onClick}
    >
      {children}
    </h2>
  );
};

export default Heading6;
