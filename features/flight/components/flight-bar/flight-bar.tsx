"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heading6, Title1, Title2 } from "@/components/common";
import { Button } from "@/components/ui";
import { cn } from "@/core/lib/utils";
import { useRouter } from "next/navigation";

const FlightSearchBar = () => {
  const [isFromModalOpen, setIsFromModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

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
    setIsToModalOpen(false);
    setIsDateModalOpen(false);
    setIsGuestsModalOpen(false);
  };

  const toggleToModal = () => {
    setIsToModalOpen(!isToModalOpen);
    setIsFromModalOpen(false);
    setIsDateModalOpen(false);
    setIsGuestsModalOpen(false);
  };

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
    setIsFromModalOpen(false);
    setIsToModalOpen(false);
    setIsGuestsModalOpen(false);
  };

  const togglePassengersModal = () => {
    setIsGuestsModalOpen(!isGuestsModalOpen);
    setIsFromModalOpen(false);
    setIsToModalOpen(false);
    setIsDateModalOpen(false);
  };

  const closeFromModal = () => setIsFromModalOpen(false);
  const closeToModal = () => setIsToModalOpen(false);
  const closeDateModal = () => setIsDateModalOpen(false);
  const closePassengersModal = () => setIsGuestsModalOpen(false);

  const handleFromDestinationSelect = (destination: string) => {
    setFromDestination(destination);
    closeFromModal();
    if (!isMobile) toggleToModal();
  };

  const handleToDestinationSelect = (destination: string) => {
    setToDestination(destination);
    closeToModal();
    if (!isMobile) toggleDateModal();
  };

  const handleDateSelect = (departure: string, returnDate: string) => {
    setDepartureDate(departure);
    setReturnDate(returnDate);
    closeDateModal();
    if (!isMobile) togglePassengersModal();
  };

  const handlePassengersSelect = (passengers: {
    adults: number;
    children: number;
    infants: number;
  }) => {
    setPassengers(passengers);
  };

  const handleSearchSubmit = () => {
    const queryParams = new URLSearchParams();
    if (fromDestination) queryParams.append("from", fromDestination);
    if (toDestination) queryParams.append("to", toDestination);
    if (departureDate) queryParams.append("departure", departureDate);
    if (returnDate) queryParams.append("return", returnDate);
    queryParams.append("adults", passengers.adults.toString());
    queryParams.append("children", passengers.children.toString());
    queryParams.append("infants", passengers.infants.toString());

    router.push(`/flight/search?${queryParams.toString()}`);
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
                <Heading6 className="text-[#ADADAD]">From</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {fromDestination || "Select origin"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* To Destination */}
          <div className="relative z-43">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100 p-3"
              onClick={toggleToModal}
            >
              <Image
                src={"/assets/icons/location.svg"}
                alt={"location"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">To</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {toDestination || "Select destination"}
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
                  Departure / Return
                </Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {departureDate && returnDate
                    ? `${departureDate} - ${returnDate}`
                    : "Select dates"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Passengers */}
          <div className="relative z-42">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100 p-3"
              onClick={togglePassengersModal}
            >
              <Image
                src={"/assets/icons/user.svg"}
                alt={"user"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">Passengers</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {passengers.adults + passengers.children > 0
                    ? `${passengers.adults + passengers.children} passengers`
                    : "Add passengers"}
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
            Search Flights
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
                <Heading6 className="text-[#ADADAD]">From</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {fromDestination || "Select origin"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* To Destination */}
          <div className="relative flex-1 z-43">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
              onClick={toggleToModal}
            >
              <Image
                src={"/assets/icons/location.svg"}
                alt={"location"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">To</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {toDestination || "Select destination"}
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
                  Departure / Return
                </Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {departureDate && returnDate
                    ? `${departureDate} - ${returnDate}`
                    : "Select dates"}
                </Heading6>
              </div>
            </div>
          </div>

          {/* Passengers */}
          <div className="relative flex-1 z-42">
            <div
              className="flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
              onClick={togglePassengersModal}
            >
              <Image
                src={"/assets/icons/user.svg"}
                alt={"user"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div className="flex flex-col">
                <Heading6 className="text-[#ADADAD]">Passengers</Heading6>
                <Heading6 className="text-[#4C4C4C]">
                  {passengers.adults + passengers.children > 0
                    ? `${passengers.adults + passengers.children} passengers`
                    : "Add passengers"}
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
          title="Select Origin"
          onClose={closeFromModal}
          onSelect={handleFromDestinationSelect}
          isMobile={isMobile}
        />
      )}

      {isToModalOpen && (
        <Modal
          title="Select Destination"
          onClose={closeToModal}
          onSelect={handleToDestinationSelect}
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

      {isGuestsModalOpen && (
        <PassengersModal
          onClose={closePassengersModal}
          onSelect={handlePassengersSelect}
          initialPassengers={passengers}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

// Destination Modal Component
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

  // Suggested destinations
  const destinations = [
    { name: "Tbilisi, Georgia", description: "Family Friendly" },
    { name: "Baku, Azerbaijan", description: "For night life" },
    { name: "Istanbul, Turkey", description: "Popular destination" },
    { name: "Batumi, Georgia", description: "Coastal city" },
    { name: "London, UK", description: "International hub" },
  ];

  // Filter destinations based on search query
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle destination selection
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
          placeholder="Search destination"
          className="w-full px-3 py-4 border border-[#F2F2F2] rounded-xl mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        {!searchQuery && (
          <Title1 className="text-black mb-6">Suggested destinations</Title1>
        )}

        {/* Suggested Destinations */}
        <div className="space-y-3">
          {filteredDestinations.map((destination, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 rounded-full hover:bg-gray-100 cursor-pointer p-2"
              onClick={() => handleSelectDestination(destination.name)}
            >
              <Image
                src={"/assets/icons/location.svg"}
                alt={"location"}
                width={44}
                height={44}
                className="bg-[#F9F9F9] rounded-full p-2"
              />
              <div>
                <p className="font-medium">{destination.name}</p>
                <p className="text-sm text-gray-500">
                  {destination.description}
                </p>
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
  onSelect: (departure: string, returnDate: string) => void;
}) => {
  const [departure, setDeparture] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [view, setView] = useState<"calendar" | "year" | "month">("calendar");
  const [activeTab, setActiveTab] = useState<"calendar" | "flexible">(
    "calendar"
  );

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
    if (!departure || (departure && returnDate)) {
      setDeparture(date);
      setReturnDate(null);
    } else if (date > departure) {
      setReturnDate(date);
    } else {
      setDeparture(date);
      setReturnDate(null);
    }
  };

  // Clear selected dates
  const handleClear = () => {
    setDeparture(null);
    setReturnDate(null);
  };

  // Apply selected dates
  const handleApply = () => {
    if (departure && returnDate) {
      onSelect(
        departure.toISOString().split("T")[0],
        returnDate.toISOString().split("T")[0]
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
      const isSelected =
        departure && returnDate && date >= departure && date <= returnDate;
      const isDeparture =
        departure && date.toDateString() === departure.toDateString();
      const isReturn =
        returnDate && date.toDateString() === returnDate.toDateString();

      days.push(
        <Heading6
          key={i}
          className={`w-[50px] h-[40px] text-[#222222] flex justify-center items-center cursor-pointer rounded-lg gap-0 ${
            isDeparture || isReturn
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

  const renderCalendarTab = () => {
    return (
      <>
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
      </>
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
          {/* Calendar Tab */}
          {renderCalendarTab()}

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

const PassengersModal = ({
  initialPassengers,
  isMobile,
  onClose,
  onSelect,
}: {
  initialPassengers: {
    adults: number;
    children: number;
    infants: number;
  };
  isMobile: boolean;
  onClose: () => void;
  onSelect: (count: {
    adults: number;
    children: number;
    infants: number;
  }) => void;
}) => {
  const [adults, setAdults] = useState(initialPassengers.adults);
  const [children, setChildren] = useState(initialPassengers.children);
  const [infants, setInfants] = useState(initialPassengers.infants);

  const handleIncrement = (category: string) => {
    let updatedAdults = adults;
    let updatedChildren = children;
    let updatedInfants = infants;

    switch (category) {
      case "adults":
        updatedAdults = adults + 1;
        setAdults(updatedAdults);
        break;
      case "children":
        updatedChildren = children + 1;
        setChildren(updatedChildren);
        break;
      case "infants":
        updatedInfants = infants + 1;
        setInfants(updatedInfants);
        break;
      default:
        break;
    }

    onSelect({
      adults: updatedAdults,
      children: updatedChildren,
      infants: updatedInfants,
    });
  };

  const handleDecrement = (category: string) => {
    let updatedAdults = adults;
    let updatedChildren = children;
    let updatedInfants = infants;

    switch (category) {
      case "adults":
        updatedAdults = Math.max(1, adults - 1); // At least 1 adult
        setAdults(updatedAdults);
        break;
      case "children":
        updatedChildren = Math.max(0, children - 1);
        setChildren(updatedChildren);
        break;
      case "infants":
        updatedInfants = Math.max(0, infants - 1);
        setInfants(updatedInfants);
        break;
      default:
        break;
    }

    onSelect({
      adults: updatedAdults,
      children: updatedChildren,
      infants: updatedInfants,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`absolute ${
          isMobile ? "top-full mt-2 w-full" : "top-[80px] right-[50px] w-94"
        }`}
        onClick={handleBackdropClick}
      />
      {/* Modal */}
      <div
        className="absolute z-20 top-[80px] right-[50px] bg-white p-4 w-94 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Adults Counter */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <Heading6 className="text-[#222222]">Adults</Heading6>
            <Title2 className="text-[#C8C8C8]">Ages 12 or above</Title2>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="secondary"
              onClick={() => handleDecrement("adults")}
              className="w-[36px] h-[36px] p-2"
            >
              <Image
                src={"/assets/icons/minus.svg"}
                alt={"minus"}
                width={30}
                height={30}
              />
            </Button>
            <Title1 className="w-[20px] text-center text-[#222222]">
              {adults}
            </Title1>
            <Button
              type="primary"
              onClick={() => handleIncrement("adults")}
              className="w-[36px] h-[36px] p-2"
            >
              <Image
                src={"/assets/icons/plus-white.svg"}
                alt={"minus"}
                width={30}
                height={30}
              />
            </Button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#F2F2F2] mb-4" />

        {/* Children Counter */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <Heading6 className="text-[#222222]">Children</Heading6>
            <Title2 className="text-[#C8C8C8]">Ages 2 - 11</Title2>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="secondary"
              onClick={() => handleDecrement("children")}
              className="w-[36px] h-[36px] p-2"
            >
              <Image
                src={"/assets/icons/minus.svg"}
                alt={"minus"}
                width={30}
                height={30}
              />
            </Button>
            <Title1 className="w-[20px] text-center text-[#222222]">
              {children}
            </Title1>
            <Button
              type="primary"
              onClick={() => handleIncrement("children")}
              className="w-[36px] h-[36px] p-2"
            >
              <Image
                src={"/assets/icons/plus-white.svg"}
                alt={"minus"}
                width={30}
                height={30}
              />
            </Button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#F2F2F2] mb-4" />

        {/* Infants Counter */}
        <div className="flex items-center justify-between">
          <div>
            <Heading6 className="text-[#222222]">Infants</Heading6>
            <Title2 className="text-[#C8C8C8]">Under 2</Title2>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="secondary"
              onClick={() => handleDecrement("infants")}
              className="w-[36px] h-[36px] p-2"
            >
              <Image
                src={"/assets/icons/minus.svg"}
                alt={"minus"}
                width={30}
                height={30}
              />
            </Button>
            <Title1 className="w-[20px] text-center text-[#222222]">
              {infants}
            </Title1>
            <Button
              type="primary"
              onClick={() => handleIncrement("infants")}
              className="w-[36px] h-[36px] p-2"
            >
              <Image
                src={"/assets/icons/plus-white.svg"}
                alt={"minus"}
                width={30}
                height={30}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearchBar;
