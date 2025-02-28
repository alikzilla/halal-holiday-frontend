import React, { ReactNode } from "react";

const Title3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <p className={`text-[10px] font-semibold leading-[110%] ${className}`}>
      {children}
    </p>
  );
};

export default Title3;
