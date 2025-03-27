"use client";

import React from "react";
import Link from "../link/link";
import { usePathname } from "next/navigation";
import { Heading6 } from "@/components/common";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const items = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return {
      title: segment.replace(/-/g, " "),
      href,
      isCurrent: index === pathSegments.length - 1,
    };
  });

  // Function to capitalize each word
  const capitalize = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section className="flex items-center space-x-2 text-sm py-4">
      <Link href="/">
        <Heading6
          className={`${
            pathSegments.length === 0 ? "text-black" : "text-[#ADADAD]"
          } hover:text-gray-900 cursor-pointer`}
        >
          {capitalize("home")}
        </Heading6>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3.83331L10 8.49998L6 13.1666"
              stroke="#ADADAD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href={item.href}>
            <Heading6
              className={`${
                item.isCurrent ? "text-black" : "text-[#ADADAD]"
              } hover:text-gray-900 cursor-pointer transition-all duration-300`}
            >
              {capitalize(item.title)}
            </Heading6>
          </Link>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Breadcrumb;
