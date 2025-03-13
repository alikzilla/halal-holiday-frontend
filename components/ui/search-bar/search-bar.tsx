"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "../button/button";

import FlightSearchBar from "./flight-bar";
import RentCarSearchBar from "./rent-car-bar";
import HotelSearchBar from "./hotel-bar";
import TourSearchBar from "./tour-bar";
import TransferSearchBar from "./transfer-bar";
import ActivitySearchBar from "./activity-bar";

const tabItems = [
  {
    title: "Hotel",
    icon: "bed",
    link: "/hotel",
    iconActive: "bed-white",
  },
  {
    title: "Flights",
    icon: "airplane",
    link: "/flights",
    iconActive: "airplane-white",
  },
  {
    title: "Rent a Car",
    icon: "car",
    link: "/rent-car",
    iconActive: "car-white",
  },
  {
    title: "Tour",
    icon: "location",
    link: "/tour",
    iconActive: "location-white",
  },
  {
    title: "Transfer",
    icon: "map-arrow",
    link: "/transfer",
    iconActive: "map-arrow-white",
  },
  {
    title: "Activity",
    icon: "congratz",
    link: "/activity",
    iconActive: "congratz-white",
  },
];

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isTabActive = (link: string) => {
    return pathname === link || (pathname === "/" && link === "/hotel");
  };

  const renderSearchBar = () => {
    switch (pathname) {
      case "/":
      case "/hotel":
        return <HotelSearchBar />;
      case "/flights":
        return <FlightSearchBar />;
      case "/rent-car":
        return <RentCarSearchBar />;
      case "/tour":
        return <TourSearchBar />;
      case "/transfer":
        return <TransferSearchBar />;
      case "/activity":
        return <ActivitySearchBar />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full flex flex-col items-start gap-4 p-6 rounded-[12px] bg-white">
      <div className="flex items-center justify-start gap-2 bg-[#F9F9F9] p-3 rounded-[12px]">
        {tabItems.map((item, index) => (
          <Button
            key={index}
            type={isTabActive(item.link) ? "primary" : "secondary"}
            leadingIcon={true}
            leading={isTabActive(item.link) ? item.iconActive : item.icon}
            onClick={() => router.push(item.link)}
          >
            {item.title}
          </Button>
        ))}
      </div>

      {/* Render the appropriate search bar based on the active tab */}
      <div className="w-full">{renderSearchBar()}</div>
    </section>
  );
};

export default SearchBar;
