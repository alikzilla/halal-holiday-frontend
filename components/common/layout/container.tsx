import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-[70px]", className)}
    >
      {children}
    </section>
  );
};

export default Container;
