"use client";

import React, { useState, useEffect, useRef } from "react";

const HotelNavbar = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const navRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = React.useMemo(
    () => [
      "Overview",
      "Rooms",
      "Halal Friendly Features",
      "Hotel Surroundings",
      "Reviews",
      "General Facilities",
      "Map",
      "Things to Know",
    ],
    []
  );

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const updateUnderlinePosition = () => {
      if (!navRef.current || !underlineRef.current) return;

      const activeIndex = sections.findIndex(
        (s) => s.toLowerCase().replace(/ /g, "-") === activeSection
      );

      if (activeIndex === -1) return;

      underlineRef.current.style.transform = `translateX(calc(${
        activeIndex * 100
      }%))`;
    };

    const handleScroll = () => {
      const offset = 200;
      const scrollPosition = window.scrollY + offset;

      for (const section of sections) {
        const id = section.toLowerCase().replace(/ /g, "-");
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateUnderlinePosition();
    window.addEventListener("resize", updateUnderlinePosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateUnderlinePosition);
    };
  }, [activeSection, sections]);

  return (
    <nav className="sticky top-[80px] bg-white z-40 border-b border-gray-100 w-full overflow-x-auto">
      <div ref={containerRef} className="w-full relative">
        <div ref={navRef} className="flex w-max md:w-full relative min-w-full">
          {sections.map((section) => {
            const sectionId = section.toLowerCase().replace(/ /g, "-");
            return (
              <button
                key={sectionId}
                onClick={() => handleScroll(sectionId)}
                className={`flex-1 text-sm text-center px-3 py-4 whitespace-nowrap transition-colors duration-200 min-w-[120px] ${
                  activeSection === sectionId
                    ? "text-[#222] font-medium"
                    : "text-gray-500 hover:text-[#222]"
                }`}
              >
                {section.split(" ")[0]}
              </button>
            );
          })}

          <div
            ref={underlineRef}
            className="absolute z-2 bottom-0 h-[2px] bg-[#222] transition-all duration-300 ease-out"
            style={{
              width: `${100 / sections.length}%`,
              transform: "translateX(0)",
            }}
          />

          <div className="absolute z-1 bottom-0 left-0 right-1 h-[2px] bg-gray-50 transition-all duration-300 ease-out" />
        </div>
      </div>
    </nav>
  );
};

export default HotelNavbar;
