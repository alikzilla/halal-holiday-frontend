import React from "react";
import { Button, Input, Select } from "../";
import { Heading4 } from "@/components/common";
import { GuestData } from "@/types/guest";

interface AddServicesProps {
  setActiveTab: (activeTab: "personal" | "services" | "checkout") => void;
  formData: GuestData;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}

const AddServices: React.FC<AddServicesProps> = ({
  setActiveTab,
  formData,
  handleChange,
}) => {
  const driverOptions = [
    { value: "self", label: "Self-drive" },
    { value: "with", label: "With driver" },
  ];

  const classOptions = [
    { value: "economy", label: "Economy" },
    { value: "business", label: "Business" },
    { value: "first", label: "First Class" },
  ];

  const seatOptions = [
    { value: "window", label: "Window" },
    { value: "aisle", label: "Aisle" },
  ];

  const vehicleOptions = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "luxury", label: "Luxury" },
  ];

  return (
    <>
      <div className="bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start mb-6">
        <Heading4 className="text-[#222222]">Rent a Car Details</Heading4>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Pickup Location"
            value={formData.carPickupLocation || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "carPickupLocation", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={[
              {
                value: "LAX",
                label: "Los Angeles International Airport (LAX)",
              },
              {
                value: "JFK",
                label: "John F. Kennedy International Airport (JFK)",
              },
            ]}
          />

          <Input
            label="Pickup / Drop-off Date & Time"
            value="2024-09-15 | 10:00 AM - 2024-09-20 | 3:00 PM"
            readOnly
          />

          <Select
            label="Driver Option"
            value={formData.driverOption || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "driverOption", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={driverOptions}
          />
        </form>
      </div>

      <div className="bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start mb-6">
        <Heading4 className="text-[#222222]">Flight Details</Heading4>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Departure Airport"
            value={formData.departureAirport || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "departureAirport", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={[
              {
                value: "JFK",
                label: "John F. Kennedy International Airport (JFK)",
              },
            ]}
          />

          <Input
            label="Departure / Return Date & Time"
            value="2024-09-15 | 10:00 AM - 2024-09-20 | 3:00 PM"
            readOnly
          />

          <Select
            label="Class Type"
            value={formData.flightClass || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "flightClass", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={classOptions}
          />

          <Select
            label="Seat Preference"
            value={formData.seatPreference || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "seatPreference", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={seatOptions}
          />
        </form>
      </div>

      <div className="bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start mb-6">
        <Heading4 className="text-[#222222]">Transfer Details</Heading4>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Pickup Location"
            value={formData.transferPickupLocation || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "transferPickupLocation", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={[
              { value: "DXB", label: "Dubai International Airport (DXB)" },
            ]}
          />

          <Input label="Date & Time" value="2024-11-01 | 12:00 PM" readOnly />

          <Select
            label="Vehicle Type"
            value={formData.vehicleType || ""}
            onChange={(value) =>
              handleChange({
                target: { name: "vehicleType", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={vehicleOptions}
          />
        </form>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          type="secondary"
          className="w-[107px] py-[10px] px-4"
          onClick={() => setActiveTab("personal")}
        >
          Back
        </Button>
        <Button
          className="w-[107px] py-[10px] px-4"
          onClick={() => setActiveTab("checkout")}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default AddServices;
