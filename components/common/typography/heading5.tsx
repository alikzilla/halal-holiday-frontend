import React, { ReactNode } from "react";

const Heading5 = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <h2 className={`text-[16px] font-semibold leading-[147%] ${className}`}>
      {children}
    </h2>
  );
};

export default Heading5;
