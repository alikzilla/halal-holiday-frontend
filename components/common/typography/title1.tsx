import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Title1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-white text-[14px] font-semibold", className)}>
      {children}
    </p>
  );
};

export default Title1;
