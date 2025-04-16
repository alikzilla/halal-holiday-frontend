import { cn } from "@/core/lib/utils";
import React, { ReactNode } from "react";

const Heading1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h1 className={cn("text-white font-semibold leading-[129%]")}>{children}</h1>;
};

export default Heading1;
