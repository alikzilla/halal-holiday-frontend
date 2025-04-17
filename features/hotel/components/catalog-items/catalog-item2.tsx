"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Body2, Heading3, Heading5, Title2 } from "@/components/common";
import { IHotel } from "@/core/types/hotels";
import { useSearchParams } from "next/navigation";

const HotelCard2: React.FC<IHotel> = ({
  id,
  title,
  source,
  photo,
  url,
  stars,
  score,
  body,
  is_top,
  city_title,
  country_title,
  score_text,
  reviews,
  price,
}) => {
  const searchParams = useSearchParams();

  const buildHotelUrl = () => {
    const params = new URLSearchParams();

    params.set("id", id.toString());

    if (searchParams.has("checkIn"))
      params.set("checkIn", searchParams.get("checkIn")!);
    if (searchParams.has("checkOut"))
      params.set("checkOut", searchParams.get("checkOut")!);
    if (searchParams.has("adults"))
      params.set("adults", searchParams.get("adults")!);
    if (searchParams.has("children"))
      params.set("children", searchParams.get("children")!);
    if (searchParams.has("chage"))
      params.set("chage", searchParams.get("chage")!);

    return `/hotel/${url}?${params.toString()}`;
  };

  return (
    <Link
      href={buildHotelUrl()}
      className="w-full border border-[#F2F2F2] rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      {/* Image with rating badge */}
      <div className="relative w-full md:w-[330px] aspect-[4/3]">
        <div className="absolute z-[1] bottom-2 left-2 right-2 h-1/3 backdrop-blur-md mask-gradient rounded-lg"></div>
        <div className="absolute z-[1] top-5 right-5 bg-[#FFFFFF33]/20 backdrop-blur-lg flex items-center gap-2 text-white rounded-[30px] py-1 px-3">
          <Image
            src={"/assets/icons/star-yellow.svg"}
            alt="src"
            height={18}
            width={18}
          />{" "}
          {stars}
        </div>
        <Image
          src={`https://halalholidaycheck.com/images/properties/${photo}`}
          alt={title || "Hotel name"}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row items-start justify-between p-4">
        <div className="w-full md:w-2/3">
          {/* Hotel name and location */}
          <div className="mb-4">
            <Heading5 className="text-[#222] mb-2 line-clamp-2">
              {title}
            </Heading5>
            <Body2 className="text-[#ADADAD] flex items-center gap-1">
              <Image
                src="/assets/icons/location-grey.svg"
                alt="location"
                width={14}
                height={14}
              />
              {city_title}, {country_title}
            </Body2>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col h-full justify-between mt-4 md:mt-0">
          {/* Rooms left and tag */}
          <div className="flex justify-end items-center mb-4">
            {score_text && (
              <Body2 className="bg-[#F9F9F9] text-[#222] px-2 py-1 rounded-full">
                {score_text}
              </Body2>
            )}
          </div>

          {/* Price section */}
          <div className="text-right">
            <div className="w-full flex items-end justify-end gap-2 mb-1">
              <Heading3 className="text-[#266462] text-right font-semibold">
                ${price && price.toFixed(2)}
              </Heading3>
            </div>
            <Title2 className="text-[#919191] text-sm">
              Include taxes and charges
            </Title2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard2;
