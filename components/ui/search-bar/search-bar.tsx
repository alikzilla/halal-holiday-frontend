"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "../button/button";
import { useEffect, useState } from "react";

import FlightSearchBar from "../../../features/flight/components/flight-bar/flight-bar";
import RentCarSearchBar from "../../../features/rent-car/components/rent-car-bar/rent-car-bar";
import HotelSearchBar from "../../../features/hotel/components/hotel-bar/hotel-bar";
import TourSearchBar from "../../../features/tour/components/tour-bar/tour-bar";
import TransferSearchBar from "../../../features/transfer/components/transfer-bar/transfer-bar";
import ActivitySearchBar from "../../../features/activity/components/activity-bar/activity-bar";

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
  const [windowWidth, setWindowWidth] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
      }
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

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
    <section className="w-full flex flex-col items-start gap-4 p-4 md:p-6 rounded-[12px] bg-white shadow-md">
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          type={showMobileMenu ? "primary" : "secondary"}
          leadingIcon={true}
          leading={showMobileMenu ? "hamburger-white" : "hamburger"}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="w-full justify-center"
        >
          {tabItems.find((item) => isTabActive(item.link))?.title || "Menu"}
        </Button>
      )}

      {/* Tab Items - Desktop */}
      {!isMobile && (
        <div className="w-full flex items-center justify-start gap-2 bg-[#F9F9F9] p-3 rounded-[12px] overflow-x-auto">
          {tabItems.map((item, index) => (
            <Button
              key={index}
              type={isTabActive(item.link) ? "primary" : "secondary"}
              leadingIcon={true}
              leading={isTabActive(item.link) ? item.iconActive : item.icon}
              onClick={() => router.push(item.link)}
              className="whitespace-nowrap"
            >
              {item.title}
            </Button>
          ))}
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobile && showMobileMenu && (
        <div className="w-full flex flex-col items-start gap-2 bg-[#F9F9F9] p-3 rounded-[12px]">
          {tabItems.map((item, index) => (
            <Button
              key={index}
              type={isTabActive(item.link) ? "primary" : "secondary"}
              leadingIcon={true}
              leading={isTabActive(item.link) ? item.iconActive : item.icon}
              onClick={() => {
                router.push(item.link);
                setShowMobileMenu(false);
              }}
              className="w-full justify-start"
            >
              {item.title}
            </Button>
          ))}
        </div>
      )}

      {/* Render the appropriate search bar based on the active tab */}
      {!showMobileMenu && <div className="w-full">{renderSearchBar()}</div>}
    </section>
  );
};

export default SearchBar;
