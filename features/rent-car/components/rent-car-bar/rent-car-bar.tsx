"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heading6, Title1 } from "@/components/common";
import { Button } from "@/components/ui";
import { cn } from "@/core/lib/utils";
import { useRouter } from "next/navigation";

const RentCarSearchBar = () => {
  const [isFromModalOpen, setIsFromModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const [fromDestination, setFromDestination] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [carModel, setCarModel] = useState("");

  const router = useRouter();
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFromModal = () => {
    setIsFromModalOpen(!isFromModalOpen);
    setIsDateModalOpen(false);
    setIsCarModalOpen(false);
  };

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
    setIsFromModalOpen(false);
    setIsCarModalOpen(false);
  };

  const toggleCarModal = () => {
    setIsCarModalOpen(!isCarModalOpen);
    setIsFromModalOpen(false);
    setIsDateModalOpen(false);
  };

  const closeFromModal = () => setIsFromModalOpen(false);
  const closeDateModal = () => setIsDateModalOpen(false);
  const closeCarModal = () => setIsCarModalOpen(false);

  const handleFromDestinationSelect = (destination: string) => {
    setFromDestination(destination);
    closeFromModal();
    if (!isMobile) toggleDateModal();
  };

  const handleDateSelect = (pickUp: string, dropOff: string) => {
    setPickUpDate(pickUp);
    setDropOffDate(dropOff);
    closeDateModal();
    if (!isMobile) toggleCarModal();
  };

  const handleCarModalSelect = (carModel: string) => {
    setCarModel(carModel);
  };

  const handleSearchSubmit = () => {
    const queryParams = new URLSearchParams();
    if (fromDestination) queryParams.append("location", fromDestination);
    if (pickUpDate) queryParams.append("pickUp", pickUpDate);
    if (dropOffDate) queryParams.append("dropOff", dropOffDate);
    if (carModel) queryParams.append("model", carModel);

    router.push(`/cars/search?${queryParams.toString()}`);
  };

  return (
    <div className="w-full py-4">
      {/* Mobile: Vertical Layout */}
      {isMobile ? (
        <div className="flex flex-col gap-4">
          {/* From Destination */}
          <div className="relative z-43">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100 p-3"
              onClick={toggleFromModal}
            >
              <Image
                src={"/assets/icons/location.svg"}
                alt={"location"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">Location</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {fromDestination || "Select location"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="relative z-42">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100 p-3"
              onClick={toggleDateModal}
            >
              <Image
                src={"/assets/icons/calendar.svg"}
                alt={"calendar"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">
                  Pick Up / Drop-off
                </Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {pickUpDate && dropOffDate
                    ? `${pickUpDate} - ${dropOffDate}`
                    : "Select dates"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Car Model */}
          <div className="relative z-42">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100 p-3"
              onClick={toggleCarModal}
            >
              <Image
                src={"/assets/icons/car.svg"}
                alt={"car"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">Car Model</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {carModel || "Choose model"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <Button
            type="primary"
            className="w-full py-3"
            onClick={handleSearchSubmit}
          >
            Search Cars
          </Button>
        </div>
      ) : (
        /* Desktop: Horizontal Layout */
        <div className="flex w-full items-center justify-between gap-4">
          {/* From Destination */}
          <div className="relative flex-1 z-43">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
              onClick={toggleFromModal}
            >
              <Image
                src={"/assets/icons/location.svg"}
                alt={"location"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">Location</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {fromDestination || "Select location"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="relative flex-1 z-42">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
              onClick={toggleDateModal}
            >
              <Image
                src={"/assets/icons/calendar.svg"}
                alt={"calendar"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">
                  Pick Up / Drop-off
                </Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {pickUpDate && dropOffDate
                    ? `${pickUpDate} - ${dropOffDate}`
                    : "Select dates"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Car Model */}
          <div className="relative flex-1 z-42">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
              onClick={toggleCarModal}
            >
              <Image
                src={"/assets/icons/car.svg"}
                alt={"car"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">Car Model</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {carModel || "Choose model"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <Button
            type="tertiary"
            justIcon
            leadingIcon
            leading="magnifer"
            className="h-[56px] w-[56px] p-[12px]"
            onClick={handleSearchSubmit}
          />
        </div>
      )}

      {/* Modals */}
      {isFromModalOpen && (
        <Modal
          title="Select Location"
          onClose={closeFromModal}
          onSelect={handleFromDestinationSelect}
          isMobile={isMobile}
        />
      )}

      {isDateModalOpen && (
        <DateModal
          title="Select Dates"
          onClose={closeDateModal}
          onSelect={handleDateSelect}
          isMobile={isMobile}
        />
      )}

      {isCarModalOpen && (
        <CarModal
          onClose={closeCarModal}
          onSelect={handleCarModalSelect}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

// Location Modal Component
const Modal = ({
  isMobile,
  onClose,
  onSelect,
}: {
  title: string;
  isMobile: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSelectedDestination] = useState("");

  // Suggested locations
  const locations = [
    { name: "Tbilisi, Georgia", description: "City Center" },
    { name: "Baku, Azerbaijan", description: "Airport" },
    { name: "Istanbul, Turkey", description: "Downtown" },
    { name: "Batumi, Georgia", description: "Seaside" },
    { name: "London, UK", description: "Heathrow Airport" },
  ];

  // Filter locations based on search query
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle location selection
  const handleSelectDestination = (destination: string) => {
    setSelectedDestination(destination);
    onSelect(destination);
    onClose();
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClose();
    }
  };

  return (
    <div
      className={`absolute ${
        isMobile ? "top-full mt-2 w-full" : "top-[80px] w-[388px]"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search location"
          className="w-full px-3 py-4 border border-[#F2F2F2] rounded-xl mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        {!searchQuery && (
          <Title1 className="text-black mb-6">Suggested locations</Title1>
        )}

        {/* Suggested Locations */}
        <div className="space-y-3">
          {filteredLocations.map((location, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 rounded-full hover:bg-gray-100 cursor-pointer p-2"
              onClick={() => handleSelectDestination(location.name)}
            >
              <Image
                src={"/assets/icons/location.svg"}
                alt={"location"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div>
                <p className="font-medium">{location.name}</p>
                <p className="text-sm text-gray-500">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DateModal = ({
  isMobile,
  onClose,
  onSelect,
}: {
  title: string;
  isMobile: boolean;
  onClose: () => void;
  onSelect: (pickUp: string, dropOff: string) => void;
}) => {
  const [pickUp, setPickUp] = useState<Date | null>(null);
  const [dropOff, setDropOff] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [view, setView] = useState<"calendar" | "year" | "month">("calendar");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 12 },
    (_, i) => new Date().getFullYear() + i
  );

  // Get the number of days in a month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the month (0 = Monday, 1 = Tuesday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    // Adjust to make Monday the first day (0 = Monday, 1 = Tuesday, etc.)
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  // Handle date selection
  const handleDateClick = (date: Date) => {
    if (!pickUp || (pickUp && dropOff)) {
      setPickUp(date);
      setDropOff(null);
    } else if (date > pickUp) {
      setDropOff(date);
    } else {
      setPickUp(date);
      setDropOff(null);
    }
  };

  // Clear selected dates
  const handleClear = () => {
    setPickUp(null);
    setDropOff(null);
  };

  // Apply selected dates
  const handleApply = () => {
    if (pickUp && dropOff) {
      onSelect(
        pickUp.toISOString().split("T")[0],
        dropOff.toISOString().split("T")[0]
      );
    }
    onClose();
  };

  // Go to the previous month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Go to the next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Render the calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Days from the previous month
    const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - 1, prevMonthDays - i);
      days.push(
        <Heading6
          key={`prev-${i}`}
          className="w-[50px] h-[40px] text-[#ADADAD] flex justify-center items-center cursor-pointer rounded-lg gap-0 hover:bg-gray-100"
          onClick={() => handleDateClick(date)}
        >
          {prevMonthDays - i}
        </Heading6>
      );
    }

    // Days from the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isSelected = pickUp && dropOff && date >= pickUp && date <= dropOff;
      const isPickUp = pickUp && date.toDateString() === pickUp.toDateString();
      const isDropOff =
        dropOff && date.toDateString() === dropOff.toDateString();

      days.push(
        <Heading6
          key={i}
          className={`w-[50px] h-[40px] text-[#222222] flex justify-center items-center cursor-pointer rounded-lg gap-0 ${
            isPickUp || isDropOff
              ? "bg-[var(--primary)] text-white"
              : isSelected
              ? "bg-[#F9F9F9] rounded-none"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </Heading6>
      );
    }

    // Days from the next month
    const totalCells = 42; // 6 rows * 7 days
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      days.push(
        <Heading6
          key={`next-${i}`}
          className="w-[50px] h-[40px] text-[#ADADAD] flex justify-center items-center cursor-pointer rounded-lg gap-0 hover:bg-gray-100"
          onClick={() => handleDateClick(date)}
        >
          {i}
        </Heading6>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-4 gap-x-0">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <Heading6 key={day} className="text-center text-[#ADADAD]">
            {day}
          </Heading6>
        ))}
        {days}
      </div>
    );
  };

  // Render the year selection view
  const renderYearView = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {years.map((year) => (
          <Button
            key={year}
            type="secondary"
            className="border hover:bg-[#E4ECEC] hover:border-[#266462] hover:text-[#266462]"
            onClick={() => {
              setCurrentYear(year);
              setView("month"); // Proceed to month selection
            }}
          >
            {year}
          </Button>
        ))}
      </div>
    );
  };

  // Render the month selection view
  const renderMonthView = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => (
          <Button
            key={month}
            type="secondary"
            className="border hover:bg-[#E4ECEC] hover:border-[#266462] hover:text-[#266462]"
            onClick={() => {
              setCurrentMonth(index);
              setView("calendar"); // Return to calendar view
            }}
          >
            {month}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`absolute ${
          isMobile ? "top-full mt-2 w-full" : "top-[80px] w-[388px]"
        }`}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white p-4 rounded-xl shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Month Navigation and Selection */}
          <div className="flex justify-between items-center mb-4">
            {/* Previous Month Button */}
            <Button
              type="secondary"
              justIcon
              leadingIcon
              leading="arrow-left"
              onClick={handlePrevMonth}
            />

            {/* Select Month and Year Button */}
            <Button type="secondary" onClick={() => setView("year")}>
              {months[currentMonth]} {currentYear}
            </Button>

            {/* Next Month Button */}
            <Button
              type="secondary"
              justIcon
              leadingIcon
              leading="arrow-right"
              onClick={handleNextMonth}
            />
          </div>

          {/* Calendar, Year, or Month View */}
          {view === "calendar" && renderCalendar()}
          {view === "year" && renderYearView()}
          {view === "month" && renderMonthView()}

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <Button type="secondary" className="flex-1" onClick={handleClear}>
              Clear
            </Button>
            <Button type="primary" className="flex-1" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const CarModal = ({
  isMobile,
  onClose,
  onSelect,
}: {
  isMobile: boolean;
  onClose: () => void;
  onSelect: (carModel: string) => void;
}) => {
  const carModels = [
    "Economy",
    "Compact",
    "Mid-size",
    "Full-size",
    "SUV",
    "Luxury",
    "Convertible",
    "Minivan",
  ];

  const handleSelectCar = (model: string) => {
    onSelect(model);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`absolute ${
          isMobile ? "top-full mt-2 w-full" : "top-[80px] right-[50px] w-94"
        }`}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className="absolute z-20 top-[80px] right-[50px] bg-white p-4 w-94 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Title1 className="text-black mb-6">Select Car Model</Title1>
        <div className="grid grid-cols-2 gap-4">
          {carModels.map((model) => (
            <Button
              key={model}
              type="secondary"
              className="flex items-center justify-center gap-2 p-3"
              onClick={() => handleSelectCar(model)}
            >
              <Image
                src={"/assets/icons/car.svg"}
                alt={"car"}
                width={24}
                height={24}
              />
              {model}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default RentCarSearchBar;
