import { cn } from "@/core/lib/utils";
import NextLink from "next/link";
import { ReactNode, forwardRef } from "react";

const Link = forwardRef<
  HTMLAnchorElement,
  {
    href: string;
    children: ReactNode | string;
    className?: string;
    type?: 1 | 2;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
>(
  (
    {
      href,
      children,
      className,
      type = 1,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    return (
      <NextLink
        href={href}
        className={cn(
          "text-white p-2",
          type === 1 ? "text-[14px]" : "text-[12px]",
          className
        )}
        ref={ref}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
