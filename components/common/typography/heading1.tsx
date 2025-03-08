import React, { ReactNode } from "react";

const Heading1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-white text-[48px] font-semibold leading-[129%] ${className}`}>
      {children}
    </h1>
  );
};

export default Heading1;
