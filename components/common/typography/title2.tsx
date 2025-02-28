import React, { ReactNode } from "react";

const Title2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <p className={`text-[12px] font-semibold leading-[110%] ${className}`}>
      {children}
    </p>
  );
};

export default Title2;
