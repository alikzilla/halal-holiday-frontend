import React, { ReactNode } from "react";

const Heading6 = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <h2 className={`text-[14px] font-medium leading-[147%] ${className}`}>
      {children}
    </h2>
  );
};

export default Heading6;
