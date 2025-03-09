import { useState } from "react";
import Button from "../button/button";
import Image from "next/image";
import { Heading6, Title1, Title2 } from "@/components/common";

const HotelSearchBar = () => {
  const [isFromModalOpen, setIsFromModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState<{
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }>({ adults: 0, children: 0, infants: 0, pets: 0 });

  // const openFromModal = () => setIsFromModalOpen(true);
  const openToModal = () => setIsToModalOpen(true);
  const openDateModal = () => setIsDateModalOpen(true);
  const openGuestsModal = () => setIsGuestsModalOpen(true);

  const toggleFromModal = () => {
    setIsFromModalOpen(!isFromModalOpen);
    closeToModal();
    closeDateModal();
    closeGuestsModal();
  };

  const toggleToModal = () => {
    setIsToModalOpen(!isToModalOpen);
    closeFromModal();
    closeDateModal();
    closeGuestsModal();
  };

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
    closeFromModal();
    closeToModal();
    closeGuestsModal();
  };

  const toggleGuestsModal = () => {
    setIsGuestsModalOpen(!isGuestsModalOpen);
    closeFromModal();
    closeToModal();
    closeDateModal();
  };

  const closeFromModal = () => setIsFromModalOpen(false);
  const closeToModal = () => setIsToModalOpen(false);
  const closeDateModal = () => setIsDateModalOpen(false);
  const closeGuestsModal = () => setIsGuestsModalOpen(false);

  const handleFromDestinationSelect = (destination: string) => {
    setFromDestination(destination);
    closeFromModal();
    openToModal();
  };

  const handleToDestinationSelect = (destination: string) => {
    setToDestination(destination);
    closeToModal();
    openDateModal();
  };

  const handleDateSelect = (checkIn: string, checkOut: string) => {
    setCheckInDate(checkIn);
    setCheckOutDate(checkOut);
    closeDateModal();
    openGuestsModal();
  };

  const handleGuestsSelect = (guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }) => {
    setGuests(guests); // Update the guests state
    console.log("Selected Guests:", guests);
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between gap-4">
        {/* From Destination Button */}
        <div className="relative flex-1 z-13">
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
                {fromDestination || "Select destination"}
              </Heading6>
            </div>
          </div>

          {isFromModalOpen && (
            <Modal
              title="Select From Destination"
              onClose={closeFromModal}
              onSelect={handleFromDestinationSelect}
            />
          )}
        </div>

        {/* To Destination Button */}
        <div className="relative flex-1 z-13">
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

          {isToModalOpen && (
            <Modal
              title="Select To Destination"
              onClose={closeToModal}
              onSelect={handleToDestinationSelect}
            />
          )}
        </div>

        {/* Date Check-in/Check-out Button */}
        <div className="relative flex-1 z-12">
          <div
            className="relative z-14 flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
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
                Check in / Check out
              </Heading6>
              <Heading6 className="text-[#4C4C4C]">
                {checkInDate && checkOutDate
                  ? `${checkInDate} - ${checkOutDate}`
                  : "Select dates"}
              </Heading6>
            </div>
          </div>

          {isDateModalOpen && (
            <DateModal
              title="Select Dates"
              onClose={closeDateModal}
              onSelect={handleDateSelect}
            />
          )}
        </div>

        {/* Add Guests Button */}
        <div className="relative flex-1 z-12">
          <div
            className="relative z-12 flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
            onClick={toggleGuestsModal}
          >
            <Image
              src={"/assets/icons/user.svg"}
              alt={"user"}
              width={44}
              height={44}
              className="bg-[#F9F9F9] rounded-full p-2"
            />
            <div className="flex flex-col">
              <Heading6 className="text-[#ADADAD]">Who</Heading6>
              <Heading6 className="text-[#4C4C4C]">
                {guests.adults + guests.children > 0
                  ? `${guests.adults + guests.children} guests`
                  : "Add guests"}
              </Heading6>
            </div>
          </div>

          {isGuestsModalOpen && (
            <GuestsModal
              onClose={closeGuestsModal}
              onSelect={handleGuestsSelect}
              initialGuests={guests}
            />
          )}
        </div>

        {/* Search Button */}
        <Button
          type="tertiary"
          justIcon
          leadingIcon
          leading="magnifer"
          className="h-[56px] w-[56px] p-[12px]"
        />
      </div>
    </div>
  );
};

// Destination Modal Component
const Modal = ({
  onClose,
  onSelect,
}: {
  title: string;
  onClose: () => void;
  onSelect: (value: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSelectedDestination] = useState("");

  // Suggested destinations
  const destinations = [
    { name: "Tbilisi, Georgia", description: "Family Friendly" },
    { name: "Baku, Azerbaijan", description: "For night life" },
    { name: "Istanbul, Turkey", description: "Popular beach placing" },
    { name: "Batumi, Georgia", description: "For muslim people" },
    { name: "London, UK", description: "For architecture" },
  ];

  // Filter destinations based on search query
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle destination selection
  const handleSelectDestination = (destination: string) => {
    setSelectedDestination(destination);
    onSelect(destination); // Pass the selected destination to the parent
    onClose(); // Close the modal after selection
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClose(); // Close the modal on Enter
    }
  };

  return (
    <div className="absolute top-[80px] flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-[388px] shadow-lg">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search destination"
          className="w-full px-3 py-4 border border-[#F2F2F2] rounded-xl mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <Title1 className="text-black mb-6">Suggested destinations</Title1>
        {/* Suggested Destinations */}
        <div className="space-y-3">
          {filteredDestinations.map((destination, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 rounded-full hover:bg-gray-100 rounded cursor-pointer"
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
  title,
  onClose,
  onSelect,
}: {
  title: string;
  onClose: () => void;
  onSelect: (checkIn: string, checkOut: string) => void;
}) => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [view, setView] = useState<"calendar" | "year" | "month">("calendar");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const years = Array.from({ length: 12 }, (_, i) => currentYear - 6 + i);

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
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (date > checkIn) {
      setCheckOut(date);
    } else {
      setCheckIn(date);
      setCheckOut(null);
    }
  };

  // Clear selected dates
  const handleClear = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  // Apply selected dates
  const handleApply = () => {
    if (checkIn && checkOut) {
      onSelect(checkIn.toISOString().split("T")[0], checkOut.toISOString().split("T")[0]);
      onClose();
    }
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
        <div
          key={`prev-${i}`}
          className="text-center p-2 text-gray-400 cursor-pointer hover:bg-gray-100"
          onClick={() => handleDateClick(date)}
        >
          {prevMonthDays - i}
        </div>
      );
    }

    // Days from the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isSelected =
        checkIn &&
        checkOut &&
        date >= checkIn &&
        date <= checkOut;
      const isCheckIn = checkIn && date.toDateString() === checkIn.toDateString();
      const isCheckOut = checkOut && date.toDateString() === checkOut.toDateString();

      days.push(
        <div
          key={i}
          className={`text-center p-2 cursor-pointer ${
            isSelected
              ? "bg-blue-100"
              : isCheckIn || isCheckOut
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    // Days from the next month
    const totalCells = 42; // 6 rows * 7 days
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      days.push(
        <div
          key={`next-${i}`}
          className="text-center p-2 text-gray-400 cursor-pointer hover:bg-gray-100"
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
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
          <div
            key={year}
            className="text-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setCurrentYear(year);
              setView("month"); // Proceed to month selection
            }}
          >
            {year}
          </div>
        ))}
      </div>
    );
  };

  // Render the month selection view
  const renderMonthView = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => (
          <div
            key={month}
            className="text-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setCurrentMonth(index);
              setView("calendar"); // Return to calendar view
            }}
          >
            {month}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute top-[80px] flex items-center justify-center z-50"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white p-6 rounded-lg w-96 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-bold mb-4">{title}</h2>

          {/* Month Navigation and Selection */}
          <div className="flex justify-between items-center mb-4">
            {/* Previous Month Button */}
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded"
            >
              {"<"}
            </button>

            {/* Select Month and Year Button */}
            <button
              onClick={() => setView("year")}
              className="p-2 hover:bg-gray-100 rounded"
            >
              {months[currentMonth]} {currentYear}
            </button>

            {/* Next Month Button */}
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded"
            >
              {">"}
            </button>
          </div>

          {/* Calendar, Year, or Month View */}
          {view === "calendar" && renderCalendar()}
          {view === "year" && renderYearView()}
          {view === "month" && renderMonthView()}

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <Button type="secondary" onClick={handleClear}>
              Clear
            </Button>
            <Button type="primary" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const GuestsModal = ({
  onClose,
  onSelect,
  initialGuests,
}: {
  onClose: () => void;
  onSelect: (count: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }) => void;
  initialGuests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
}) => {
  const [adults, setAdults] = useState(initialGuests.adults);
  const [children, setChildren] = useState(initialGuests.children);
  const [infants, setInfants] = useState(initialGuests.infants);
  const [pets, setPets] = useState(initialGuests.pets);

  const handleIncrement = (category: string) => {
    let updatedAdults = adults;
    let updatedChildren = children;
    let updatedInfants = infants;
    let updatedPets = pets;

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
      case "pets":
        updatedPets = pets + 1;
        setPets(updatedPets);
        break;
      default:
        break;
    }

    // Use the updated values directly
    onSelect({
      adults: updatedAdults,
      children: updatedChildren,
      infants: updatedInfants,
      pets: updatedPets,
    });
  };

  const handleDecrement = (category: string) => {
    let updatedAdults = adults;
    let updatedChildren = children;
    let updatedInfants = infants;
    let updatedPets = pets;

    switch (category) {
      case "adults":
        updatedAdults = Math.max(0, adults - 1);
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
      case "pets":
        updatedPets = Math.max(0, pets - 1);
        setPets(updatedPets);
        break;
      default:
        break;
    }

    // Use the updated values directly
    onSelect({
      adults: updatedAdults,
      children: updatedChildren,
      infants: updatedInfants,
      pets: updatedPets,
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
        className="fixed inset-0 flex items-center justify-center z-10"
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
            <Title2 className="text-[#C8C8C8]">Ages 13 or above</Title2>
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
            <Title2 className="text-[#C8C8C8]">Ages 2 - 12</Title2>
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
        <div className="flex items-center justify-between mb-4">
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

        <div className="w-full h-[1px] bg-[#F2F2F2] mb-4" />

        {/* Pets Counter */}
        <div className="flex items-center justify-between">
          <div>
            <Heading6 className="text-[#222222]">Pets</Heading6>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="secondary"
              onClick={() => handleDecrement("pets")}
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
              {pets}
            </Title1>
            <Button
              type="primary"
              onClick={() => handleIncrement("pets")}
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

export default HotelSearchBar;
