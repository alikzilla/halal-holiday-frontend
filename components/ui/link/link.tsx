import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ReactNode } from "react";

const Link = ({
  href,
  children,
  className,
  type = 1,
}: {
  href: string;
  children: ReactNode | string;
  className?: string;
  type?: 1 | 2;
}) => {
  return (
    <NextLink
      href={href}
      className={cn(
        type === 1 ? "text-[14px]" : "text-[12px]",
        className,
        "text-white p-2"
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
