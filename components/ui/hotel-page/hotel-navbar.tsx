import React from "react";

const HotelNavbar = () => {
  const sections = [
    "Overview",
    "Rooms",
    "Halal Friendly Features",
    "Location",
    "Hotel Surroundings",
    "Reviews",
    "General Facilities",
    "Map",
    "Things to Know",
    "FAQ",
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-[80px] bg-white shadow-md z-40">
      <div className="container mx-auto flex overflow-x-auto py-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() =>
              handleScroll(section.toLowerCase().replace(/ /g, "-"))
            }
            className="px-4 py-2 whitespace-nowrap hover:bg-gray-100"
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default HotelNavbar;
