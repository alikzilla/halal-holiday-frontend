"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heading6, Title1, Title2 } from "@/components/common";
import { Button } from "@/components/ui";
import { cn } from "@/core/lib/utils";
import {
  CityWithCountry,
  Country,
  useAllLocations,
} from "@/core/hooks/use-locations";
import { useRouter } from "next/navigation";

const HotelSearchBar = () => {
  const [, setIsFromModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  const [toDestination, setToDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState<{
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }>({ adults: 0, children: 0, infants: 0, pets: 0 });

  const router = useRouter();
  const [cachedCountries, setCachedCountries] = useState<Country[]>([]);
  const [cachedCities, setCachedCities] = useState<CityWithCountry[]>([]);
  const { countries, cities, loading } = useAllLocations();

  useEffect(() => {
    if (!loading) {
      setCachedCountries(countries);
      setCachedCities(cities);
    }
  }, [loading, countries, cities]);

  const openDateModal = () => setIsDateModalOpen(true);
  const openGuestsModal = () => setIsGuestsModalOpen(true);

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

  const handleSearchSubmit = () => {
    // Find the selected city from the cachedCities
    const selectedCity = cachedCities.find(
      (city) => `${city.title}, ${city.countryName}` === toDestination
    );

    if (!selectedCity) {
      console.error("No city selected");
      return;
    }

    // Prepare query parameters
    const queryParams = new URLSearchParams();
    queryParams.append("cityId", selectedCity.id.toString());
    if (checkInDate) queryParams.append("checkIn", checkInDate);
    if (checkOutDate) queryParams.append("checkOut", checkOutDate);
    queryParams.append("adults", guests.adults.toString());
    queryParams.append("children", guests.children.toString());
    queryParams.append("infants", guests.infants.toString());
    queryParams.append("pets", guests.pets.toString());

    // Navigate to the hotel catalog page
    router.push(`/hotel/catalog?${queryParams.toString()}`);
  };

  return (
    <div className="w-full py-4">
      <div className="flex w-full items-center justify-between gap-4">
        {/* To Destination Button */}
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

          {isToModalOpen && (
            <Modal
              title="Select To Destination"
              onClose={closeToModal}
              onSelect={handleToDestinationSelect}
              cachedCountries={cachedCountries}
              cachedCities={cachedCities}
              loading={loading}
            />
          )}
        </div>

        {/* Date Check-in/Check-out Button */}
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
        <div className="relative flex-1 z-42">
          <div
            className="relative z-42 flex items-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100"
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
          onClick={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

const Modal = ({
  cachedCountries,
  cachedCities,
  loading,
  onClose,
  onSelect,
}: {
  title: string;
  cachedCountries: Country[];
  cachedCities: CityWithCountry[];
  countries?: Country[];
  cities?: CityWithCountry[];
  loading?: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSelectedDestination] = useState("");

  // Corrected filtering logic
  const filteredCountries = cachedCountries
    .filter((country) =>
      country.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, searchQuery ? 5 : cachedCountries.length);

  const filteredCities = cachedCities
    .filter((city) => {
      const matchesCity = city.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCountry = city.countryName
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCity || matchesCountry;
    })
    .slice(0, searchQuery ? 5 : cachedCities.length);

  const hasResults = filteredCountries.length > 0 || filteredCities.length > 0;

  const handleSelectDestination = (destination: string) => {
    setSelectedDestination(destination);
    onSelect(destination);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClose();
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

        {!searchQuery && (
          <Title1 className="text-black mb-6">Suggested destinations</Title1>
        )}

        {/* Results */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {loading ? (
            // Show skeleton loading while fetching
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 rounded-full"
              >
                <div className="bg-[#F9F9F9] rounded-full p-2 w-[44px] h-[44px] animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
            ))
          ) : hasResults ? (
            <>
              {/* Show countries */}
              {filteredCountries.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-500 mb-2">Countries</h3>
                  {filteredCountries.map((country) => (
                    <div
                      key={`country-${country.id}`}
                      className="flex items-center justify-start gap-2 rounded-full hover:bg-gray-100 cursor-pointer p-2"
                      onClick={() => handleSelectDestination(country.title)}
                    >
                      <Image
                        src={"/assets/icons/location.svg"}
                        alt={"location"}
                        width={44}
                        height={44}
                        className="bg-[#F9F9F9] rounded-full p-2"
                      />
                      <div>
                        <p className="font-medium">{country.title}</p>
                        {country.is_top === 1 && (
                          <p className="text-sm text-gray-500">
                            Good destination
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Show cities with country */}
              {filteredCities.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-500 mb-2">Cities</h3>
                  {filteredCities.map((city) => (
                    <div
                      key={`city-${city.id}`}
                      className="flex items-center justify-start gap-2 rounded-full hover:bg-gray-100 cursor-pointer p-2"
                      onClick={() =>
                        handleSelectDestination(
                          `${city.title}, ${city.countryName}`
                        )
                      }
                    >
                      <Image
                        src={"/assets/icons/location.svg"}
                        alt={"location"}
                        width={44}
                        height={44}
                        className="bg-[#F9F9F9] rounded-full p-2"
                      />
                      <div>
                        <p className="font-medium">{city.title}</p>
                        <p className="text-sm text-gray-500">
                          {city.countryName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500 text-center py-4">
              No destinations found
            </p>
          )}
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
