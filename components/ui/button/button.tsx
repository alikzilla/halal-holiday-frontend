"use client";

import { cn } from "@/core/lib/utils";
import Image from "next/image";
import React, { FC, ReactNode, useState } from "react";

interface IButtonProps {
  children?: ReactNode | string;
  type?:
    | "primary"
    | "secondary"
    | "black"
    | "white"
    | "tertiary"
    | "outline"
    | "gradient"
    | "transparent";
  justIcon?: boolean;
  size?: "sm" | "md";
  leadingIcon?: boolean;
  leading?: string;
  trailingIcon?: boolean;
  trailing?: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  children = "clickme",
  type = "primary",
  justIcon = false,
  size = "md",
  leadingIcon = false,
  leading,
  trailingIcon = false,
  trailing,
  className,
  onClick,
}) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const baseStyles = [
    "flex items-center justify-center gap-2 transition-colors cursor-pointer",
  ];

  const typeStyles = {
    primary:
      "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]",
    secondary:
      "bg-[var(--secondary)] text-[var(--secondary-foreground)] border-[1px] border-[var(--secondary)] hover:border-[#C8C8C8] hover:bg-[var(--secondary-hover)] active:bg-[var(--secondary-active)] active:border-[#919191]",
    black:
      "bg-[var(--black)] text-[var(--black-foreground)] hover:bg-[var(--black-hover)] active:bg-[var(--black-active)]",
    white:
      "bg-[var(--white)] text-[var(--white-foreground)] hover:bg-[var(--white-hover)] active:bg-[var(--white-active)]",
    outline:
      "bg-[#E4ECEC] text-[#266462] border border-[#AEC6C5] hover:bg-white hover:text-[#266462] active:bg-[#266462]",
    tertiary:
      "bg-[var(--tertiary)] text-[var(--tertiary-foreground)] hover:bg-[var(--tertiary-hover)] active:bg-[var(--tertiary-active)]",
    gradient:
      "bg-gradient-to-r text-[var(--gradient-foreground)] bg-[length:200%_200%] bg-[position:100%_100%] hover:bg-[position:0%_0%] transition-all duration-100 ease-in",
    transparent: "bg-transparent",
  };

  const sizeStyles = {
    sm: "py-[6px] px-[12px] text-[12px] rounded-lg font-semibold",
    md: "py-[10px] px-[16px] text-[14px] rounded-xl font-semibold",
  };

  const Icon = ({ name }: { name: string }) => {
    return (
      <Image
        src={`/assets/icons/${name}.svg`}
        alt={name}
        width={size === "md" ? 20 : 16}
        height={size === "md" ? 20 : 16}
        style={{ pointerEvents: "none" }}
      />
    );
  };

  const LeadingIcon = leadingIcon && leading && <Icon name={leading} />;

  const TrailingIcon = trailingIcon && trailing && <Icon name={trailing} />;

  return (
    <button
      className={cn(
        baseStyles,
        typeStyles[type],
        sizeStyles[size],
        justIcon && "p-2",
        className
      )}
      style={{
        backgroundImage:
          type === "gradient"
            ? `var(--gradient${
                type === "gradient"
                  ? hover
                    ? "-hover"
                    : active
                    ? "-active"
                    : ""
                  : ""
              })`
            : undefined,
        backgroundSize: type === "gradient" ? "200% 200%" : undefined,
        backgroundPosition:
          type === "gradient"
            ? hover
              ? "0% 0%"
              : active
              ? "50% 50%"
              : "100% 100%"
            : undefined,
        transition:
          type === "gradient" ? "background-position 1000ms" : undefined,
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {LeadingIcon}
      {!justIcon && children}
      {TrailingIcon}
    </button>
  );
};

export default Button;
