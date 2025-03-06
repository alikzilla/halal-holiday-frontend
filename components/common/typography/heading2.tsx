import React, { ReactNode } from "react";

const Heading2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-white text-[32px] font-semibold leading-[147%] ${className}`}>
      {children}
    </h2>
  );
};

export default Heading2;
