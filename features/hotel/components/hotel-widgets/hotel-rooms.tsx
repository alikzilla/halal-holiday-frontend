"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heading6,
  Heading5,
  Heading3,
  Heading4,
  Title2,
  Heading2,
  Heading1,
} from "@/components/common";
import { Button } from "@/components/ui";

const HotelRooms = () => {
  const roomTypes = [
    {
      name: "Deluxe Oda",
      image:
        "https://s3-alpha-sig.figma.com/img/f2f2/f176/3537b3d4466cc5ada4d8a26e7fccac07?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l-p14YmyurGyf~RJxYBBNzr0Yib3kylS6S-IUiVcqxhGOJEtJjbgcaQ5ifgi4Msz0i4HFlCbrQFVlSeFnWVrosAYWbyRVMruD~IEWljL-cFKCssMh8H1fwD9an2GPOi~6KWC2iIUfkafqkAHMb3bajJUvFpxYmo4CX0e0hQFNMgW9ns4aJZ538aljJKjHcT5IR0tpk4twKL~zUc-U6NAbpMG1ECtpr9ut9mExeIwTDSh8AwKBsHQUd6sFga24C5l~QPBCWasORKPul5VbhwvYtUAqB-ICf9tG5GORmEfLxk~f4FkEvWmOr6TMJPufiIKAwQF6i0cvVM0yf5jKiPjwA__",
      accommodationOptions: [
        { name: "Standard", price: 14.115, description: "" },
        {
          name: "Ultra Her Şey Dahil",
          price: 10120,
          description: "Platinum Member Special",
        },
      ],
      facilities: [
        {
          name: "Non-smoking rooms",
          icon: "/assets/emojis/no-smoking.svg",
        },
        {
          name: "Fitness centre",
          icon: "/assets/emojis/strength.svg",
        },
        {
          name: "Room service",
          icon: "/assets/emojis/bell.svg",
        },
        {
          name: "Breakfast",
          icon: "/assets/emojis/croissant.svg",
        },
        {
          name: "Bar",
          icon: "/assets/emojis/coctail.svg",
        },
        {
          name: "Private parking",
          icon: "/assets/emojis/car.svg",
        },
        {
          name: "Restaurants",
          icon: "/assets/emojis/plate.svg",
        },
      ],
      duration: "10 nights, 2 adults",
    },
    {
      name: "Deluxe Oda",
      image:
        "https://s3-alpha-sig.figma.com/img/f2f2/f176/3537b3d4466cc5ada4d8a26e7fccac07?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l-p14YmyurGyf~RJxYBBNzr0Yib3kylS6S-IUiVcqxhGOJEtJjbgcaQ5ifgi4Msz0i4HFlCbrQFVlSeFnWVrosAYWbyRVMruD~IEWljL-cFKCssMh8H1fwD9an2GPOi~6KWC2iIUfkafqkAHMb3bajJUvFpxYmo4CX0e0hQFNMgW9ns4aJZ538aljJKjHcT5IR0tpk4twKL~zUc-U6NAbpMG1ECtpr9ut9mExeIwTDSh8AwKBsHQUd6sFga24C5l~QPBCWasORKPul5VbhwvYtUAqB-ICf9tG5GORmEfLxk~f4FkEvWmOr6TMJPufiIKAwQF6i0cvVM0yf5jKiPjwA__",
      accommodationOptions: [
        { name: "Standard", price: 14.115, description: "" },
        {
          name: "Premium",
          price: 20120,
          description: "",
        },
      ],
      facilities: [
        {
          name: "Non-smoking rooms",
          icon: "/assets/emojis/no-smoking.svg",
        },
        {
          name: "Fitness centre",
          icon: "/assets/emojis/strength.svg",
        },
        {
          name: "Room service",
          icon: "/assets/emojis/bell.svg",
        },
        {
          name: "Breakfast",
          icon: "/assets/emojis/croissant.svg",
        },
        {
          name: "Bar",
          icon: "/assets/emojis/coctail.svg",
        },
        {
          name: "Private parking",
          icon: "/assets/emojis/car.svg",
        },
        {
          name: "Restaurants",
          icon: "/assets/emojis/plate.svg",
        },
      ],
      duration: "10 nights, 2 adults",
    },
    {
      name: "Deluxe Oda",
      image:
        "https://s3-alpha-sig.figma.com/img/f2f2/f176/3537b3d4466cc5ada4d8a26e7fccac07?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l-p14YmyurGyf~RJxYBBNzr0Yib3kylS6S-IUiVcqxhGOJEtJjbgcaQ5ifgi4Msz0i4HFlCbrQFVlSeFnWVrosAYWbyRVMruD~IEWljL-cFKCssMh8H1fwD9an2GPOi~6KWC2iIUfkafqkAHMb3bajJUvFpxYmo4CX0e0hQFNMgW9ns4aJZ538aljJKjHcT5IR0tpk4twKL~zUc-U6NAbpMG1ECtpr9ut9mExeIwTDSh8AwKBsHQUd6sFga24C5l~QPBCWasORKPul5VbhwvYtUAqB-ICf9tG5GORmEfLxk~f4FkEvWmOr6TMJPufiIKAwQF6i0cvVM0yf5jKiPjwA__",
      accommodationOptions: [
        { name: "Standard", price: 14.115, description: "" },
        {
          name: "Premium",
          price: 20120,
          description: "",
        },
      ],
      facilities: [
        {
          name: "Non-smoking rooms",
          icon: "/assets/emojis/no-smoking.svg",
        },
        {
          name: "Fitness centre",
          icon: "/assets/emojis/strength.svg",
        },
        {
          name: "Room service",
          icon: "/assets/emojis/bell.svg",
        },
        {
          name: "Breakfast",
          icon: "/assets/emojis/croissant.svg",
        },
        {
          name: "Bar",
          icon: "/assets/emojis/coctail.svg",
        },
        {
          name: "Private parking",
          icon: "/assets/emojis/car.svg",
        },
        {
          name: "Restaurants",
          icon: "/assets/emojis/plate.svg",
        },
      ],
      duration: "10 nights, 2 adults",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div id="rooms" className="w-full py-4 pt-[50px]">
      <div className="w-full mb-8">
        <Heading5 className="text-2xl font-bold">Rooms</Heading5>
        <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
        <div className="w-full md:flex-1 px-3 py-2 border border-[#F2F2F2] flex items-center gap-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
          <Image
            src={"/assets/icons/calendar.svg"}
            alt={"calendar"}
            width={44}
            height={44}
            className="bg-[#F9F9F9] rounded-full p-2"
          />
          <div className="flex flex-col">
            <Heading6 className="text-[#ADADAD]">Check in / Check out</Heading6>
            <Heading6 className="text-[#4C4C4C]">
              Tue Mar 4 - Fri 14 Mar
            </Heading6>
          </div>
        </div>
        <div className="w-full md:flex-1 px-3 py-2 border border-[#F2F2F2] flex items-center gap-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
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
              2 adults, 0 childeren, 1 infants
            </Heading6>
          </div>
        </div>
        <Button type="tertiary" className="w-full md:w-[160px] h-[60px]">
          Find Room
        </Button>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-6">
        {roomTypes.map((room, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row items-start gap-4 p-4 border rounded-lg"
          >
            <div className="w-full lg:w-[250px] h-[200px] lg:h-[250px]">
              <Image
                src={room.image}
                alt={room.name}
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex-1 w-full">
              <div className="py-2 lg:py-4">
                <Heading3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">
                  {room.name}
                </Heading3>
                <div className="flex items-center justify-start flex-wrap gap-2">
                  {room.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-[#F9F9F9] py-1 px-2 rounded-[30px] text-sm"
                    >
                      <Image
                        src={facility.icon}
                        alt={facility.name}
                        width={16}
                        height={16}
                      />
                      <span className="whitespace-nowrap">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 lg:hidden">
                <div className="mb-4">
                  <Heading4>Accommodation Options</Heading4>
                </div>
                <div className="flex flex-col gap-3">
                  {room.accommodationOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`w-full flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedOption === index
                          ? "bg-[#E4ECEC] border-[#266462]"
                          : "hover:bg-[#F9F9F9]"
                      } ${
                        option.description === "Platinum Member Special"
                          ? "border-none text-white"
                          : ""
                      }`}
                      style={{
                        backgroundImage:
                          option.description === "Platinum Member Special"
                            ? `var(--gradient)`
                            : undefined,
                      }}
                      onClick={() => setSelectedOption(index)}
                    >
                      <div className="w-full flex justify-between items-center">
                        <div>
                          {option.description && (
                            <Title2 className="text-[#FFFFFF]">
                              {option.description}
                            </Title2>
                          )}
                          <Heading5
                            className={`${
                              option.description === "Platinum Member Special"
                                ? "text-white"
                                : "text-[#222]"
                            }`}
                          >
                            {option.name}
                          </Heading5>
                        </div>
                        <Heading5
                          className={`${
                            option.description === "Platinum Member Special"
                              ? "text-white"
                              : "text-[#222]"
                          }`}
                        >
                          {option.price} TL
                        </Heading5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block flex-1 p-4">
              <div className="mb-6">
                <Heading4>Accommodation Options</Heading4>
              </div>
              <div className="flex flex-col gap-4">
                {room.accommodationOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`w-full h-[70px] flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedOption === index
                        ? "bg-[#E4ECEC] border-[#266462]"
                        : "hover:bg-[#F9F9F9]"
                    } ${
                      option.description === "Platinum Member Special"
                        ? "border-none text-white"
                        : ""
                    }`}
                    style={{
                      backgroundImage:
                        option.description === "Platinum Member Special"
                          ? `var(--gradient)`
                          : undefined,
                    }}
                    onClick={() => setSelectedOption(index)}
                  >
                    <div className="w-full flex justify-between items-center">
                      <div>
                        {option.description && (
                          <Title2 className="text-[#FFFFFF] mt-1">
                            {option.description}
                          </Title2>
                        )}
                        <Heading5
                          className={`${
                            option.description === "Platinum Member Special"
                              ? "text-white"
                              : "text-[#222]"
                          }`}
                        >
                          {option.name}
                        </Heading5>
                      </div>
                      <Heading5
                        className={`${
                          option.description === "Platinum Member Special"
                            ? "text-white"
                            : "text-[#222]"
                        }`}
                      >
                        {option.price} TL
                      </Heading5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-start lg:items-end justify-between gap-4 mt-4 lg:mt-0">
              <div className="flex flex-col items-start lg:items-end gap-1">
                <Title2>{room.duration}</Title2>
                <Heading2 className="text-[#266462]">12.120 TL</Heading2>
              </div>
              <Button className="w-full lg:w-auto">Reserve room</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelRooms;
