import { GuestData } from "@/types/guest";
import React from "react";
import { Button, Input, Select } from "../";
import { Heading4 } from "@/components/common";

const PersonalInfo = ({
  formData,
  handleChange,
  setActiveTab,
}: {
  formData: GuestData;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  setActiveTab: (activeTab: "personal" | "services" | "checkout") => void;
}) => {
  const countryOptions = [
    { value: "US", label: "United States" },
    { value: "UK", label: "United Kingdom" },
    { value: "AE", label: "United Arab Emirates" },
  ];

  const phonePrefixOptions = [
    { value: "+44", label: "+44" },
    { value: "+1", label: "+1" },
    { value: "+971", label: "+971" },
  ];

  return (
    <>
      <div className="bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start">
        <Heading4 className="text-[#222222]">Personal Details</Heading4>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input
            label="First name"
            placeholder="John"
            value={formData.firstName}
            onChange={(value) =>
              handleChange({
                target: { name: "firstName", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            hintText=""
          />

          <Input
            label="Last name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(value) =>
              handleChange({
                target: { name: "lastName", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            hintText=""
          />

          <Input
            label="Email address"
            placeholder="john.doe@gmail.com"
            value={formData.email}
            onChange={(value) =>
              handleChange({
                target: { name: "email", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            type="email"
            hintText="Confirmation email goes to this address"
          />

          <Select
            label="Country/Region"
            value={formData.country}
            onChange={(value) =>
              handleChange({
                target: { name: "country", value },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
            options={countryOptions}
            hintText="This is a hint text"
          />

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone number
            </label>
            <div className="flex items-start">
              <Select
                value={formData.phonePrefix || "+44"}
                onChange={(value) =>
                  handleChange({
                    target: { name: "phonePrefix", value },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
                options={phonePrefixOptions}
                className="w-20 mr-2"
              />
              <Input
                value={formData.phone}
                placeholder="12345678"
                onChange={(value) =>
                  handleChange({
                    target: { name: "phone", value },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
                type="tel"
                hintText=""
                className="flex-1"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Rest of your component remains the same */}
      <div className="mt-8 flex justify-end">
        <Button
          className="w-[107px] py-[10px] px-4"
          onClick={() => setActiveTab("services")}
        >
          Next
        </Button>
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-4">I&apos;m interested in:</h3>
        {/* ... rest of your interest checkboxes ... */}
      </div>
    </>
  );
};

export default PersonalInfo;
