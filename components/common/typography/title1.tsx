import React, { ReactNode } from "react";

const Title1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <p className={`text-[14px] font-semibold ${className}`}>{children}</p>;
};

export default Title1;
