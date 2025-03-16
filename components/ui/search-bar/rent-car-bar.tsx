import { useState } from "react";
import Button from "../button/button";
import Image from "next/image";
import { Heading6, Title1 } from "@/components/common";
import { cn } from "@/lib/utils";

const RentCarSearchBar = () => {
  const [isFromModalOpen, setIsFromModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);

  const [fromDestination, setFromDestination] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [carModel, setCarModel] = useState("");

  // const openFromModal = () => setIsFromModalOpen(true);
  const openDateModal = () => setIsDateModalOpen(true);
  const openCarModal = () => setIsCarModalOpen(true);

  const toggleFromModal = () => {
    setIsFromModalOpen(!isFromModalOpen);
    closeDateModal();
    closeCarModal();
  };

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
    closeFromModal();
    closeCarModal();
  };

  const toggleGuestsModal = () => {
    setIsCarModalOpen(!isCarModalOpen);
    closeFromModal();
    closeDateModal();
  };

  const closeFromModal = () => setIsFromModalOpen(false);
  const closeDateModal = () => setIsDateModalOpen(false);
  const closeCarModal = () => setIsCarModalOpen(false);

  const handleFromDestinationSelect = (destination: string) => {
    setFromDestination(destination);
    closeFromModal();
    openDateModal();
  };

  const handleDateSelect = (pickUp: string, dropOff: string) => {
    setPickUpDate(pickUp);
    setDropOffDate(dropOff);
    closeDateModal();
    openCarModal();
  };

  const handleCarModalSelect = (carModel: string) => {
    setCarModel(carModel);
    console.log(carModel);
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between gap-4">
        {/* From Destination Button */}
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

        {/* Date Pick up/Drop off Button */}
        <div className="relative flex-1 z-42">
          <div
            className="relative z-44 flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
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
                Pick Up / Drop-off date
              </Heading6>
              <Heading6 className="text-[#4C4C4C]">
                {pickUpDate && dropOffDate
                  ? `${pickUpDate} - ${dropOffDate}`
                  : "Add dates"}
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
        <div className="relative flex-1 z-42">
          <div
            className="relative z-42 flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
            onClick={toggleGuestsModal}
          >
            <Image
              src={"/assets/icons/car.svg"}
              alt={"car"}
              width={44}
              height={44}
              className="bg-[#F9F9F9] rounded-full p-2"
            />
            <div className="flex flex-col">
              <Heading6 className="text-[#ADADAD]">Car</Heading6>
              <Heading6 className="text-[#4C4C4C]">
                {carModel ? `${carModel}` : "Choose model"}
              </Heading6>
            </div>
          </div>

          {isCarModalOpen && (
            <CarModal onClose={closeCarModal} onSelect={handleCarModalSelect} />
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
  const [activeTab, setActiveTab] = useState<"calendar" | "flexible">(
    "calendar"
  );
  const [stayDuration, setStayDuration] = useState<
    "weekend" | "week" | "month" | null
  >(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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
    setStayDuration(null);
  };

  // Apply selected dates
  const handleApply = () => {
    if (activeTab === "calendar" && checkIn && checkOut) {
      onSelect(
        checkIn.toISOString().split("T")[0],
        checkOut.toISOString().split("T")[0]
      );
    } else if (
      activeTab === "flexible" &&
      stayDuration &&
      selectedMonth !== null
    ) {
      const checkInDate = new Date(currentYear, selectedMonth, 1);
      const checkOutDate = new Date(currentYear, selectedMonth, 1);

      switch (stayDuration) {
        case "weekend":
          checkOutDate.setDate(checkInDate.getDate() + 2);
          break;
        case "week":
          checkOutDate.setDate(checkInDate.getDate() + 7);
          break;
        case "month":
          checkOutDate.setMonth(checkInDate.getMonth() + 1);
          break;
      }

      onSelect(
        checkInDate.toISOString().split("T")[0],
        checkOutDate.toISOString().split("T")[0]
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
        checkIn && checkOut && date >= checkIn && date <= checkOut;
      const isCheckIn =
        checkIn && date.toDateString() === checkIn.toDateString();
      const isCheckOut =
        checkOut && date.toDateString() === checkOut.toDateString();

      days.push(
        <Heading6
          key={i}
          className={`w-[50px] h-[40px] text-[#222222] flex justify-center items-center cursor-pointer rounded-lg gap-0 ${
            isCheckIn || isCheckOut
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

  const renderMonthViewFlexible = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => (
          <Button
            key={month}
            type="secondary"
            className={cn(
              `border hover:bg-[#E4ECEC] hover:border-[#266462] hover:text-[#266462]`,
              selectedMonth === index
                ? "bg-[#E4ECEC] border-[#266462] text-[#266462]"
                : ""
            )}
            onClick={() => {
              setSelectedMonth(index);
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

  // Render the Flexible tab
  const renderFlexibleTab = () => {
    return (
      <div className="space-y-4">
        {/* How long do you want to stay? */}
        <div>
          <h3 className="font-medium mb-2">How long do you want to stay?</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              type="secondary"
              className={cn(
                "hover:bg-[#E4ECEC] hover:border-[#266462] hover:text-[#266462]",
                stayDuration === "weekend"
                  ? "bg-[#E4ECEC] text-[#266462] border border-[#266462]"
                  : ""
              )}
              onClick={() => setStayDuration("weekend")}
            >
              {stayDuration === "weekend" ? (
                <Image
                  src={"assets/icons/radio.svg"}
                  alt="radio"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src={"assets/icons/radio-non.svg"}
                  alt="radio-non"
                  width={16}
                  height={16}
                />
              )}
              A weekend
            </Button>
            <Button
              type="secondary"
              className={cn(
                "hover:bg-[#E4ECEC] hover:border-[#266462] hover:text-[#266462]",
                stayDuration === "week"
                  ? "bg-[#E4ECEC] text-[#266462] border border-[#266462]"
                  : ""
              )}
              onClick={() => setStayDuration("week")}
            >
              {stayDuration === "week" ? (
                <Image
                  src={"assets/icons/radio.svg"}
                  alt="radio"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src={"assets/icons/radio-non.svg"}
                  alt="radio-non"
                  width={16}
                  height={16}
                />
              )}
              A week
            </Button>
            <Button
              type="secondary"
              className={cn(
                "hover:bg-[#E4ECEC] hover:border-[#266462] hover:text-[#266462]",
                stayDuration === "month"
                  ? "bg-[#E4ECEC] text-[#266462] border border-[#266462]"
                  : ""
              )}
              onClick={() => setStayDuration("month")}
            >
              {stayDuration === "month" ? (
                <Image
                  src={"assets/icons/radio.svg"}
                  alt="radio"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src={"assets/icons/radio-non.svg"}
                  alt="radio-non"
                  width={16}
                  height={16}
                />
              )}
              A month
            </Button>
          </div>
        </div>

        {/* When do you want to go? */}
        <div>
          <h3 className="font-medium mb-2">When do you want to go?</h3>
          {renderMonthViewFlexible()}
        </div>
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
          className="bg-white p-4 rounded-xl w-[388px] shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <Button
              type={activeTab === "calendar" ? "primary" : "secondary"}
              className={cn(
                "flex-1",
                activeTab === "calendar"
                  ? "bg-[#E4ECEC] text-[var(--primary)] border border-[var(--primary)] hover:bg-[#E4ECEC]"
                  : ""
              )}
              onClick={() => setActiveTab("calendar")}
            >
              Calendar
            </Button>
            <Button
              type={activeTab === "flexible" ? "primary" : "secondary"}
              className={cn(
                "flex-1",
                activeTab === "flexible"
                  ? "bg-[#E4ECEC] text-[var(--primary)] border border-[var(--primary)] hover:bg-[#E4ECEC]"
                  : ""
              )}
              onClick={() => setActiveTab("flexible")}
            >
              Flexible
            </Button>
          </div>

          {/* Calendar Tab */}
          {activeTab === "calendar" && renderCalendarTab()}

          {/* Flexible Tab */}
          {activeTab === "flexible" && renderFlexibleTab()}

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
  onClose,
  onSelect,
}: {
  onClose: () => void;
  onSelect: (carModel: string) => void;
}) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
      onSelect("BMW");
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
      ></div>
    </>
  );
};

export default RentCarSearchBar;
